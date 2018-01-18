import Person from './person'

test('Person.info', () => {
  const testPerson = new Person('zhaotian', 18)
  expect(testPerson.info()).toBe('name is zhaotian， age is 18')
})
