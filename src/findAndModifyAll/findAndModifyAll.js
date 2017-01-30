import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and for every found object that has prop and value specified in
objToFindBy argument, it replaces the current object with replacementObj and returns the whole tree.
If none is found, it returns false. */

const findAndModifyAll = function (tree, childrenKey, objToFindBy, replacementObj) {
  let found = false;
  function innerFunc(tree, childrenKey, objToFindBy, replacementObj) {
    const findKeys = Object.keys(objToFindBy);
    let findSuccess = false;
    findKeys.forEach((key) => {
      isEqual(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
    });
    if (findSuccess) {
      for (let prop in tree) {
        delete tree[prop];
      }
      for (let prop in replacementObj) {
        tree[prop] = replacementObj[prop];
      }
      found = true;
    } else if (tree.hasOwnProperty(childrenKey)) {
      for (let n of tree[childrenKey]) {
        innerFunc(n, childrenKey, objToFindBy, replacementObj);
      }
    }
  }
  innerFunc(tree, childrenKey, objToFindBy, replacementObj);
  return found ? tree : false;
};

export default findAndModifyAll;
