export const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const keyToValueId = key => `0x${(0x700000000 + parseInt(key, 16)).toString(16).toUpperCase()}`;

export const generateKeyMapsConfig = (keyMaps) => {
  const config = keyMaps
    .filter(({ from, to}) => from && to)
    .map(({ from, to }) => `
            {
              "HIDKeyboardModifierMappingSrc": ${keyToValueId(from)},
              "HIDKeyboardModifierMappingDst": ${keyToValueId(to)}
            }
    `.trimEnd().replace(/^(\r\n|\n|\r)/gm, ''))
    .join(",\r\n");

  return config && `\r\n${config}\r\n${' '.repeat(8)}`;
};

export const generateConfig = (keyMaps) => `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.local.KeyRemapping</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/hidutil</string>
        <string>property</string>
        <string>--set</string>
        <string>{"UserKeyMapping":[${generateKeyMapsConfig(keyMaps)}]}</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
`.trim();

