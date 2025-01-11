//const tinderuser = new Object() //singleton
const tinderuser = {} //non singleton

tinderuser.id = "122asd"
tinderuser.name = "samm"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubh",
            lastname: "gairo"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
] 

users[1].email
//console.log(tinderuser)

//console.log(Object.keys(tinderuser))
//console.log(Object.values(tinderuser))
//console.log(Object.entries(tinderuser))

//console.log(tinderuser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename:"js in hindi",
    price: 99,
    courseInstructors: "hitesh"
}

//course.courseInstructors

const {courseInstructors: instructors} = course // de structure ( curly braces )

//console.log(courseInstructors);
console.log(instructors)

//const navbar =  ({}) => {

//}
//navbar(company = "shubh")


//{
    //"name": "shubh",
    //"coursename": "js"
  //  "price": "free"
//}

[
    {},
    {},
    {}
]