rm aloe-arquitetura.tar
mkdir aloe-arquitetura
cp -r .next aloe-arquitetura
cp package.json aloe-arquitetura
tar -cf aloe-arquitetura.tar aloe-arquitetura
rm -rf aloe-arquitetura