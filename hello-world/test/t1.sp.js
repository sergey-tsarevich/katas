import { expect } from 'chai'

describe('Default test path', function () {
  it('should run on the FIRST level', function () {
    const result = 'html'
    expect(result).to.equal('html')
  })
})
