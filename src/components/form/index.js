import React from 'react';
import KeySelect from '../key-select';
import './form.css';

const Form = ({ keyMaps, setKeyMaps }) => {
  const handleChange = (keyMap, { target: { name, value } }) => {
    setKeyMaps(keyMaps.map(k => k === keyMap ? ({
      ...k,
      [name]: value
    }) : k));
  };

  return (
    <div className="form">
      <div className="form__header">
        <div>From key</div>
        <div>To key</div>
        <div></div>
      </div>
      <div className="form__rows">
      {keyMaps.map((keyMap, keyMapIndex) => (
          <div
            key={keyMap.from || keyMapIndex}
            className="form__row"
          >
            <KeySelect
              className="form__row__select"
              name="from"
              currentKeyMaps={keyMaps}
              value={keyMap.from && keyMap.from.toString(16)}
              onChange={(e) => {
                handleChange(keyMap, e);
              }}
            />

            <KeySelect
              className="form__row__select"
              name="to"
              value={keyMap.to && keyMap.to.toString(16)}
              onChange={(e) => {
                handleChange(keyMap, e);
              }}
            />
    
            <button
              className="form__row__button"
              onClick={() => {
                setKeyMaps(keyMaps.filter(k => k !== keyMap));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="form__buttons">
        <button
          className="form__button"
          onClick={() => {
            setKeyMaps([
              ...keyMaps,
              {}
            ]);
          }}
        >
          Add key map
        </button>

        <button
          className="form__button"
          onClick={() => {
            setKeyMaps([{}]);
          }}
        >
          Remove all
        </button>
      </div>
    </div>
  );
};

export default Form;
