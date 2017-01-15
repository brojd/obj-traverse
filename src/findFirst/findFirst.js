import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
argument, it stops the walk and returns the object. If none is found, it returns false. */

const findFirst = function (tree, childrenKey, objToFindBy) {
  let objToReturn = false;
  let found = false;
  function innerFunc(tree, childrenKey, objToFindBy) {
    const findKeys = Object.keys(objToFindBy);
    let findSuccess = false;
    findKeys.forEach((key) => {
      isEqual(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
    });
    if (findSuccess) {
      objToReturn = tree;
      found = true;
      return objToReturn;
    } else if (tree.hasOwnProperty(childrenKey)) {
      for (let n of tree[childrenKey]) {
        if (!found) {
          innerFunc(n, childrenKey, objToFindBy);
        }
      }
    }
  }
  innerFunc(tree, childrenKey, objToFindBy);
  return objToReturn;
};

export default findFirst;
