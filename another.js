const student = {
  name: "Mrinal",
  age: 18,
  gender: "Male",
};

function printPerson({ name, age, gender }, course) {
  console.log(
    `The person's name is ${name}, age is ${age} and gender is ${Male} and has enrolled to the course ${course}`
  );
}

printPerson(student, "Physics");
