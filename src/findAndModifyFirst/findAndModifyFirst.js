import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
argument, it replaces the current object with replacementObj, stops recursive walk and returns the whole tree.
If none is found, it returns false. */

const findAndModifyFirst = (tree, childrenKey, objToFindBy, replacementObj) => {
  let treeToReturn = tree;
  let findSuccess = false;
  let modifiedObj = false;
  const findKeys = Object.keys(objToFindBy);
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
    return tree;
  }
  const findInChildren = (obj, childrenKey, objToFindBy, replacementObj) => {
    if (obj.hasOwnProperty(childrenKey)) {
      for (let i = 0; i < obj[childrenKey].length; i++) {
        findKeys.forEach((key) => {
          isEqual(obj[childrenKey][i][key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
        });
        if (findSuccess) {
          obj[childrenKey][i] = replacementObj;
          modifiedObj = true;
          break;
        }
      }
      if (!findSuccess) {
        obj[childrenKey].forEach(child => findInChildren(child, childrenKey, objToFindBy, replacementObj));
      }
    }
    return obj;
  };
  findInChildren(tree, childrenKey, objToFindBy, replacementObj);
  return modifiedObj ? treeToReturn : false;
};

export default findAndModifyFirst;
