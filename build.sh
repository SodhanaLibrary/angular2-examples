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

# copy css and index html
cp -R css dist/css
cp production/index.html dist/

# create bundle, minify bundle, copy html file
mkdir dist/appendOrPrependHtml
node_modules/browserify/bin/cmd.js -s main app/appendOrPrependHtml/main.js > dist/appendOrPrependHtml/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/appendOrPrependHtml/bundle.js --screw-ie8 --compress --mangle --output dist/appendOrPrependHtml/bundle.min.js
cp app/appendOrPrependHtml/index.html dist/appendOrPrependHtml
