import React from 'react';

export default function ListItem(props) {
  const { title } = props;

  return (
    <li>
      {title}
    </li>
  )
}
