export {}

// interface just tells how the object will be structured
interface Person {
	firstname: string
	lastname: string
	age: number
	occupation: Occupation
}

interface Occupation {
	name: string
	hours: number
	salary: number
}

const developer = (name: string, hours: number, salary: number): Occupation => ({
  name,
	hours,
	salary,
})


const personFactory = (firstname: string, lastname: string, age: number, occupation: Occupation): Person => ({
  firstname,
  lastname,
	age,
	occupation,
})

personFactory("John", "Doe", 45, developer("developer", 40, 50))


const personFactory = (firstname: string, lastname: string, age: number, occupation: Occupation): Person => ({
  firstname,
  lastname,
	age,
	occupation,
})


// create an occupation interface with at least 3 fields
// create getter functions for each field
