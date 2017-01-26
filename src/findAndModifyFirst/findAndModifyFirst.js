import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
argument, it replaces the current object with replacementObj and return the whole tree.
If none is found, it returns false. */

const findAndModifyFirst = function (tree, childrenKey, objToFindBy, replacementObj) {
  let found = false;
  let reference;
  function innerFunc(tree, childrenKey, objToFindBy, replacementObj) {
    const findKeys = Object.keys(objToFindBy);
    let findSuccess = false;
    findKeys.forEach((key) => {
      isEqual(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
    });
    if (findSuccess) {
      reference = tree;
      found = true;
      return reference;
    } else if (tree.hasOwnProperty(childrenKey)) {
      for (let n of tree[childrenKey]) {
        if (!found) {
          innerFunc(n, childrenKey, objToFindBy, replacementObj);
        }
      }
    }
  }
  innerFunc(tree, childrenKey, objToFindBy, replacementObj);
  if (found) {
    for (let prop in reference) {
      delete reference[prop];
    }
    for (let prop in replacementObj) {
      reference[prop] = replacementObj[prop];
    }
  }
  return found ? tree : false;
};

export default findAndModifyFirst;
