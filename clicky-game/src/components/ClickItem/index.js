import React from 'react';

function ClickItem(props) {
  return( 
    <div>
      role="img"
      aria-label="Click Item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url ("${props.image}")`}}
    </div>
  )
}

export default ClickItem