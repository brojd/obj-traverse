import chai from 'chai';
import findAndModifyFirst from '../findAndModifyFirst.js';
import { objTree } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findAndModifyFirst()', () => {
  let objTreeCopy = JSON.parse(JSON.stringify(objTree));
  const modifiedObj = findAndModifyFirst(objTreeCopy, 'children', {name5: 'name5'}, {changed: 'changed'});
  it('should modify first matched deep object properly', () => {
    expect(modifiedObj.children[0].children[0]).to.eql({changed: 'changed'});
  });
});
