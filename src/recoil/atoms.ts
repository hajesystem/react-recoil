import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: { id: 'initial ID', user: 'initial User', name: 'initial Name' },
});

export const asyncState = atom({
  key: 'asyncState',
  default: { userId: 0, id: 0, title: 'none', body: 'none' },
});
