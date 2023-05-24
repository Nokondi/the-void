apt upgrade -y
apt update -y
apt-get install nodejs npm -y
npm install ~/the-void/frontend -y
npx expo export:web ~/the-void/frontend -y
rm -rf /usr/share/nginx/html/*
cp -R ~/the-void/frontend/web-build /usr/share/nginx/html