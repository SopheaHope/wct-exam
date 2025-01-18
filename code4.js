'use strict';

try {
    console.log('Student Name: Rith Sophea');
    let x = 10;  // Declare variable 'x'
} catch (error) {
    console.error(error.message);
}

function demo() {
    try {
        let y = 28;  // Declare variable 'y'
    } catch (error) {
        console.error(error.message);
    }
}

demo();

try {
    eval('var z = 50; delete z;');  // Corrected syntax for eval
} catch (error) {
    console.error(error.message);
}
