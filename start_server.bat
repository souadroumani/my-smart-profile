@echo off
start "" http://localhost:8000/fun.html
python -m http.server 8000
