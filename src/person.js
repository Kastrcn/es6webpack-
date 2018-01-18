// @flow

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  info() {
    return `我的名字是${this.name}， 已经${this.age}岁了！`
  }
}

export default Person
