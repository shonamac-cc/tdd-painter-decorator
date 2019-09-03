const assert = require('assert')
const Room = require('../room')

describe('Room', function () {
  it('should have an area', function () {
    //Arrange
    const room = new Room(4)
    //Act
    const actual = room.area
    //Assert
    assert.strictEqual(actual, 4)
  })

  it('should start unpainted', function () {
    const room = new Room(false)
    const actual = room.painted
    assert.strictEqual(actual, false)
  })
})
