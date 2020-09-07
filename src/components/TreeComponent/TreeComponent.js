import React, { useState } from 'react';

import { preparationData } from '../../utils/preparationData';

import './TreeComponent.scss';

const TreeComponent = ({ data = [] }) => {
  const dataTree = preparationData(data);
  const renderTree = (dataTree) => {
    return (
      dataTree.map(item => (
        <div className="column" onClick={() => setShow(!show)}>{item.parent.title}
          {!!item.children.length && <div className="row">{
            renderTree(item.children
              .sort((a,b) => a.parent.srt < b.parent.srt ? -1 : 1))}
          </div>}
        </div>
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

