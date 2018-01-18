import Person from './person'

test('Person.info', () => {
  const testPerson = new Person('zhaotian', 18)
  expect(testPerson.info()).toBe('我的名字是zhaotiao， 已经18岁了！')
})
