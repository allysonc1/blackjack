$(document).ready(function(){
	// wait for the dom js
	// blackjack deal function
	// create dek function
	// shuffle deck function
	// Add card[0] and card[2] to player hand, 1 and 3 to dealer
	// place card function
	// push card onto player's array





	var playersHand = [];
	var dealersHand = [];
	const freshDeck	= createDeck();
	console.log(freshDeck);

	var theDeck = freshDeck.slice();
	shuffleDeck();

	function createDeck(){
		// local var per js scope, local
		var newDeck = [];

		// card is suit + value
		// suits is a constant.
		const suits = ['h', 's', 'd', 'c'];

		// outer loop for suite
		// inner loop for number

		// suits.map((s)=>{

		// })
		for (let s = 0; s < suits.length; s++){
			for (let c = 1; c <= 13; c++){
			newDeck.push(c + suits[s]);
			}
		}

		console.log(newDeck);
		return newDeck;

	}

	function shuffleDeck(){
		// loop alot. 
		// each time thru the loop we'll switch two indices. (cards). when the loop is done, the array (deck) will be shuffled. 
		let card1ToSwap;
		for (let i = 0; i < 50000; i++){
			var rand1 = Math.floor(Math.random() * theDeck.length);
			var rand2 = Math.floor(Math.random() * theDeck.length);
			// switch theDeck[rand1] with theDeck[rand2]
			card1ToSwap = theDeck[rand1];
			theDeck[rand1] = theDeck[rand2];
			theDeck[rand2] = card1ToSwap;
		}
	}
	console.log(theDeck);


});
