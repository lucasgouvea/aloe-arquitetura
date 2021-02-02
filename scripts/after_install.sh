#!/bin/bash
cd /home/ec2-user/aloe-arquitetura
echo "Deleting older app version"
/root/.nvm/versions/node/v12.20.1/bin/pm2 del next
echo "Running npm install"
npm install
echo "Running npm run build"
npm run build