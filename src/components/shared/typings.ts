export enum Color {
  White = 'white',
  Orange = 'orange',
  Blue = 'blue',
}

interface bitOfCode {
  [key: string]: Color;
}
export type lineOfCode = bitOfCode[];
