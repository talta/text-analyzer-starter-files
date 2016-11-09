

// your code here!


function submitAnalyze(){
	  $('form, #submitAnalyze').submit(function(event){
	  	event.preventDefault();

	console.log('submitAnalyze submitted');	
	    var text = $('#user-text').val();
	   	var words =   (text).split(/[ \(,\)]+/);

		totalWordCount(words);
		uniqueWordCount(words);
		averageWordLength(words);
		averageSentenceLength(text);

		$('dl').removeClass('hidden');
		
});
};


function totalWordCount(words){

	console.log('totalWordCount Called');
	var count  = 0;
	for(i=0; i<=words.length-1; i++){
		if(words[i] != "")
			count+=1;
	}
	
	console.log(count);

	$('.js-wordCount').html(count);
}




function uniqueWordCount(words){
	console.log('uniqueWordCount called');
	console.log(words);
	
	var currentWord;
	var uniqueWords = [];
	var uniqueWord = 0;



	for(i=0; i<=words.length-1; i++){
		currentWord = words[i];
		if(uniqueWords.length === 0){
				uniqueWords.push(currentWord);
		}

		var wordExists = false;
		for(a=0; a<= uniqueWords.length-1; a++){
			console.log(currentWord);
			wordExists = false;
			if(uniqueWords[a] === currentWord){
				wordExists = true;
				break;
			}

		}
		if (wordExists === false){
			if (currentWord) uniqueWords.push(currentWord);
		}

	}
		console.log(uniqueWords);
		console.log(uniqueWords.length);

	$('.js-uniqueWordCount').html(uniqueWords.length);
}

function averageWordLength(words){
	console.log('averageWordLength called');

	var wordLength = [];
	var numWords= words.length;



	for(i=0;i<=words.length-1; i++){
		var word = words[i];
		wordLength.push(word.length);
	}


	var sum= wordLength.reduce(function(total,num){
			return total+num;
	});

	var avg = (sum/ numWords).toPrecision(3);
	$('.js-averageWordLength').html(avg);

	}





function averageSentenceLength(text){
	console.log('averageSentenceLength called');


	var sentences = text.toString().split('.');
	var sentencesLength = 0;

	for (i=0;i<=sentences.length-1; i++){

		sentencesLength += (sentences[i].length);
		console.log(sentencesLength);
	}
var sentenceAvg = (sentencesLength/ sentences.length).toPrecision(3);
$('.js-averageSentenceLength').html(sentenceAvg);
}




///upon page load, set an event listener
$(document).ready(function(){
  $('#analyzeSubmit').on('click', function(event){
    submitAnalyze();
 
  });
  
});