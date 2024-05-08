import React, { useState } from 'react';
import { Resizable } from 'react-resizable';

const ResizableImage = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      width={width}
      height={height}
      onResize={handleResize}
      minConstraints={[100, 100]}
      maxConstraints={[800, 800]}
    >
      <img src='https://template.canva.com/EAEB6UXanWM/1/0/760w-B9mPimpD12s.png' style={{ width: '100%', height: '100%' }} />
    </Resizable>
  );
};

export default ResizableImage;
