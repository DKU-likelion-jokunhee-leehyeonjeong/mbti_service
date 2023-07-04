import React, { useState } from 'react';

function Choice(props) {
  const [bgColor, setBgColor] = useState('rgb(32, 35, 50)');
  const [isSelect, setIsSelect] = useState(false);

  const handleClick = () => {
    setIsSelect((prevIsSelect) => !prevIsSelect);
    setBgColor((prevColor) =>
      isSelect ? 'rgb(32, 35, 50)' : 'rgb(0, 100, 250)'
    );

    props.getPerData(props.personality, props.setFunc);
  };

  return (
    <div>
      <input
        className="choice_button"
        type="button"
        style={{ backgroundColor: bgColor }}
        value={props.personality}
        onClick={handleClick}
      />
    </div>
  );
}

export default Choice;
