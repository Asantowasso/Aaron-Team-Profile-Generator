class Employee {
    constructor (realName, idNum, email){
         this.realName = realName;
         this.idNum = idNum;
         this.email = email;
    }

    getName(){
        return this.realName
    }

    getID(){
        return this.idNum
    }

    getEmail(){
        return this.email
    }
       getRole(){
        return this.Employee
       }

}

module.exports = Employee;