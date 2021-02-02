echo "Setting node version - 12"
nvm use 12
echo "Starting app"
pm2 start npm --name "next" -- run prod