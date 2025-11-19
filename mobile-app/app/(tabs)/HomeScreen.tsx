import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Button } from "react-native";

export default function HomeScreen() {
  const [status, setStatus] = useState("Checking...");
  const [color, setColor] = useState("#888");

  // <-- Change this to your backend URL
  const backendUrl = "http://localhost:3000/health";

  const checkHealth = async () => {
    try {
      setStatus("Checking...");
      setColor("#888");

      const res = await fetch(backendUrl);
      const data = await res.json();

      setStatus("Backend OK: " + data.status);
      setColor("green");
    } catch (err) {
      console.log(err);
      setStatus("Error connecting to backend");
      setColor("red");
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Connectivity Test</Text>
      <Text style={[styles.status, { color }]}>{status}</Text>
      {status === "Checking..." && <ActivityIndicator size="large" />}
      <View style={{ marginTop: 20 }}>
        <Button title="Retry" onPress={checkHealth} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 20 },
  status: { fontSize: 18, textAlign: "center" },
});
