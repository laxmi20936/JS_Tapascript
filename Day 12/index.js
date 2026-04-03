const user = {
  name: "laxmi",
  age: 28,
  "is Admin": true,
};

console.log(user.name);
console.log(user.age);
console.log(user["is Admin"]);

user.city = "Mumbai";
user["is Senior Citizen"] = "yes";
user["id"] = 1244;
console.log(user);

delete user.city;
delete user["is Senior Citizen"];
console.log(user);

const aka = "someKey";

user[aka] = "kjkj";
console.log(user);

// let car = prompt("Which is your fav car?");

// let favCars = {
//     [car]: 5
// }

// console.log(favCars)
// ==================================================================
// constructor function

function Car(name, model = "aaa") {
  this.name = name;
  this.mod = model;
}

const bmwCar = new Car("BMW", 5.0);
const audiCar = new Car("audi");

console.log(bmwCar, audiCar);

bmwCar.age = 5;
console.log(bmwCar);
console.log(bmwCar instanceof Car);
// ====================================================================
// new Object

const obj1 = new Object();
obj1.person = "abcd";
obj1.personAge = 52;
console.log(obj1);
// ====================================================================
// factory function

function createUserRole(designation, role) {
  return {
    designation,
    role,
    greet() {
      console.log(this.designation, "descc");
    },
  };
}
const userData = createUserRole("SE1", "frontend");
userData.greet();
console.log(userData);

const userData2 = createUserRole("12233", "JI");
console.log(userData2);

userData2.greet();

// var name11 = "lo"
let profile = {
  name11: "tapas",
  company: "CreoWis",
  message() {
    console.log(this.name11 + " " + this.company);
  },
  address: {
    cityy: "Mumbai",
    pin: 400078,
    state: "Maharashtra",
    country: "India",
    fullAddress: function () {
      console.log(this.name11, "llllll");
      console.log(this.cityy, "llllll");
    },
  },
};

profile.message();
console.log(profile.address);
profile.address.fullAddress();
// =================================================================
// iteration in object
for (let key in profile) {
  console.log(profile[key]);
}
// =================================================================
// keys and values in Object

const keysProfile = Object.keys(profile);
const valuesProfile = Object.values(profile);

console.log(keysProfile);
console.log(valuesProfile);

// key with values in Object (Converts obj to array) => entries
const keyValueProfile = Object.entries(profile);
console.log(keyValueProfile);

// converts array to object => fromEntries
const arr1 = [
  [11, "name"],
  [20, "age"],
];
const arrToObj = Object.fromEntries(arr1);
console.log(arrToObj);
// =====================================================================
// to check if a property exists in Object

console.log(profile.hasOwnProperty("address")); //1st method
console.log("address" in profile); //2nd method
console.log(Object.hasOwn(profile, "address"));

console.log(profile.age); // undefined
console.log(profile.address.state);
// ================================================================
// Object freeze

const emp = {
  sal: 10000,
};

Object.freeze(emp);
emp.age = 9090;
emp.sal = 1;
delete emp.sal;
console.log(emp);
console.log(Object.isFrozen(emp));
// ====================================================================
// Object seal

const emp2 = {
  height: 5.1,
};

Object.seal(emp2);
emp2.weight = 45;
emp2.height = 0;
delete emp2.height; // in seal we cannot delete only modify

emp2.height = 111;
console.log(emp2);
// ============================================================
// Object reference

const objRef = {
  name: "laxmi",
};

const objRef2 = objRef;
objRef2.name = "ankur";

console.log(objRef);
console.log(objRef2);
// ---------------------------
const obj3 = {
  data: 333,
  city: {
    name: "mum",
  },
};
const obj4 = { ...obj3 };
obj4.data = 444;
obj3.city.name = "cccccc";

console.log(obj3);
console.log(obj4);

// --------------------------

const obj5 = { a: 1 };
const obj6 = { a: 1 };

console.log(obj5 === obj6);

const a = 1;
const b = 1;
console.log(a === b);

// ========================
const target = { a: 78, a: 999999999999 };
const source = { b: 89, a: 999 };
const newTarget = Object.assign(target, source);

console.log(source);
console.log(target);
console.log(newTarget);
console.log(target === newTarget);

// ===============================

const obj8 = { name: "pinky", data: { name: "newName" } };

const obj9 = Object.assign({}, obj8);

console.log(obj8);
console.log(obj9);
console.log(obj8 === obj9);

obj8.name = "laxmi";
obj8.data.name = "2namee";
console.log(obj8);
console.log(obj9);

// ====================================================
const obj10 = {
  a: 1,
  b: 2,
  c: {
    a: 1,
  },
};
const obj11 = structuredClone(obj10);

console.log(obj10 === obj11);
obj10.c.a = 1111;
console.log(obj10);
console.log(obj11);
// ===================================
// Optional chaining

const employee = {
  salary: {
    bonus: 300,
  },
};

console.log(employee.age?.city);
console.log(employee.salary?.bonus);

// =======================================
// Destructuring
const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

const { name: nn, age, meal = "rice" } = student;
console.log(student);
console.log(student.name, "op");
console.log(nn, age, meal);

const {
  parents: { email },
  std,
} = student;
console.log(email, std);
// console.log(parents)

const { subjects, numOfSubject = subjects.length } = student;

console.log(subjects, numOfSubject);
console.log(student);
// ===============
function getStudentDetails({address:{zip}}) {
  console.log(zip);
}
getStudentDetails(student);
// =========================
function retObj() {
  return {
    name89: "laxmi",
    gender: "female",
  };
}

const { name89, gender } = retObj();
console.log(name89, gender);

// ========================

const students = [
  {
    name: "William",
    grade: "A",
  },
  {
    name: "Tom",
    grade: "A+",
  },
  {
    name: "Bob",
    grade: "B",
  },
];

for (let { name, grade } of students) {
  console.log(name, grade);
}
