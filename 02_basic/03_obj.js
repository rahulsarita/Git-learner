// const tenderuser = new Object()
 
// console.log(tenderuser);

const tenderuser = {}

tenderuser.username = "rahul"
tenderuser.email = "rahul123@gmail.com"
tenderuser.isLoggedin = true
// console.log(tenderuser);

const regularuser = {
    email : "rahul123@gmail.com",
    fullname : {
        userfullname : {
            firstname : "rahul",
            Lastname : "kumar"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}
// const obj4 = {obj1, obj2, obj3}
// console.log(obj4);
// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

// current use method
 const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

 const user = [
    {
        id : 1,
        email : "rahul@123"
    },
    { 
        id : 2,
        email : "rahul@233"
    },
    {
        id : 3,
        email :"rahul@212"
    },
 ]

 user[2].email
//  console.log(tenderuser);
 
// console.log(Object.keys(tenderuser));
// console.log(Object.values(tenderuser));
// console.log(Object.entries(tenderuser));

const course = {
    coursename : "js",
    courseId : 123,
    courseInstructor : "hitesh",
    coursePrice : 233
}

 const {courseInstructor:instructor} = course
// console.log(course.courseInstructor);
// console.log(instructor);

// {
//     username : "rrah",
//     id : 23 ,
//     logg : true
// }

// [
//     {}
//     {}
//     {}
// ]
