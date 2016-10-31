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
cp -R css dist/
cp production/index.html dist/

# create bundle, minify bundle, copy html file
mkdir dist/appendOrPrependHtml
node_modules/browserify/bin/cmd.js -s main app/appendOrPrependHtml/main.js > dist/appendOrPrependHtml/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/appendOrPrependHtml/bundle.js --screw-ie8 --compress --mangle --output dist/appendOrPrependHtml/bundle.min.js
cp app/appendOrPrependHtml/index.html dist/appendOrPrependHtml

# create bundle, minify bundle, copy html file
mkdir dist/setTextOrHTML
node_modules/browserify/bin/cmd.js -s main app/setTextOrHTML/main.js > dist/setTextOrHTML/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/setTextOrHTML/bundle.js --screw-ie8 --compress --mangle --output dist/setTextOrHTML/bundle.min.js
cp app/setTextOrHTML/index.html dist/setTextOrHTML

# create bundle, minify bundle, copy html file
mkdir dist/detectCmdKeys
node_modules/browserify/bin/cmd.js -s main app/detectCmdKeys/main.js > dist/detectCmdKeys/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectCmdKeys/bundle.js --screw-ie8 --compress --mangle --output dist/detectCmdKeys/bundle.min.js
cp app/detectCmdKeys/index.html dist/detectCmdKeys

# create bundle, minify bundle, copy html file
mkdir dist/detectCtrlKeys
node_modules/browserify/bin/cmd.js -s main app/detectCtrlKeys/main.js > dist/detectCtrlKeys/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectCtrlKeys/bundle.js --screw-ie8 --compress --mangle --output dist/detectCtrlKeys/bundle.min.js
cp app/detectCtrlKeys/index.html dist/detectCtrlKeys

mkdir dist/detectEnterKeys
node_modules/browserify/bin/cmd.js -s main app/detectEnterKeys/main.js > dist/detectEnterKeys/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectEnterKeys/bundle.js --screw-ie8 --compress --mangle --output dist/detectEnterKeys/bundle.min.js
cp app/detectEnterKeys/index.html dist/detectEnterKeys

mkdir dist/imgSrcOnMouseOver
node_modules/browserify/bin/cmd.js -s main app/imgSrcOnMouseOver/main.js > dist/imgSrcOnMouseOver/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/imgSrcOnMouseOver/bundle.js --screw-ie8 --compress --mangle --output dist/imgSrcOnMouseOver/bundle.min.js
cp app/imgSrcOnMouseOver/index.html dist/imgSrcOnMouseOver

mkdir dist/setCursorPosition
node_modules/browserify/bin/cmd.js -s main app/setCursorPosition/main.js > dist/setCursorPosition/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/setCursorPosition/bundle.js --screw-ie8 --compress --mangle --output dist/setCursorPosition/bundle.min.js
cp app/setCursorPosition/index.html dist/setCursorPosition

mkdir dist/getCursorPosition
node_modules/browserify/bin/cmd.js -s main app/getCursorPosition/main.js > dist/getCursorPosition/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/getCursorPosition/bundle.js --screw-ie8 --compress --mangle --output dist/getCursorPosition/bundle.min.js
cp app/getCursorPosition/index.html dist/getCursorPosition

mkdir dist/showSelectedText
node_modules/browserify/bin/cmd.js -s main app/showSelectedText/main.js > dist/showSelectedText/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/showSelectedText/bundle.js --screw-ie8 --compress --mangle --output dist/showSelectedText/bundle.min.js
cp app/showSelectedText/index.html dist/showSelectedText

mkdir dist/getClassList
node_modules/browserify/bin/cmd.js -s main app/getClassList/main.js > dist/getClassList/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/getClassList/bundle.js --screw-ie8 --compress --mangle --output dist/getClassList/bundle.min.js
cp app/getClassList/index.html dist/getClassList

mkdir dist/detectScrollDirection
node_modules/browserify/bin/cmd.js -s main app/detectScrollDirection/main.js > dist/detectScrollDirection/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectScrollDirection/bundle.js --screw-ie8 --compress --mangle --output dist/detectScrollDirection/bundle.min.js
cp app/detectScrollDirection/index.html dist/detectScrollDirection

mkdir dist/checkInputFocus
node_modules/browserify/bin/cmd.js -s main app/checkInputFocus/main.js > dist/checkInputFocus/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/checkInputFocus/bundle.js --screw-ie8 --compress --mangle --output dist/checkInputFocus/bundle.min.js
cp app/checkInputFocus/index.html dist/checkInputFocus

