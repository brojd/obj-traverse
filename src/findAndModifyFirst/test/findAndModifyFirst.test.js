import chai from 'chai';
import findAndModifyFirst from '../findAndModifyFirst.js';
import { objTree, objTreeSameProps } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findAndModifyFirst()', () => {
  let objTreeCopy = JSON.parse(JSON.stringify(objTree));
  let objTreeCopy2 = JSON.parse(JSON.stringify(objTreeCopy));
  let objTreeSamePropsCopy = JSON.parse(JSON.stringify(objTreeSameProps));
  let objTreeSamePropsCopy2 = JSON.parse(JSON.stringify(objTreeSamePropsCopy));
  let objTreeSamePropsCopy3 = JSON.parse(JSON.stringify(objTreeSamePropsCopy2));
  const modifiedObj = findAndModifyFirst(objTreeCopy, 'children', {name5: 'name5'}, {changed: 'changed'});
  const modifiedObj2 = findAndModifyFirst(objTreeCopy, 'children', {name8: 'name8'}, {changed2: 'changed2'});
  const modifiedObj3 = findAndModifyFirst(objTreeSamePropsCopy, 'children', {city2: 'city2'}, {changed3: 'changed3'});
  const modifiedObj4 = findAndModifyFirst(objTreeSamePropsCopy, 'children', {name7: 'name7'}, {changed4: [1, 2, 3]});
  const modifiedObj5 = findAndModifyFirst(objTreeCopy2, 'children', {name: 'foo'}, {a: 1});
  const modifiedObj6 = findAndModifyFirst(objTreeSamePropsCopy2, 'children', {name: 'foo'}, {name: 'rootModified'});
  const modifiedObj7 = findAndModifyFirst(objTreeSamePropsCopy3, 'children', {name: 'foooo'}, {name: 'rootModified'});
  it('should modify first matched deep object properly', () => {
    expect(modifiedObj.children[0].children[0]).to.eql({changed: 'changed'});
    expect(modifiedObj2.children[0].children[1].children[0]).to.eql({changed2: 'changed2'});
    expect(modifiedObj3.children[0]).to.eql({changed3: 'changed3'});
    expect(modifiedObj4.children[3].children[0]).to.eql({changed4: [1, 2, 3]});
  });
  it('should modify root object', () => {
    expect(modifiedObj5).to.eql({a: 1});
    expect(modifiedObj6).to.eql({name: 'rootModified'});
  });
  it('should return false if none of the objects is found', () => {
    expect(modifiedObj7).to.equal(false);
  });
});
