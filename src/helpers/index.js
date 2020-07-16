export const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const keyToValueId = key => `0x${(parseInt(700000000, 16) + parseInt(key)).toString(16).toUpperCase()}`;

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

export const keys = [
  {
    group: 'Keyboard',
    keys: [
      { key: 'a and A', hex: 0x04 },
      { key: 'b and B', hex: 0x05 },
      { key: 'c and C', hex: 0x06 },
      { key: 'd and D', hex: 0x07 },
      { key: 'e and E', hex: 0x08 },
      { key: 'f and F', hex: 0x09 },
      { key: 'g and G', hex: 0x0A },
      { key: 'h and H', hex: 0x0B },
      { key: 'i and I', hex: 0x0C },
      { key: 'j and J', hex: 0x0D },
      { key: 'k and K', hex: 0x0E },
      { key: 'l and L', hex: 0x0F },
      { key: 'm and M', hex: 0x10 },
      { key: 'n and N', hex: 0x11 },
      { key: 'o and O', hex: 0x12 },
      { key: 'p and P', hex: 0x13 },
      { key: 'q and Q', hex: 0x14 },
      { key: 'r and R', hex: 0x15 },
      { key: 's and S', hex: 0x16 },
      { key: 't and T', hex: 0x17 },
      { key: 'u and U', hex: 0x18 },
      { key: 'v and V', hex: 0x19 },
      { key: 'w and W', hex: 0x1A },
      { key: 'x and X', hex: 0x1B },
      { key: 'y and Y', hex: 0x1C },
      { key: 'z and Z', hex: 0x1D },
      { key: '1 and !', hex: 0x1E },
      { key: '2 and @', hex: 0x1F },
      { key: '3 and #', hex: 0x20 },
      { key: '4 and $', hex: 0x21 },
      { key: '5 and %', hex: 0x22 },
      { key: '6 and ^', hex: 0x23 },
      { key: '7 and &', hex: 0x24 },
      { key: '8 and *', hex: 0x25 },
      { key: '9 and (', hex: 0x26 },
      { key: '0 and )', hex: 0x27 },
      { key: 'Left Control', hex: 0xE0 },
      { key: 'Left Option', hex: 0xE2 },
      { key: 'Left Command', hex: 0xE3 },
      { key: 'Right Control', hex: 0xE4 },
      { key: 'Right Option', hex: 0xE6 },
      { key: 'Right Command', hex: 0xE7 },
      { key: 'Return (ENTER)', hex: 0x28 },
      { key: 'ESCAPE', hex: 0x29 },
      { key: 'DELETE (Backspace)', hex: 0x2A },
      { key: 'Tab', hex: 0x2B },
      { key: 'Spacebar', hex: 0x2C },
      { key: '- and (underscore)', hex: 0x2D },
      { key: '= and +', hex: 0x2E },
      { key: '[ and {', hex: 0x2F },
      { key: '] and }', hex: 0x30 },
      { key: '\\ and |', hex: 0x31 },
      { key: 'Non-US # and ~', hex: 0x32 },
      { key: '; and :', hex: 0x33 },
      { key: '‘ and “', hex: 0x34 },
      { key: 'Grave Accent and Tilde', hex: 0x35 },
      { key: ', and <', hex: 0x36 },
      { key: '. and >', hex: 0x37 },
      { key: '/ and ?', hex: 0x38 },
      { key: 'Caps Lock', hex: 0x39 },
      { key: 'F1', hex: 0x3A },
      { key: 'F2', hex: 0x3B },
      { key: 'F3', hex: 0x3C },
      { key: 'F4', hex: 0x3D },
      { key: 'F5', hex: 0x3E },
      { key: 'F6', hex: 0x3F },
      { key: 'F7', hex: 0x40 },
      { key: 'F8', hex: 0x41 },
      { key: 'F9', hex: 0x42 },
      { key: 'F10', hex: 0x43 },
      { key: 'F11', hex: 0x44 },
      { key: 'F12', hex: 0x45 },
      { key: 'PrintScreen', hex: 0x46 },
      { key: 'Scroll Lock', hex: 0x47 },
      { key: 'Pause', hex: 0x48 },
      { key: 'Insert', hex: 0x49 },
      { key: 'Home', hex: 0x4A },
      { key: 'PageUp', hex: 0x4B },
      { key: 'Delete Forward', hex: 0x4C },
      { key: 'End', hex: 0x4D },
      { key: 'PageDown', hex: 0x4E },
      { key: 'RightArrow', hex: 0x4F },
      { key: 'LeftArrow', hex: 0x50 },
      { key: 'DownArrow', hex: 0x51 },
      { key: 'UpArrow', hex: 0x52 },
      { key: 'F13', hex: 0x68 },
      { key: 'F14', hex: 0x69 },
      { key: 'F15', hex: 0x6A },
      { key: 'F16', hex: 0x6B },
      { key: 'F17', hex: 0x6C },
      { key: 'F18', hex: 0x6D },
      { key: 'F19', hex: 0x6E },
      { key: 'F20', hex: 0x6F },
      { key: 'F21', hex: 0x70 },
      { key: 'F22', hex: 0x71 },
      { key: 'F23', hex: 0x72 },
      { key: 'F24', hex: 0x73 },
      { key: 'Execute', hex: 0x74 },
      { key: 'Help', hex: 0x75 },
      { key: 'Menu', hex: 0x76 },
      { key: 'Select', hex: 0x77 },
      { key: 'Stop', hex: 0x78 },
      { key: 'Again', hex: 0x79 },
      { key: 'Undo', hex: 0x7A },
      { key: 'Cut', hex: 0x7B },
      { key: 'Copy', hex: 0x7C },
      { key: 'Paste', hex: 0x7D },
      { key: 'Find', hex: 0x7E },
      { key: 'Mute', hex: 0x7F },
      { key: 'Volume Up', hex: 0x80 },
      { key: 'Volume Down', hex: 0x81 },
      { key: 'Locking Caps Lock', hex: 0x82 },
      { key: 'Locking Num Lock', hex: 0x83 },
      { key: 'Locking Scroll Lock', hex: 0x84 },
      { key: 'Non-US \\ and |', hex: 0x64 },
      { key: 'Application', hex: 0x65 },
      { key: 'Power', hex: 0x66 }
    ]
  },
  {
    group: 'Keypad',
    keys: [
      { key: 'Num Lock and Clear', hex: 0x53 },
      { key: '/', hex: 0x54 },
      { key: '*', hex: 0x55 },
      { key: '-', hex: 0x56 },
      { key: '+', hex: 0x57 },
      { key: 'ENTER', hex: 0x58 },
      { key: '1 and End', hex: 0x59 },
      { key: '2 and Down Arrow', hex: 0x5A },
      { key: '3 and PageDn', hex: 0x5B },
      { key: '4 and Left Arrow', hex: 0x5C },
      { key: '5', hex: 0x5D },
      { key: '6 and Right Arrow', hex: 0x5E },
      { key: '7 and Home', hex: 0x5F },
      { key: '8 and Up Arrow', hex: 0x60 },
      { key: '9 and PageUp', hex: 0x61 },
      { key: '0 and Insert', hex: 0x62 },
      { key: '. and Delete', hex: 0x63 },
      { key: '=', hex: 0x67 },
      { key: 'Comma', hex: 0x85 },
      { key: 'Equal Sign', hex: 0x86 }
    ]
  }
];