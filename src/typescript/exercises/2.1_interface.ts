export {}

interface Person {
	firstname: string
	lastname: string
	age: number
}
// age?: number makes it optional, so it wont complain

// Create a factory function that will build a person
const personFactory = (): Person => ({
  firstname: "John",
  lastname: "Doe",
  age: 43,
})

// that is possible too
// const personFactory = (firstname: string, lastname: string, age: number): Person => ({
//   firstname,
//   lastname,
//   age,
// })


// Create a getter function for each field
// Provide correct type signatures for the function
const firstnameGetter = (person: Person): string => person.firstname

const lastnameGetter = (person: Person): string => person.lastname

const ageGetter = (person: Person): number => person.age
