const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  before(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  after(() => {
    spy.restore(); // Restore the original function
  });

  it('should call calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    const consoleLog = sinon.stub(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleLog.calledWith('The total is: 120')).to.be.true;
    consoleLog.restore();
});
