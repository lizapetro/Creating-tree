import React from "react";

import "./TreeComponent.scss";

const TreeNode = ({ item, renderTree }) => {
  const setShow = (e) => {
    if (e.target.nextSibling) e.target.nextSibling.classList.toggle("hideNode");
  };

  const sortChildren = (children) =>
    children.sort((a, b) => (a.parent.srt < b.parent.srt ? -1 : 1));

  return (
    <div className="column">
      <span onClick={(e) => setShow(e)}>{item.parent.title}</span>
      {!!item.children.length && (
        <div className="row">{renderTree(sortChildren(item.children))}</div>
      )}
    </div>
  );
};

export default TreeNode;
