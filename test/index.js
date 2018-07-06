const chai = require('chai');
const assert = chai.assert;

const convertIpv4toInt32 = require('../src/index');

const testCase = {
  case1: '172.168.5.1',
  case2: '172  . 168.5.1',
  case3: '  172.168.5.1',
  case4: '1  72.168.5.1',
}

describe('Test convert IPv4 to Int32: ', function() {
  describe('Case 1: "172.168.5.1": ', function() {
    it('should return 2896692481.', function() {
      assert.equal(convertIpv4toInt32(testCase.case1), 2896692481);
    });
  });
  describe('Case 2: "172  . 168.5.1": ', function() {
    it('should return 2896692481.', function() {
      assert.equal(convertIpv4toInt32(testCase.case2), 2896692481);
    });
  });
  describe('Case 3: "  172.168.5.1": ', function() {
    it('should return 2896692481.', function() {
      assert.equal(convertIpv4toInt32(testCase.case3), 2896692481);
    });
  });
  describe('Case 4: "17 2.168.5.1": ', function () {

    it('should return Error: Invalid Ipv4.', function () {
      assert.throw(() => convertIpv4toInt32(testCase.case4), Error, 'Error: Invalid Ipv4!')
    });
  });
});