// @ts-ignore
import React, { PropsWithChildren } from 'react';

type CardProps = {
  className?: string;
  baseClasses?: string;
  overflowy?: string;
};

export default function Card(props: PropsWithChildren<CardProps>) {
  const baseClasses = props.baseClasses || `card px-5 py-5 ${props.overflowy || 'overflow-hidden'} bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700`;
  return (
    <div className={`${baseClasses} ${props.className || ''}`}>
      { props.children }
    </div>
  );
}
