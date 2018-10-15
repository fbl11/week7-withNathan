const proto = {
    toEq(value) {
        if (this.obj === value) {
            console.log('Passed!')
        } else {
            console.log(`Expected ${this.obj} to equal ${value}`)
        }
    }
}

function emerald(test) {
    var object = Object.create(proto);
    object.obj = test;
    return object;
}
