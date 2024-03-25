const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69, // meters

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },

    getSummary: function () {
        return `Mark's BMI is ${this.calcBMI().toFixed(1)}.`;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95, // meters

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },

    getSummary: function () {
        return `John's BMI is ${this.calcBMI().toFixed(1)}.`;
    }
}

const bmiCheck = () => {
    return mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!` : `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`;
}

console.log(mark.getSummary());
console.log(john.getSummary());
console.log(bmiCheck());