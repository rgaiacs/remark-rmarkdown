var visit = require('unist-util-visit')

module.exports = rmarkdown;

function rmarkdown() {
    return transformer

    function transformer(tree, file) {
	visit(
	    tree,
	    'code',
	    node => {
		if (node.lang.startsWith('{')) {
		    node.run = true;
		    node.lang = node.lang.substring(1);
		    node.meta = node.meta.slice(0, -1);
		    // TODO Improve metadata
		    // var meta = node.meta.slice(0, -1);
		    // node.meta = meta.split(',');
		}
		else {
		    node.run = true;
		}
	    }
	);
    }
}
