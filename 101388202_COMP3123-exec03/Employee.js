//TODO - Create Employee Module here and export to use in index.js

module.exports = class Employee {
    constructor(eid, efnm, elnm, eemail, esal) {
        this.eid=eid;
        this.efnm=efnm;
        this.elnm=elnm;
        this.eemail=eemail;
        this.esal=esal;
    }
    print() {
        console.log(this.eid);
        console.log(this.efnm);
        console.log(this.elnm);
        console.log(this.eemail);
        console.log(this.esal);
    }
}

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

module.exports = {employees};