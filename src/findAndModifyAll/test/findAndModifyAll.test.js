import chai from 'chai';
import findAndModifyAll from '../findAndModifyAll.js';
import { objTreeSameProps } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findAndModifyAll()', () => {
  let obj1 = JSON.parse(JSON.stringify(objTreeSameProps));
  let obj2 = JSON.parse(JSON.stringify(objTreeSameProps));
  let obj3 = JSON.parse(JSON.stringify(objTreeSameProps));
  let obj4 = JSON.parse(JSON.stringify(objTreeSameProps));
  let obj5 = JSON.parse(JSON.stringify(objTreeSameProps));
  const modifiedObj1 = findAndModifyAll(obj1, 'children', {name2: 'foo2'}, {a: 'a'});
  const modifiedObj2 = findAndModifyAll(obj2, 'children', {name7: 'name7'}, {b: 'b'});
  const modifiedObj3 = findAndModifyAll(obj3, 'children', {city2: 'city2'}, {c: 'c'});
  const modifiedObj4 = findAndModifyAll(obj4, 'children', {name: 'foo', city: 'bar'}, {d: 'd'});
  const modifiedObj5 = findAndModifyAll(obj5, 'children', {name: 'fake'}, {e: 'e'});
  it('should modify all matched deep objects properly', () => {
    expect(modifiedObj1.children[0]).to.eql({a: 'a'});
    expect(modifiedObj2.children[4]).to.eql({b: 'b'});
    expect(modifiedObj2.children[3].children[0]).to.eql({b: 'b'});
    expect(modifiedObj3.children[0]).to.eql({c: 'c'});
    expect(modifiedObj3.children[1]).to.eql({c: 'c'});
    expect(modifiedObj3.children[2]).to.eql({c: 'c'});
    expect(modifiedObj3.children[3]).to.eql({c: 'c'});
    expect(modifiedObj3.children[4]).to.eql({name7: 'name7'});
  });
  it('should modify root object', () => {
    expect(modifiedObj4).to.eql({d: 'd'});
  });
  it('should return false if none of the objects is found', () => {
    expect(modifiedObj5).to.equal(false);
  });
});
