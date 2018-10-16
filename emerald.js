class emerald {
    constructor(testObj) {
        this.testObj = testObj;
    }

    toEq(value) {
        if (this.testObj == value) {
            console.log('Passed!');
        } else {
            console.log(`Expected ${this.testObj} to equal ${value}`);
        }
    }

    toBe(value) {
        if (this.testObj === value) {
            console.log('Passed!');
        } else { 
            console.log(`Expected ${this.testObj} to be ${value}`);
        }
    }

    toInclude(value) {
        if(this.testObj.includes(value)) {
            console.log('Passed!');
        } else {
            console.log(`Expected ${this.testObj} to include ${value} `)
        }
    }
}

function expect(testObj) {
    return new emerald(testObj);
}
