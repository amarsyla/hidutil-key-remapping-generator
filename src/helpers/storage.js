export const getKeysFromStorage = () => JSON.parse(localStorage.getItem('hidutil-keys'));

export const saveKeysToStorage = (keys) => localStorage.setItem('hidutil-keys', JSON.stringify(keys));