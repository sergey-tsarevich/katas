import { expect } from 'chai'

describe('Default test path', function () {
  it('should run on the SECOND(sub) level', function () {
    const result = 'html'
    expect(result).to.equal('html')
  })
})
