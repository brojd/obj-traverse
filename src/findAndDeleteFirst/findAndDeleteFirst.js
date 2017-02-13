import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
argument, it deletes it, stops the walk and returns the whole tree.
If none is found, it returns false. */

const findAndDeleteFirst = (tree, childrenKey, objToFindBy) => {
  let treeToReturn = tree;
  let modifiedObj = false;
  const findInChildren = (obj, childrenKey, objToFindBy) => {
    const findKeys = Object.keys(objToFindBy);
    let findSuccess = false;
    if (obj.hasOwnProperty(childrenKey)) {
      for (let i = 0; i < obj[childrenKey].length; i++) {
        findKeys.forEach((key) => {
          isEqual(obj[childrenKey][i][key], objToFindBy[key]) ? findSuccess = true : findSuccess = false;
        });
        if (findSuccess) {
          obj[childrenKey].splice(i, 1);
          modifiedObj = true;
          break;
        }
      }
      if (!findSuccess) {
        obj[childrenKey].forEach(child => findInChildren(child, childrenKey, objToFindBy));
      }
    }
    return obj;
  };
  findInChildren(tree, childrenKey, objToFindBy);
  return modifiedObj ? treeToReturn : false;
};

export default findAndDeleteFirst;
