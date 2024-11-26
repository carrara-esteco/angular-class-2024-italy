const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const fs = require('fs');



function buildCSS() {
    const result = sass.compile('styles.scss',
        {
            loadPaths: ["node_modules/"],
            outputStyle: "compressed"
        });

    return postCss(result.css);
}

function postCss(css) {
    return postcss([autoprefixer])
        .process(css, {from: undefined})
        .then((result) => {
            result.warnings().forEach((warn) => {
                console.warn(warn.toString());
            });
            fs.writeFile('styles.css', result.css, () => console.log('Compiled styles.css'));
        });
}

buildCSS()
