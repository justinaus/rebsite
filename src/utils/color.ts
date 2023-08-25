export function getRandomHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export function getBrightness(backgroundColorHex: string) {
  // 16진수 컬러값에서 RGB 컬러값 추출
  const rgb = backgroundColorHex.match(
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
  );

  if (!rgb) return null;

  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);

  // 상대적 밝기 계산
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // 밝기가 일정 값 이상이면 검은색 폰트 컬러, 그렇지 않으면 흰색 폰트 컬러 반환
  // return brightness >= 128 ? '#333333' : '#eeeeee';
  return brightness;
}

export function hsvToRgb(h: number, s: number, v: number): number[] {
  const c: number = (v / 100) * (s / 100);
  const x: number = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m: number = v / 100 - c;

  let rgb: number[];
  if (h >= 0 && h < 60) {
    rgb = [c, x, 0];
  } else if (h >= 60 && h < 120) {
    rgb = [x, c, 0];
  } else if (h >= 120 && h < 180) {
    rgb = [0, c, x];
  } else if (h >= 180 && h < 240) {
    rgb = [0, x, c];
  } else if (h >= 240 && h < 300) {
    rgb = [x, 0, c];
  } else {
    rgb = [c, 0, x];
  }

  const r: number = Math.round((rgb[0] + m) * 255);
  const g: number = Math.round((rgb[1] + m) * 255);
  const b: number = Math.round((rgb[2] + m) * 255);

  return [r, g, b];
}

export function rgbToHex(r: number, g: number, b: number): string {
  const hexR: string = r.toString(16).padStart(2, '0');
  const hexG: string = g.toString(16).padStart(2, '0');
  const hexB: string = b.toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
}
