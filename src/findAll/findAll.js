import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
 argument, it pushes this object to the result array. When it finishes the walk, it returns the array.
 If none is found, it returns false. */

const findAll = function (tree, childrenKey, objToFindBy) {
  let objToReturn = [];
  function innerFunc(tree, childrenKey, objToFindBy) {
    const findKeys = Object.keys(objToFindBy);
    let findSuccess = false;
    findKeys.forEach((key) => {
      isEqual(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
    });
    if (findSuccess) {
      objToReturn.push(tree);
    }
    if (tree.hasOwnProperty(childrenKey)) {
      for (let n of tree[childrenKey]) {
        innerFunc(n, childrenKey, objToFindBy);
      }
    }
  }
  innerFunc(tree, childrenKey, objToFindBy);
  return objToReturn;
};

export default findAll;
