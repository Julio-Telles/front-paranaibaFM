import * as React from 'react';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) 
  {

  return (
    <div>
        <h1>
            {children}
        </h1>
    </div>
  );
}
