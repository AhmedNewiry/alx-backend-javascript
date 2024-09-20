const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  before(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  after(() => {
    stub.restore();
    spy.restore();
  });

  it('should call calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
