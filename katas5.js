// function reverseString(str) {
//     let output = str.split('');
//     output = output.reverse();
//     output = output.join('');
    
//     return output;
// }

// function testReverseString1() {
//     let result = reverseString('Kenzie Academy');
//     let expected = 'ymedacA eizneK';
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
// }
// testReverseString1();

// function testReverseString2() {
//     let result = reverseString('Hello World!');
//     let expected = '!dlroW olleH';
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
// }
// testReverseString2();

// function reverseSentence(str) {
//     let output = str.split(' ');
//     output = output.reverse();
//     output = output.join(' ');

//     return output;
// }

// function testReverseSentence1() {
//     let result = reverseSentence('bob likes dogs');
//     let expected = 'dogs likes bob';
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
// }
// testReverseSentence1();

// function testReverseSentence2() {
//     let result = reverseSentence('I like to code in JavaScript');
//     let expected = 'JavaScript in code to like I';
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
// }
// testReverseSentence2();

// function minimumValue(arr) {
//     let output = arr.sort((a, b) => a - b);

//     return output[0];
// }

// function testMinimumValue1() {
//     let result = minimumValue([10, 3, 99, 27, 1, 1555, 30]);
//     let expexted = 1;
//     console.assert(result === expexted, `esperado: ${expexted}, obtido: ${result}`);
// }
// testMinimumValue1();

// function testMinimumValue2() {
//     let result = minimumValue([1999, 53, 87, 7, 199, 1555, 30]);
//     let expexted = 7;
//     console.assert(result === expexted, `esperado: ${expexted}, obtido: ${result}`);
// }
// testMinimumValue2();

// function maximumValue(arr) {
//     let output = arr.sort((a, b) => b - a);

//     return output[0];
// }

// function testMaximumValue1() {
//     let result = maximumValue([10, 3, 99, 27, 1, 1555, 30]);
//     let expexted = 1555;
//     console.assert(result === expexted, `esperado: ${expexted}, obtido: ${result}`);
// }
// testMaximumValue1();

// function testMaximumValue2() {
//     let result = maximumValue([53, 87, 2021, 7, 199, 1555, 30]);
//     let expexted = 2021;
//     console.assert(result === expexted, `esperado: ${expexted}, obtido: ${result}`);
// }
// testMaximumValue2();

// function calculateRemainder(a, b) {
//     return a % b;
// }

// function testCalculateRemainder1() {
//     let result = calculateRemainder(12, 5);
//     let expected = 2;
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
// }
// testCalculateRemainder1();

// function testCalculateRemainder2() {
//     let result = calculateRemainder(15, 7);
//     let expected = 1;
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
// }
// testCalculateRemainder2();

// function distinctValues(str) {
//     let output = str.split(' '); 
//     output = output.filter((elem, i, self) => {
//         return i === self.indexOf(elem);
//     });

//     output = output.join(' ');

//     return output;
// }

// function testDistinctValues1() {
//     let result = distinctValues('1 3 5 3 7 3 1 1 5');
//     let expected = '1 3 5 7';
//     console.assert(result === expected, `esperado: ${expected}, resultado: ${result}`);
// }
// testDistinctValues1();

// function testDistinctValues2() {
//     let result = distinctValues('2 4 6 4 8 4 2 2 6');
//     let expected = '2 4 6 8';
//     console.assert(result === expected, `esperado: ${expected}, resultado: ${result}`);
// }
// testDistinctValues2();

// function countValues(str) {
//     let arr = str.split(' ');
//     let output = '';
//     for(let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let add = 0;
//         for(let j = 0; j < arr.length; j++) {
//             if(num === arr[j]) {
//                 add++;
//             }
//         }

//         output += `${num}(${add}) `
//     }

//     return output;
// }

// function testCountValues1() {
//     let result = countValues('1 3 5 3 7 3 1 1 5');
//     let expexted = '1(3) 3(3) 5(2) 7(1)';
//     console.assert(result === expexted, `esperado: ${expexted}, resultado: ${result}`);
// }
// testCountValues1();

function evaluateExpression(str, obj) {
    let mathOperators = [];
    let numbers = Object.values(obj);
    let output = numbers[0];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '+' || str[i] === '-') {
            mathOperators.push(str[i]);
        }
    }

    for(let i = 0; i < mathOperators.length; i++) {
        if(mathOperators[i] === '+') {
            output += numbers[i+1];
        }

        if(mathOperators[i] === '-') {
            output -= numbers[i+1];
        }
    }

    return output;
}

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression1();

function testEvaluateExpression2() {
    let result = evaluateExpression("a + b + c - d - e + f", {a: 1, b: 37, c: 3, d: 17, e: 12, f:87});
    let expected = 99;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression2();