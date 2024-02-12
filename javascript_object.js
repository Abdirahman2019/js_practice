/*JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.*/
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  console.log(person.firstName + " is " + person.age + " years old.");
  //The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.
  const student ={
    firstName: "ismail",
    lastName : "omar",
    Dob      : "12/03/2007",
    pob      : "guri",
    phone_number: 1234332
}
const school = {
    school_name:"GSS",
    class :"form 1H",
    adm_no:43567,
}
console.log(student.firstName + " " + student.lastName + " is "+ school.class + " adm-no " + school.adm_no);