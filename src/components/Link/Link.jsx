import React from 'react';

const Link = ({route}) => {
    
    return (
      <div className="mr-10">
        <li>
          <a href="">{route.name}</a>
        </li>
      </div>
    );
};

export default Link;