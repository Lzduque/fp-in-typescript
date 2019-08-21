export {}
/*
Task: Create a function that takes a string "firstname" or
"FlexibleAge" and a Person and gets the Firstname or FlexibleAge property
off of the Person object
*/
type Firstname = string
type Lastname = string
type FlexibleAge = number | string

interface Person {
	firstname: Firstname
	lastname: Lastname
	age: FlexibleAge
}

// const getNameOrAge = (person: Person, choice: string) => ({
// 	person.choice,
// })

const getNameOrAge = (person: Person, choice: string): Firstname | FlexibleAge => {
	return choice === "firstname" ? person.firstname : person.age
}

// type Choice = "fristname" | "lastname" | "age"
// then choice: Choice
