export const preparationData = (data) => {
  return prepare(data.filter(({ parent_id }) => parent_id === null), data);
}
  

function getChildren(data) {
  const childrensList = data.filter(({parent_id}) => parent_id === this.parent.id);
  if (childrensList.length) return prepare(childrensList, data);
  return childrensList;
}

function prepare (arr, data) {
  return arr.map(item => (
    {
      parent: item,
      children: getChildren.call({parent: item}, data),
    }
  ));
}