mkdir dist/detectIFrameSrcChange
node_modules/browserify/bin/cmd.js -s main app/detectIFrameSrcChange/main.js > dist/detectIFrameSrcChange/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectIFrameSrcChange/bundle.js --screw-ie8 --compress --mangle --output dist/detectIFrameSrcChange/bundle.min.js
cp app/detectIFrameSrcChange/*.html dist/detectIFrameSrcChange

mkdir dist/readCsvData
node_modules/browserify/bin/cmd.js -s main app/readCsvData/main.js > dist/readCsvData/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/readCsvData/bundle.js --screw-ie8 --compress --mangle --output dist/readCsvData/bundle.min.js
cp app/readCsvData/*.html dist/readCsvData
cp app/readCsvData/*.csv dist/readCsvData

mkdir dist/checkDivOverflow
node_modules/browserify/bin/cmd.js -s main app/checkDivOverflow/main.js > dist/checkDivOverflow/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/checkDivOverflow/bundle.js --screw-ie8 --compress --mangle --output dist/checkDivOverflow/bundle.min.js
cp app/checkDivOverflow/*.html dist/checkDivOverflow

mkdir dist/disableWholeDivCont
node_modules/browserify/bin/cmd.js -s main app/disableWholeDivCont/main.js > dist/disableWholeDivCont/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/disableWholeDivCont/bundle.js --screw-ie8 --compress --mangle --output dist/disableWholeDivCont/bundle.min.js
cp app/disableWholeDivCont/*.html dist/disableWholeDivCont

mkdir dist/selectContentOfTextboxOnFocus
node_modules/browserify/bin/cmd.js -s main app/selectContentOfTextboxOnFocus/main.js > dist/selectContentOfTextboxOnFocus/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/selectContentOfTextboxOnFocus/bundle.js --screw-ie8 --compress --mangle --output dist/selectContentOfTextboxOnFocus/bundle.min.js
cp app/selectContentOfTextboxOnFocus/*.html dist/selectContentOfTextboxOnFocus

mkdir dist/detectScrollToBottom
node_modules/browserify/bin/cmd.js -s main app/detectScrollToBottom/main.js > dist/detectScrollToBottom/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectScrollToBottom/bundle.js --screw-ie8 --compress --mangle --output dist/detectScrollToBottom/bundle.min.js
cp app/detectScrollToBottom/*.html dist/detectScrollToBottom

mkdir dist/detectBrowserWindowClose
node_modules/browserify/bin/cmd.js -s main app/detectBrowserWindowClose/main.js > dist/detectBrowserWindowClose/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectBrowserWindowClose/bundle.js --screw-ie8 --compress --mangle --output dist/detectBrowserWindowClose/bundle.min.js
cp app/detectBrowserWindowClose/*.html dist/detectBrowserWindowClose

mkdir dist/detectScrollStop
node_modules/browserify/bin/cmd.js -s main app/detectScrollStop/main.js > dist/detectScrollStop/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/detectScrollStop/bundle.js --screw-ie8 --compress --mangle --output dist/detectScrollStop/bundle.min.js
cp app/detectScrollStop/*.html dist/detectScrollStop

mkdir dist/eventAfterUserFinishesTyping
node_modules/browserify/bin/cmd.js -s main app/eventAfterUserFinishesTyping/main.js > dist/eventAfterUserFinishesTyping/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/eventAfterUserFinishesTyping/bundle.js --screw-ie8 --compress --mangle --output dist/eventAfterUserFinishesTyping/bundle.min.js
cp app/eventAfterUserFinishesTyping/*.html dist/eventAfterUserFinishesTyping

mkdir dist/contextMenu
node_modules/browserify/bin/cmd.js -s main app/contextMenu/main.js > dist/contextMenu/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/contextMenu/bundle.js --screw-ie8 --compress --mangle --output dist/contextMenu/bundle.min.js
cp app/contextMenu/*.html dist/contextMenu

mkdir dist/shrinkingStickyHeader
node_modules/browserify/bin/cmd.js -s main app/shrinkingStickyHeader/main.js > dist/shrinkingStickyHeader/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/shrinkingStickyHeader/bundle.js --screw-ie8 --compress --mangle --output dist/shrinkingStickyHeader/bundle.min.js
cp app/shrinkingStickyHeader/*.html dist/shrinkingStickyHeader

mkdir dist/CssClassOnSelectedItem
node_modules/browserify/bin/cmd.js -s main app/CssClassOnSelectedItem/main.js > dist/CssClassOnSelectedItem/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/CssClassOnSelectedItem/bundle.js --screw-ie8 --compress --mangle --output dist/CssClassOnSelectedItem/bundle.min.js
cp app/CssClassOnSelectedItem/*.html dist/CssClassOnSelectedItem

mkdir dist/checkUnCheckRadioButton
node_modules/browserify/bin/cmd.js -s main app/checkUnCheckRadioButton/main.js > dist/checkUnCheckRadioButton/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/checkUnCheckRadioButton/bundle.js --screw-ie8 --compress --mangle --output dist/checkUnCheckRadioButton/bundle.min.js
cp app/checkUnCheckRadioButton/*.html dist/checkUnCheckRadioButton

mkdir dist/ng2GifPreview
node_modules/browserify/bin/cmd.js -s main app/ng2GifPreview/main.js > dist/ng2GifPreview/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/ng2GifPreview/bundle.js --screw-ie8 --compress --mangle --output dist/ng2GifPreview/bundle.min.js
cp app/ng2GifPreview/*.html dist/ng2GifPreview
cp app/ng2GifPreview/*.css dist/ng2GifPreview
cp app/ng2GifPreview/*.png dist/ng2GifPreview
cp app/ng2GifPreview/*.gif dist/ng2GifPreview

mkdir dist/mouseWheelDirective
node_modules/browserify/bin/cmd.js -s main app/mouseWheelDirective/main.js > dist/mouseWheelDirective/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/mouseWheelDirective/bundle.js --screw-ie8 --compress --mangle --output dist/mouseWheelDirective/bundle.min.js
cp app/mouseWheelDirective/*.html dist/mouseWheelDirective

mkdir dist/zoomInZoomOutImage
node_modules/browserify/bin/cmd.js -s main app/zoomInZoomOutImage/main.js > dist/zoomInZoomOutImage/bundle.js
node_modules/uglify-js/bin/uglifyjs dist/zoomInZoomOutImage/bundle.js --screw-ie8 --compress --mangle --output dist/zoomInZoomOutImage/bundle.min.js
cp app/zoomInZoomOutImage/*.html dist/zoomInZoomOutImage
cp app/zoomInZoomOutImage/*.png dist/zoomInZoomOutImage
