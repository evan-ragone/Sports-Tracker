# processor.py
import gpxpy
import numpy as np

def parse_gpx(file_path):
    """
    Parse a GPX file and return a list of points with
    time, latitude, longitude, and elevation.
    """
    points = []
    try:
        with open(file_path, 'r') as f:
            gpx = gpxpy.parse(f)
            for track in gpx.tracks:
                for segment in track.segments:
                    for p in segment.points:
                        points.append({
                            "time": p.time,
                            "lat": p.latitude,
                            "lon": p.longitude,
                            "elevation": p.elevation
                        })
    except Exception as e:
        print(f"Error parsing GPX: {e}")
    return points

if __name__ == "__main__":
    sample_file = "sample.gpx"  # replace with your GPX file path
    points = parse_gpx(sample_file)
    print(f"Parsed {len(points)} points:")
    for pt in points[:5]:  # print first 5 points
        print(pt)
