export {}
/*
Task1: Parameterize the Person interface so that additionalInformation
can be any type you want

Task2: create a generic function that will construct a Person
*/
interface Person<T> {
	firstname: string
	lastname: string
	age: number
	additionalInformation: T
}

const mkPerson = <T>(firstname: string, lastname: string, age: number, additionalInformation: T): Person<T> => ({
	firstname,
	lastname,
	age,
	additionalInformation,
})
