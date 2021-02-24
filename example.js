var fs = require('fs')

var report = require('vfile-reporter')

var remark = require('remark')
var frontmatter = require('remark-frontmatter')

var rmarkdown = require('.')

var doc = fs.readFileSync('example.Rmd')

remark()
    .use(frontmatter, ['yaml'])
    .use(rmarkdown)
    .use(function() {  return console.dir})  // to debug
    .process(doc, function(err, file) {
	console.error(report(err || file))
    })
