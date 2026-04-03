// 1) output
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // Not provided

// ================================================
// 2) output
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // { a: 1}

// in  freeze we cannot add , modify or delete any properties
// ======================================================

// 3)Given an object with deeply nested properties, extract name,
// company, and location.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;
console.log(name, companyName, city);
// =================================================================
// 4)4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const stdManagement = {
  name: "Ankur",
  age: 28,
  grades: [20, 30],
  avgGrade: function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }
    const avg = sum / this.grades.length;
    return avg;
  },
};

console.log(stdManagement.avgGrade());
// ===========================================
// 5)5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

// not a good approach
const obj55 = {
  books: ["A", "B"],
  checkAvailability: function (book) {
    const isAvailable = this.books.includes(book);
    if (isAvailable) {
      return "Available";
    } else {
      this.books.push(book);
      return this.books;
    }
  },
};

console.log(obj55.checkAvailability("C"));
console.log(obj55.checkAvailability("C"));

// solution 2 : good Approach
const bookstore = {
  books: {
    "Harry Potter": 5,
    "Rich Dad Poor Dad": 2,
    "Atomic Habits": 0,
  },
  checkAvailability: function (book) {
    if (this.books[book] === 0) {
      console.log("Book not in stock");
    } else if (this.books[book] > 0) {
      console.log("Book is in stock");
    } else {
      console.log("Book not found");
    }
  },

  restock: function (book, quantity) {
    if (this.books[book] >= 0) {
      this.books[book] = this.books[book] + quantity;
      console.log(this.books);
    } else {
      this.books[book] = quantity;
      console.log(this.books);
    }
  },
};

bookstore.checkAvailability("Harry Potter");
bookstore.checkAvailability("Atomic Habits");
bookstore.checkAvailability("Hjkk");
bookstore.restock("Hjkk", 9);
bookstore.restock("Atomic Habits", 7);
bookstore.restock("Harry Potter", 7);
// bookstore.restock("Hjkk");
// ====================================================
// 6. What is the difference between Object.keys() and Object.entries()?
// Explain with examples

const obj56 = {
  city: "Mumbai",
  country: "India",
};

console.log(Object.keys(obj56));
console.log(Object.values(obj56));
console.log(Object.entries(obj56));

// =========================================================
// 7. How do you check if an object has a certain property?

const obj23 = {
  designation: "SDE2",
};

console.log(obj23.hasOwnProperty("designation"));
console.log(obj23.hasOwnProperty("age"));
console.log(Object.hasOwn(obj23, "designation"));
console.log(Object.hasOwn(obj23, "jjk"));
console.log("designation" in obj23);
// ==========================================
// 8. What will be the output and why?
const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doeeeeeeeeeeee";
console.log(person1.name); // Doeeeeeeee

// Reason: person1 and newPerson is pointing to the (reference)same memory location

// =============================================
// 9. What’s the best way to deeply copy a nested object? Expalin with examples
// Best way : structured clone => will create completely new memory
const deeplyNestedObj = {
  a: 1,
  b: 2,
  c: {
    a: 100,
  },
};

const newDeeplyNestedObj = structuredClone(deeplyNestedObj);
newDeeplyNestedObj.c.a = 99999;
console.log(deeplyNestedObj === newDeeplyNestedObj);
console.log(deeplyNestedObj);
console.log(newDeeplyNestedObj);

// 10. Loop and print values using Object destructuiring
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(name, address, age, "lll");
}
