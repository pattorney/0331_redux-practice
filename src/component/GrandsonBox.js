import React from 'react';
import { useSelector } from 'react-redux';

const GrandsonBox = () => {
    let count = useSelector(state=>state.count);
  return (
    <div>
      Grandson Box {count}
    </div>
  );
}

export default GrandsonBox;
