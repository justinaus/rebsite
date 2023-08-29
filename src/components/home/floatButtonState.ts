import { atom } from 'recoil';

export const floatButtonState = atom<boolean>({
  key: 'errorState',
  default: false,
});
