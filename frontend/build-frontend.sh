apt upgrade -y
apt update -y
apt-get install nodejs npm -y
npm install -y
npx expo export:web -y
rm -rf /usr/share/nginx/html/*
cp ./web-build /usr/share/nginx/html