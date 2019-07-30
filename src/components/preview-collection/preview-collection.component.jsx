import React from "react";
import CollectionItem from "../collection-item/colection-item.component";

import "./preview-collection.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <React.Fragment>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(({id, ...otherItemProps}) => (
              <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CollectionPreview;
