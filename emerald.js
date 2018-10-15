const proto = {
    toEq(value) {
        if (this.testObj === value) {
            console.log('Passed!')
        } else {
            console.log(`Expected ${this.testObj} to equal ${value}`)
        }
    }
}

function expect(test) {
    object = Object.create(proto);
    object.testObj = test;
    return object;
}

// class emerald {
//     constructor(testObj) {
//         this.testObj = testObj;
//     }
    
//     toEq(value) {
//         if (this.testObj === value) {
//             console.log('Passed!')
//         } else {
//             console.log(`Expected ${this.testObj} to equal ${value}`)
//         }
//     }
// }

// function expect(testObj) {
//     return new emerald(testObj);
// }
