(function(urls){
	$.each(urls, function(index, url) {
		$('<script/>')
		.attr('src', url)
		.appendTo(body);
	});
})(['http://localhost/ccpgncapture/chess.min.js', 'http://localhost/ccpgncapture/listen.js']);