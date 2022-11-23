export const keys = [
  {
    group: 'Modifier keys',
    keys: [
      { key: 'caps_lock', hex: 0x39 },
      { key: 'left_control', hex: 0xE0 },
      { key: 'left_shift', hex: 0xE1 },
      { key: 'left_option', hex: 0xE2 },
      { key: 'left_command', hex: 0xE3 },
      { key: 'right_control', hex: 0xE4 },
      { key: 'right_shift', hex: 0xE5 },
      { key: 'right_option', hex: 0xE6 },
      { key: 'right_command', hex: 0xE7 },
      { key: 'fn', hex: 0x0003 + 0xFF00000000 - 0x700000000 }
    ]
  },
  {
    group: 'Controls and symbols',
    keys: [
      { key: 'return_or_enter', hex: 0x28 },
      { key: 'escape', hex: 0x29 },
      { key: 'delete_or_backspace', hex: 0x2A },
      { key: 'delete_forward', hex: 0x4C },
      { key: 'tab', hex: 0x2B },
      { key: 'spacebar', hex: 0x2C },
      { key: 'hyphen (-)', hex: 0x2D },
      { key: 'equal_sign (=)', hex: 0x2E },
      { key: 'open_bracket [', hex: 0x2F },
      { key: 'close_bracket ]', hex: 0x30 },
      { key: 'backslash (\\)', hex: 0x31 },
      { key: 'non_us_pound', hex: 0x32 },
      { key: 'semicolon (;)', hex: 0x33 },
      { key: 'quote (\')', hex: 0x34 },
      { key: 'grave_accent_and_tilde (`)', hex: 0x35 },
      { key: 'comma (,)', hex: 0x36 },
      { key: 'period (.)', hex: 0x37 },
      { key: 'slash (/)', hex: 0x38 },
      { key: 'non_us_backslash (\\), section (§)', hex: 0x64 }
    ]
  },
  {
    group: 'Arrow keys',
    keys: [
      { key: 'up_arrow', hex: 0x52 },
      { key: 'down_arrow', hex: 0x51 },
      { key: 'left_arrow', hex: 0x50 },
      { key: 'right_arrow', hex: 0x4F },
      { key: 'page_up', hex: 0x4B },
      { key: 'page_down', hex: 0x4E },
      { key: 'home', hex: 0x4A },
      { key: 'end', hex: 0x4D }
    ]
  },
  {
    group: 'Letter keys',
    keys: [
      { key: 'a', hex: 0x04 },
      { key: 'b', hex: 0x05 },
      { key: 'c', hex: 0x06 },
      { key: 'd', hex: 0x07 },
      { key: 'e', hex: 0x08 },
      { key: 'f', hex: 0x09 },
      { key: 'g', hex: 0x0A },
      { key: 'h', hex: 0x0B },
      { key: 'i', hex: 0x0C },
      { key: 'j', hex: 0x0D },
      { key: 'k', hex: 0x0E },
      { key: 'l', hex: 0x0F },
      { key: 'm', hex: 0x10 },
      { key: 'n', hex: 0x11 },
      { key: 'o', hex: 0x12 },
      { key: 'p', hex: 0x13 },
      { key: 'q', hex: 0x14 },
      { key: 'r', hex: 0x15 },
      { key: 's', hex: 0x16 },
      { key: 't', hex: 0x17 },
      { key: 'u', hex: 0x18 },
      { key: 'v', hex: 0x19 },
      { key: 'w', hex: 0x1A },
      { key: 'x', hex: 0x1B },
      { key: 'y', hex: 0x1C },
      { key: 'z', hex: 0x1D }
    ]
  },
  {
    group: 'Number keys',
    keys: [
      { key: '1', hex: 0x1E },
      { key: '2', hex: 0x1F },
      { key: '3', hex: 0x20 },
      { key: '4', hex: 0x21 },
      { key: '5', hex: 0x22 },
      { key: '6', hex: 0x23 },
      { key: '7', hex: 0x24 },
      { key: '8', hex: 0x25 },
      { key: '9', hex: 0x26 },
      { key: '0', hex: 0x27 }
    ]
  },
  {
    group: 'Function keys',
    keys: [
      { key: 'f1', hex: 0x3A },
      { key: 'f2', hex: 0x3B },
      { key: 'f3', hex: 0x3C },
      { key: 'f4', hex: 0x3D },
      { key: 'f5', hex: 0x3E },
      { key: 'f6', hex: 0x3F },
      { key: 'f7', hex: 0x40 },
      { key: 'f8', hex: 0x41 },
      { key: 'f9', hex: 0x42 },
      { key: 'f10', hex: 0x43 },
      { key: 'f11', hex: 0x44 },
      { key: 'f12', hex: 0x45 },
      { key: 'f13', hex: 0x68 },
      { key: 'f14', hex: 0x69 },
      { key: 'f15', hex: 0x6A },
      { key: 'f16', hex: 0x6B },
      { key: 'f17', hex: 0x6C },
      { key: 'f18', hex: 0x6D },
      { key: 'f19', hex: 0x6E }
    ]
  },
  {
    group: 'Media control keys',
    keys: [
      { key: 'display_brightness_decrement', hex: 0xC00000070 - 0x700000000 },
      { key: 'display_brightness_increment', hex: 0xC0000006F - 0x700000000 },
      // @TODO: fix the media control keys below
      // { key: 'mission_control', hex: 0xff0100000007 - 0x700000000 },
      // { key: 'launchpad', hex: 0xff0100000006 - 0x700000000 },
      // { key: 'illumination_decrement', hex: 0xff0100000008 },
      // { key: 'illumination_increment', hex: 0xff0100000009 },
      { key: 'rewind', hex: 0xC000000B4 - 0x700000000 },
      { key: 'play_or_pause', hex: 0xC000000CD - 0x700000000 },
      { key: 'fast_forward', hex: 0xC000000B3 - 0x700000000 },
      { key: 'mute', hex: 0xC000000E2 - 0x700000000 },
      { key: 'volume_decrement', hex: 0xC000000EA - 0x700000000 },
      { key: 'volume_increment', hex: 0xC000000E9 - 0x700000000 }
    ]
  },
  {
    group: 'Keys in pc keyboards',
    keys: [
      { key: 'print_screen', hex: 0x46 },
      { key: 'scroll_lock', hex: 0x47 },
      { key: 'pause', hex: 0x48 },
      { key: 'insert', hex: 0x49 },
      { key: 'application', hex: 0x65 },
      { key: 'help', hex: 0x75 },
      { key: 'power', hex: 0x66 },
      { key: 'execute', hex: 0x74 },
      { key: 'menu', hex: 0x76 },
      { key: 'select', hex: 0x77 },
      { key: 'stop', hex: 0x78 },
      { key: 'again', hex: 0x79 },
      { key: 'undo', hex: 0x7A },
      { key: 'cut', hex: 0x7B },
      { key: 'copy', hex: 0x7C },
      { key: 'paste', hex: 0x7D },
      { key: 'find', hex: 0x7E },
      { key: 'mute', hex: 0x7F },
      { key: 'volume_up', hex: 0x80 },
      { key: 'volume_down', hex: 0x81 },
      { key: 'locking_caps_lock', hex: 0x82 },
      { key: 'locking_num_lock', hex: 0x83 },
      { key: 'locking_scroll_lock', hex: 0x84 }
    ]
  },
  {
    group: 'Keypad keys',
    keys: [
      { key: 'keypad_num_lock', hex: 0x53 },
      { key: 'keypad_slash (/)', hex: 0x54 },
      { key: 'keypad_asterisk (*)', hex: 0x55 },
      { key: 'keypad_hyphen (-)', hex: 0x56 },
      { key: 'keypad_plus (+)', hex: 0x57 },
      { key: 'keypad_enter', hex: 0x58 },
      { key: 'keypad_1', hex: 0x59 },
      { key: 'keypad_2', hex: 0x5A },
      { key: 'keypad_3', hex: 0x5B },
      { key: 'keypad_4', hex: 0x5C },
      { key: 'keypad_5', hex: 0x5D },
      { key: 'keypad_6', hex: 0x5E },
      { key: 'keypad_7', hex: 0x5F },
      { key: 'keypad_8', hex: 0x60 },
      { key: 'keypad_9', hex: 0x61 },
      { key: 'keypad_0', hex: 0x62 },
      { key: 'keypad_period (.)', hex: 0x63 },
      { key: 'keypad_equal_sign (=)', hex: 0x67 },
      { key: 'keypad_comma (,)', hex: 0x85 }
    ]
  }
];

export default keys;
