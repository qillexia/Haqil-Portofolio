'use client';

import { ReactNode } from 'react';

interface AOSBoxProps {
  children: ReactNode;
  'data-aos': string;
  'data-aos-delay'?: string;
}

export default function AOSBox({ children, ...props }: AOSBoxProps) {
  return <div {...props} suppressHydrationWarning>{children}</div>;
}
