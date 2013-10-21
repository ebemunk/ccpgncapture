(function(files){
	if(window.CC) {
		if(window.CC.service_game_channel) {
			cometd.unsubscribe(window.CC.service_game_channel);
		}
		clearInterval(window.CC.opening_checker);
	}

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
		url: 'http://localhost/chesscomutils/openings.min.js',
		id: 'openings'
	},
	{
		url: 'http://localhost/chesscomutils/openings_fen.min.js',
		id: 'openings_fen'
	},
	{
		url: 'http://localhost/chesscomutils/ccutils.min.js',
		id: 'inject'
	}
]);