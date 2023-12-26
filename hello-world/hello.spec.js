import { expect } from 'chai'
import 'mocha-sinon'
import {hello} from './hello.js'

describe('Console', function () {
  beforeEach(function () {
    this.sinon.stub(console, 'info');
  })

  it('should print "Hello World!"', function () {

    hello()

    expect(console.info.calledOnce, 'console.info should be called!').to.be.true;
    expect(console.info.calledWith('Hi!')).to.be.false;
    expect(console.info.calledWith('Hello World!')).to.be.true;
  })

})
