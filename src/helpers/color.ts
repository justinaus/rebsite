import { getBrightness } from '@/utils/color';

export function getContrastColor(backgroundColorHex: string) {
  const brightness = getBrightness(backgroundColorHex);

  if (!brightness) return '#333333';

  return brightness >= 128 ? '#333333' : '#eeeeee';
}
