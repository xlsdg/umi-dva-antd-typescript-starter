export function px2Rem(px: number): number {
  return px / 100;
}

export function px2RemStr(px: number): string {
  return `${px2Rem(px)}rem`;
}
