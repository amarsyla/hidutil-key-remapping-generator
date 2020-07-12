import React from 'react';
import { keys } from '../../helpers';

const KeySelect = (props) => (
  <select {...props}>
    <option value=""></option>
    
    {keys.map((group) => (
      <optgroup
        key={group.group}
        label={group.group}
      >
        {group.keys.map(({ key, hex }) => (
          <option
            key={key}
            value={hex}
          >
              {key}
          </option>
        ))}
      </optgroup>
    ))}
  </select>
);

export default KeySelect;