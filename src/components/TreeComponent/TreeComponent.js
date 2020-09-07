import React, { useState } from 'react';

import TreeNode from './TreeNode'
import { preparationData } from '../../utils/preparationData';

import './TreeComponent.scss';

const TreeComponent = ({ data = [] }) => {
  const dataTree = preparationData(data);
  const renderTree = (dataTree) => {
    return (
      dataTree.map(item => (
        <TreeNode item={item} renderTree={renderTree} />
      ))
    );
  };

  return (
    <div className="treeWrapper">
      {data.length && renderTree(dataTree)}
    </div>
  );
}

export default TreeComponent;

