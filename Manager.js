const Employee = require("./Employee")

class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber
    }

    getOffice() {
        return this.officeNumber
    }
}

module.exports = Manager