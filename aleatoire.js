

function randomString( nChar ) {
	var result = '';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
	var rnd = 0;

	for( var i=0 ; i<nChar ; i++ ) {
		rnd = Math.floor( Math.random() * alphabet.length );

		result += alphabet.charAt( rnd );
	}
	return result;
}

var chaineAleatoire = randomString(10);
console.log( chaineAleatoire);






function generateRandomArray( nCol, nRow, strLength ) {
	var array = [];
	var line = [];

	for( var i=0 ; i<nRow ; i++ ) {
		for(var j=0 ; j<nCol ; j++ ) {
			line.push( randomString(strLength) );
		}
		array.push( line );
		line = [];
	}

	return array;
}




var tableau = generateRandomArray( 5, 6, 5 );
console.log( tableau );

