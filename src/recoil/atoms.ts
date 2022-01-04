import { atom, DefaultValue } from 'recoil';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const userState = atom({
  key: 'userState',
  default: { id: 'initial ID', user: 'initial User', name: 'initial Name' },
  effects_UNSTABLE: [localStorageEffect('user_state')],
});

export const syncState = atom({
  key: 'syncState',
  default: { userId: 0, id: 0, title: 'none', body: 'none' },
});

export const asyncState = atom({
  key: 'asyncState',
  default: { userId: 0, id: 0, title: 'none', body: 'none' },
});
