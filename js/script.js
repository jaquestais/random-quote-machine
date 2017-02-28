let quote = $(".quote").html(); //here will go the quote

$('document').ready(function(){
	// retrieves a quote from the API through AJAX
	$(".getQuote").on('click', function(){
		$.ajax({
			headers: {
			  "X-Mashape-Key": "FUwQCj6930mshVsTQTXoSCMJfQP0p1Xmj3mjsnHyyn9QNO3TJs",
			  "Accept": "application/json",
			  "Content-Type": "application/x-www-form-urlencoded"
			},
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
			success: function(response) {
				showQuote(response);
			}
		});
	});
	// calls the twitter share function
	$(".twitter-share-button").on('click', function() {		
		let url = "https://twitter.com/intent/tweet?text=" + encodeURI(JSON.stringify(quote));
		$(".twitter-share-button").attr("href", url);
		}
	);
});

// writes the api response to the html
function showQuote(a) {
	let obj = JSON.parse(a);
	quote = obj.quote;
	$(".quote").html(quote);
	$(".author").html(obj.author);
};


