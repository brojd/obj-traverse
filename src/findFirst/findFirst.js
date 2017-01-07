const findFirst = function (tree, childrenKey, objToFindBy) {
  let objToReturn = false;
  let found = false;
  function innerFunc(tree, childrenKey, objToFindBy) {
    const findKey = Object.keys(objToFindBy)[0];
    const findValue = objToFindBy[findKey];
    if (tree[findKey] === findValue) {
      objToReturn = tree;
      return;
    } else if (tree[childrenKey]) {
      for (let n of tree[childrenKey]) {
        if (n[findKey] === findValue) {
          objToReturn = n;
          found = true;
          break;
        } else if (n.hasOwnProperty(childrenKey)) {
          if (!found) {
            innerFunc(n, childrenKey, objToFindBy);
          }
        }
      }
      return;
    }
  }
  if (!found) {
    innerFunc(tree, childrenKey, objToFindBy);
  }
  return objToReturn;
};

export { findFirst };
