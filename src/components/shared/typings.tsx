export enum Color {
  White = 'white',
  Orange = 'orange',
  Blue = 'blue',
}

interface bitOfCode {
  [key: string]: Color;
}
export type lineOfCode = bitOfCode[];

interface CodeFormatProps {
  text: lineOfCode[];
}

export function CodeFormat(props:CodeFormatProps): JSX.Element {
  return (
    <div>
      {props.text.map((lineOfCode1) => (
        <div key={props.text.indexOf(lineOfCode1)}>
          {lineOfCode1.map((bitOfCode) =>
            Object.entries(bitOfCode).map(([text, color]) => {
              return <span className={color} key={text}>{text}</span>;
            }),
          )}
          <br/>
        </div>
      ))}
    </div>
  );
}