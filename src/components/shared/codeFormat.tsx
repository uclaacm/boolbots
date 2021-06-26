import {Color} from '../shared/constants';

interface bitOfCode {
  [key: string]: Color;
}
export type lineOfCode = bitOfCode[];

interface CodeFormatProps {
  code: lineOfCode[];
}

export function CodeFormat(props:CodeFormatProps): JSX.Element {
  return (
    <div>
      {props.code.map((lineOfCode1) => (
        <div key={props.code.indexOf(lineOfCode1)}>
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