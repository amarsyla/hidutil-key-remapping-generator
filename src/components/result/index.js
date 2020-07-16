import React from 'react';
import { copyToClipboard, generateConfig } from '../../helpers';
import './result.css';

const Result = ({ keyMaps }) => {
  const config = generateConfig(keyMaps);

  return (
    <div className="result">
      <div className="result__header">
        <h5 className="result__header__title">Copy the configuration below to <code>~/Library/LaunchAgents/com.local.KeyRemapping.plist</code></h5>
        
        <button
          onClick={() => {
            copyToClipboard(config);
          }}
        >
          Copy
        </button>
      </div>
  
      <div className="result__content">
        {config}
      </div>
    </div>
  );
};

export default Result;