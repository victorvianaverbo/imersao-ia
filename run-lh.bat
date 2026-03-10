@echo off
npx lighthouse http://localhost:8888/ --chrome-flags="--headless=new" --preset=desktop --output=json --output-path=lighthouse-desktop-antes.json --quiet
npx lighthouse http://localhost:8888/ --chrome-flags="--headless=new" --output=json --output-path=lighthouse-mobile-antes.json --quiet
