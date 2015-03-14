/**
 * Created by willowcheng on 3/13/2015.
 */
var firstSentence = prompt("Type sentence 1");
var secondSentence = prompt("Type sentence 2");
var thirdSentence = prompt("Type sentence 3");


var sentence = firstSentence + " " + secondSentence + " " + thirdSentence;
alert("Done");
sentence += sentence + " Add again";
document.write(sentence);