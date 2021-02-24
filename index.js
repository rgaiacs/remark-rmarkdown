var visit = require('unist-util-visit')

module.exports = rmarkdown;

function rmarkdown() {
    return transformer

    function transformer(tree, file) {
	visit(tree, 'ParagraphNode', visitor)

	function visitor(node) {
	    console.log(node)
	}
    }
}
