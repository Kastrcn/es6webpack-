// @flow

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  info() {
    return `name is ${this.name}， age is ${this.age}`
  }
}

export default Person
