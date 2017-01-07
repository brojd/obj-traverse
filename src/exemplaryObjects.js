const emptyObj = {};

const objWithoutChildren = {
  name: 'foo',
  city: 'bar'
};

const objWithEmptyChildren = {
  name: 'foo',
  children: []
};

const objTree = {
  name: 'foo',
  city: 'bar',
  children: [
    {
      name2: 'foo2',
      city2: 'city2',
      children: [
        {
          name5: 'name5',
          city5: 'city5'
        },
        {
          name6: 'name6',
          city6: 'city6',
          children: [
            {
              name8: 'name8'
            }
          ]
        }
      ]
    },
    {
      name3: 'name3',
      city3: 'city3'
    },
    {
      name4: 'name4',
      city4: 'city4',
      children: [
        {
          name7: 'name7',
          city7: 'city7'
        }
      ]
    }
  ]
};

const objTreeSameProps = {
  name: 'foo',
  city: 'bar',
  children: [
    {
      name2: 'foo2',
      city2: 'city2',
      children: [
        {
          name5: 'name5',
          city2: 'city2'
        },
        {
          name6: 'name6',
          city6: 'city6',
          children: [
            {
              name8: 'name8'
            }
          ]
        }
      ]
    },
    {
      name6: 'name6',
      city2: 'city2'
    },
    {
      name4: 'name4',
      city2: 'city2',
      children: [
        {
          name7: 'name7',
          city2: 'city2'
        }
      ]
    }
  ]
};

export { emptyObj, objWithoutChildren, objWithEmptyChildren, objTree, objTreeSameProps };
