import isEqual from 'lodash.isequal';

/* It iterates through each deep nested object and if finds object that has prop and value specified in objToFindBy
argument, it stops the walk and returns the object. If none is found, it returns false. */

const findFirst = (tree, childrenKey, objToFindBy) => {
  let treeToReturn = tree;
  let found = false;
  const findKeys = Object.keys(objToFindBy);
  findKeys.forEach((key) => {
    isEqual(tree[key], objToFindBy[key]) ? found = true : found = false;
  });
  if (found) {
    return tree;
  }
  const findInChildren = (obj, childrenKey, objToFindBy) => {
    let foundInChild = false;
    if (obj.hasOwnProperty(childrenKey)) {
      for (let i = 0; i < obj[childrenKey].length; i++) {
        findKeys.forEach((key) => {
          isEqual(obj[childrenKey][i][key], objToFindBy[key]) ? foundInChild = true : foundInChild = false;
        });
        if (foundInChild) {
          found = true;
          treeToReturn = obj[childrenKey][i];
          break;
        }
      }
      if (!foundInChild && !found) {
        obj[childrenKey].forEach(child => findInChildren(child, childrenKey, objToFindBy));
      }
    }
    return obj;
  };
  findInChildren(tree, childrenKey, objToFindBy);
  return found ? treeToReturn : false;
};

export default findFirst;
