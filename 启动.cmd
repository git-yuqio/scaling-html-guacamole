@echo off
start /B python -m http.server 8001 -d "%~dp0dist"
timeout /t 2 /nobreak >nul
start msedge http://localhost:8001
echo The portfolio is ready! You can close this window once the browser opens.
pause
