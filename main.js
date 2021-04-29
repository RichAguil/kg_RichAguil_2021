var numberMap = new Map();

//Mapped each number in base 10 to it's phoentic counterpart.
//That way, no matter the size of the number, the lookup will be O(1).
//And therefore the construction of each word will be O(N), with N being the digits in the number
numberMap.set('0', 'Zero');
numberMap.set('1', 'One');
numberMap.set('2', 'Two');
numberMap.set('3', 'Three');
numberMap.set('4', 'Four');
numberMap.set('5', 'Five');
numberMap.set('6', 'Six');
numberMap.set('7', 'Seven');
numberMap.set('8', 'Eight');
numberMap.set('9', 'Nine');

var numArray = process.argv.slice(2); //This takes the command line arguments after the name of the file as array inputs
var convertedNums = [];
var converted = '';

for (var i = 0; i < numArray.length; i++) {
    var number = numArray[i];
    for (var j = 0; j < number.length; j++) {
        converted += numberMap.get(number[j]);
    }
    convertedNums.push(converted);
    converted = '';
}

console.log(convertedNums);

//Overall, this has an O(M*N) runtime, with M being the number of values in the initial array, and N being the number of digits in each number.
