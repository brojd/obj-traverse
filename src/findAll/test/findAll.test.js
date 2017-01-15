import chai from 'chai';
import findAll from '../findAll.js';
import { objTreeSameProps } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findAll()', () => {
  it('should find none of objects and return empty array', () => {
    expect(findAll(objTreeSameProps, 'children', {name: 'name5'})).to.eql([]);
    expect(findAll(objTreeSameProps, 'children', {name5: 'name'})).to.eql([]);
    expect(findAll(objTreeSameProps, 'children', {})).to.eql([]);
  });
  it('should find objects, push them into array and return it', () => {
    expect(findAll(objTreeSameProps, 'children', {name: 'foo'})).to.be.an('array');
    expect(findAll(objTreeSameProps, 'children', {name: 'foo'})).to.have.length(1);
    expect(findAll(objTreeSameProps, 'children', {city2: 'city2'})).to.be.an('array');
    expect(findAll(objTreeSameProps, 'children', {city2: 'city2'})).to.have.length(6);
    expect(findAll(objTreeSameProps, 'children', {city2: 'city2', name5: 'name5'})).to.have.length(2);
  });
});
