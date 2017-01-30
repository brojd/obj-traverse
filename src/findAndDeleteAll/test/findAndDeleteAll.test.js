import chai from 'chai';
import findAndDeleteAll from '../findAndDeleteAll.js';
import { objTreeSameProps } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findAndDeleteAll()', () => {
  let objTreeSamePropsCopy = JSON.parse(JSON.stringify(objTreeSameProps));
  let objTreeSamePropsCopy2 = JSON.parse(JSON.stringify(objTreeSamePropsCopy));
  let objTreeSamePropsCopy3 = JSON.parse(JSON.stringify(objTreeSamePropsCopy2));
  let objTreeSamePropsCopy4 = JSON.parse(JSON.stringify(objTreeSamePropsCopy3));
  const modifiedObj = findAndDeleteAll(objTreeSamePropsCopy, 'children', {name5: 'name5'});
  const modifiedObj2 = findAndDeleteAll(objTreeSamePropsCopy4, 'children', {city2: 'city2'});
  const modifiedObj3 = findAndDeleteAll(objTreeSamePropsCopy2, 'children', {name: 'foo'});
  const modifiedObj4 = findAndDeleteAll(objTreeSamePropsCopy3, 'children', {name: 'foooo'});
  it('should delete all matched deep nested objects properly', () => {
    expect(modifiedObj.children[0].children).to.have.length(1);
    expect(modifiedObj.children).to.have.length(4);
    expect(modifiedObj2.children).to.have.length(1);
    expect(modifiedObj2.children[0]).to.eql({ name7: 'name7' });
  });
  it('should return empty object if match is a root', () => {
    expect(modifiedObj3).to.eql({});
  });
  it('should return false if none of the objects is found', () => {
    expect(modifiedObj4).to.equal(false);
  });
  it('should modify tree and return the same if modified', () => {
    expect(objTreeSamePropsCopy).to.eql(modifiedObj);
    expect(objTreeSamePropsCopy4).to.eql(modifiedObj2);
  });
  it('should return unmodified object if root is a match', () => {
    expect(objTreeSamePropsCopy2).to.eql(modifiedObj3);
  });
});
