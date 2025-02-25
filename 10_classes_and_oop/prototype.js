// let myName = "shubh      "
// let myChannel = "shubh      "


// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.shubh = function(){
    console.log(`shubh is present in all objects`);
    
}

Array.prototype.heyShubh = function(){
    console.log((`shubh says hello`));
    
}

//heroPower.shubh()
//myHeros.shubh()
//myHeros.heyShubh()
// heroPower.heyShubh()  // error dega

//inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode           "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
 anotherUsername.trueLength()
 "shubh".trueLength()
 "icetea".trueLength()