import React from 'react';
import keys from '../../helpers/keys';

const KeySelect = ({ value, currentKeyMaps, ...props }) => {
  let availableKeys = [...keys];
  
  if (currentKeyMaps) {
    const currentKeys = currentKeyMaps
      .filter(keyMap => keyMap.from && keyMap.from !== value)
      .map(keyMap => parseInt(keyMap.from, 16))

    availableKeys = keys.map(group => ({
      ...group,
      keys: group.keys.map(key => ({
        ...key,
        isDisabled: currentKeys.includes(key.hex)
      }))
    }));
  }

  return (
    <select
      value={value}
      {...props}
    >
      <option value=""></option>
      
      {availableKeys.map((group) => (
        <optgroup
          key={group.group}
          label={group.group}
        >
          {group.keys.map(({ key, hex, isDisabled }) => (
            <option
              key={key}
              value={hex.toString(16)}
              disabled={isDisabled}
            >
              {key}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default KeySelect;