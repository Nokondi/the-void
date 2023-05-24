apt upgrade -y
apt update -y
apt-get install nodejs npm -y
npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest
npm install -y
npx expo export:web
rm -rf /usr/share/nginx/html/*
cp ./web-build /usr/share/nginx/html