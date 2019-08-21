const num: number = 1
const str: string = "hello"
const bool: boolean = true
const nil: null = null
const undef: undefined = undefined

declare name: type = value

interface ProgrammingLanguage {
  name: string
  functionalSupport: boolean
  version: number
}

interface Codingbootcamp {
  name: string
  duration: number
  isAwesome: boolean
}

const lighthouseLabs: CodingBootcamp = {
  name: "lighthouseLabs",
  duration: 12,
  isAwesome: true,
}


const identity = <T>(x: T) => x
identity<number>16

const indentityString = (x: string) => x
const indentityNumber = (x: number) => x
// for you not to have to define the type when you make the function, so the function can be reused, you can make the generic, so you can set up the type when you call the function too
type CosntantFunction = <T, U> (a: T, b: U) => T
const constant: ConstantFunction = (a, b) => a
cosntant<string, number>("hello, 14")

// declare type

type Firstname = string
type Lastname = string

type Name = Firstname | Lastname
type FlexibleAge = number | string
type Age = number | string

interface Person {
  firstname: string,
  age: Age
}

const person = (name: string, age: Age): Person => ({
  firstname: name,
  age,
})

person("Jonathan", "25")

// Product type
interface Pair<T, U> {
  first: T
  second: U
}

const pair = <T, U>(first: T, second: U): Pair<T, U> => {
  return { first, second}
}



// advanced sum

interface JavaScript {
  name: "javascript"
  packageManager: string
}

interface Ruby {
  name: "ruby"
  onRails: boolean
}

interface Java {
  name: "javq"
  compiler: string
}

type ProgrammingLanguage = JavaScript | Ruby | Java

const getProgrammingLanguageInfo = (pl: ProgrammingLanguage) => {
  switch (pl.name) {
    case "javascript":
      return pl.packageManager
    case "ruby":
      return pl.onRails
    case "Java":
      return pl.compiler
  }
}

const isJavaScript = (lang: ProgrammingLanguage): boolean => lang.name === "javascript"

const getProgrammingLanguageInfo = (pl: ProgrammingLanguage) => {
  if (pl.name === "javascript") {
    return pl
  }
  return false
}