var names = $('#names');
var initialText = names.html();

function italics() {
    var nameArr = initialText.split('•');
    var randomArray = getRandomArray(nameArr.length);
    numWordsToItalicize = 20;

    for (var i = 0; i < numWordsToItalicize && i < nameArr.length; i++) {
	nameArr[randomArray[i]] = '<span class="fading">' + nameArr[randomArray[i]] + '</span>';
    }
    for (var i = 0; i < nameArr.length - 1; i++) {
	nameArr[i] = nameArr[i] + '•';
    }
    names.html(nameArr.join(' '));
}

function getRandomArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
	arr.push(i);
    }
    return shuffleArray(arr);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
    }
    return array;
}

var tid = setInterval(mycode, 1500);

function mycode() {
    italics();
}