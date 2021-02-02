#!/bin/bash
cd /home/ec2-user/aloe-arquitetura
echo "Deleting older app version"
pm2 del next
echo "Running npm install"
npm install
echo "Running npm run build"
npm run build