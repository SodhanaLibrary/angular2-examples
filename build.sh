# compile typescript
node_modules/typescript/bin/tsc

# clear dist
rm -rf dist
mkdir dist
mkdir dist/dependencies

# copy production files
cp node_modules/core-js/client/shim.min.js dist/dependencies/
cp node_modules/zone.js/dist/zone.js dist/dependencies/
cp node_modules/reflect-metadata/Reflect.js dist/dependencies/
cp node_modules/systemjs/dist/system.src.js dist/dependencies/

# copy css
cp -R css dist/css

# create bundle, minify bundle, copy html file
node_modules/browserify/bin/cmd.js -s main production/main.prod.js > dist/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/bundle.js --screw-ie8 --compress --mangle --output dist/bundle.min.js
cp production/index.html dist/
