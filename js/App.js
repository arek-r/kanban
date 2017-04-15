// DEKLAACJE ZMIENNYCH
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '1685',
	'X-Auth-Token': 'dc158901b0b4d00a4a3610ecf5549649'
};

// DODAWANIE NAGŁÓWKÓW
$.ajaxSetup({
	headers: myHeaders
});

// ODPYTYWANIE SERWERA
$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});

// TWORZENIE KOLUMN
function setupColumns(columns) {
	columns.forEach(function(column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
};

// TWORZENIE KART
function setupCards(col, cards) {
	cards.forEach(function(card) {
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);
	});
};