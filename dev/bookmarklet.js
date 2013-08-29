(function(files){
	window.CC = {};
	$.each(files, function(index, file) {
		$('#'+file.id).remove();
		$('<script/>')
		.attr('src', file.url)
		.attr('id', file.id)
		.appendTo(body);
	});
})
([
	{
		url: 'http://localhost/chesscomutils/chess.min.js',
		id: 'chessjs'
	},
	{
		url: 'http://localhost/chesscomutils/openings.js',
		id: 'openings'
	},
	{
		url: 'http://localhost/chesscomutils/openings_fen.js',
		id: 'openings_fen'
	},
	{
		url: 'http://localhost/chesscomutils/ccutils.js',
		id: 'inject'
	}
]);