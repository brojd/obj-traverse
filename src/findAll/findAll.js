const findAll = function (tree, childrenKey, objToFindBy) {
  let objToReturn = [];
  function innerFunc(tree, childrenKey, objToFindBy) {
    const findKey = Object.keys(objToFindBy)[0];
    const findValue = objToFindBy[findKey];
    if (tree[findKey] === findValue) {
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

export { findAll };
