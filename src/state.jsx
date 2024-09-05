// state.js
import { atom } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});
export const numState = atom({
  key: 'numState',
  default: 0,
});
