// @ts-ignore
import React, { PropsWithChildren } from 'react';

type RowProps = {
  className?: string | Array<string>,
  onClick?: Function,
  style?: object
};

export default function Row(props: PropsWithChildren<RowProps>) {
  return (
    <div
      className={`flex flex-row ${props.className || ''}`}
      style={props.style}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      { props.children }
    </div>
  );
}
