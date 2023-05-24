apt upgrade
apt update
apt-get install nodejs npm -y
npm install ~/the-void/frontend
npx expo export:web ~/the-void/frontend
rm -rf /usr/share/nginx/html/*
cp -R ~/the-void/frontend/web-build /usr/share/nginx/html