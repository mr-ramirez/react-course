import React from 'react';

import ListItem from './item';

export default function List(props) {
  const { items } = props;

  return (
    <div>
      <ul>
        {
          items.map(
            (item, index) => (<ListItem key={`item_${index}`} title={item.title} />)
          )
        }
      </ul>
    </div>
  );
}
