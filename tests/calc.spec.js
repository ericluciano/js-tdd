import { expect } from 'chai'
import { sum, sub, div, multi } from '../src/calc'

//var expect = require('chai').expect
//var calc = require('../src/js');

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {


    it(' should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it(' should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it(' should exist the method `multi`', () => {
      expect(multi).to.exist;
      expect(multi).to.be.a('function');
    });

    it(' should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });
  describe('Sum', () => {
    it('should return 4 when `sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return `when division by 0`', () => {
      expect(sub(4, 0)).to.be.equal(4);
    });
  });

  describe('Multi', () => {
    it('should return `when multi(5,5)`', () => {
      expect(multi(5, 5)).to.be.equal(25);
    });
  });


});
