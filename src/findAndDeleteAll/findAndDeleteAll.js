import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
argument, it deletes it, continue the walk and returns the whole tree when finished.
If none of objects is found, it returns false. */

const findAndDeleteAll = function (tree, childrenKey, objToFindBy) {
  let treeModified = false;
  const findKeys = Object.keys(objToFindBy);
  let findSuccess = false;
  findKeys.forEach((key) => {
    isEqual(tree[key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
  });
  if (findSuccess) {
    Object.keys(tree).forEach((key) => delete tree[key]);
    return tree;
  }
  function innerFunc(tree, childrenKey, objToFindBy) {
    if (tree[childrenKey]) {
      for (let index = tree[childrenKey].length - 1; index >= 0; index--) {
        const findKeys = Object.keys(objToFindBy);
        let findSuccess = false;
        findKeys.forEach((key) => {
          isEqual(tree[childrenKey][index][key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
        });
        if (findSuccess) {
          tree[childrenKey].splice(index, 1);
          treeModified = true;
        }
        if (tree[childrenKey][index].hasOwnProperty(childrenKey)) {
          innerFunc(tree[childrenKey][index], childrenKey, objToFindBy);
        }
      }

    }
  }
  innerFunc(tree, childrenKey, objToFindBy);
  return treeModified ? tree : false;
};

export default findAndDeleteAll;
