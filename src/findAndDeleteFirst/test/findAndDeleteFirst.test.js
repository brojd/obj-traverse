import chai from 'chai';
import findAndDeleteFirst from '../findAndDeleteFirst.js';
import { objTree, objTreeSameProps } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findAndDeleteFirst()', () => {
  let objTreeCopy = JSON.parse(JSON.stringify(objTree));
  let objTreeSamePropsCopy = JSON.parse(JSON.stringify(objTreeSameProps));
  let objTreeSamePropsCopy2 = JSON.parse(JSON.stringify(objTreeSamePropsCopy));
  let objTreeSamePropsCopy3 = JSON.parse(JSON.stringify(objTreeSamePropsCopy2));
  const modifiedObj = findAndDeleteFirst(objTreeCopy, 'children', {name5: 'name5'});
  const modifiedObj2 = findAndDeleteFirst(objTreeSamePropsCopy, 'children', {city2: 'city2'});
  const modifiedObj3 = findAndDeleteFirst(objTreeSamePropsCopy3, 'children', {name: 'foooo'});
  it('should delete first matched deep nested object properly', () => {
    expect(modifiedObj.children).to.have.length(3);
    expect(modifiedObj2.children).to.have.length(4);
    expect(modifiedObj2.children[0]).to.eql({ name6: 'name6', city2: 'city2' });
  });
  it('should return false if none of the objects is found', () => {
    expect(modifiedObj3).to.equal(false);
  });
});
