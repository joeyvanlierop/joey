#!/bin/bash

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed"
    exit 1
fi

# Check if ffprobe is installed
if ! command -v ffprobe &> /dev/null; then
    echo "Error: ffprobe is not installed"
    exit 1
fi

# Check if input file is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

input_file="$1"

# Get original video bitrate
video_bitrate=$(ffprobe -v error -select_streams v:0 -show_entries stream=bit_rate -of default=noprint_wrappers=1:nokey=1 "$input_file")

# Get original audio bitrate
audio_bitrate=$(ffprobe -v error -select_streams a:0 -show_entries stream=bit_rate -of default=noprint_wrappers=1:nokey=1 "$input_file")

# Convert the video to iOS compatible format while maintaining quality
output_file="${input_file%.*}_converted.mp4"
ffmpeg -i "$input_file" -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -b:v "$video_bitrate" -c:a aac -b:a "$audio_bitrate" "$output_file"

echo "Conversion completed. Output file: $output_file"
