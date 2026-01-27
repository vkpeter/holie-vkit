import React from 'react';
export const Switch = ({ checked, onCheckedChange, ...props }: { checked: boolean; onCheckedChange: (checked: boolean) => void } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <input type="checkbox" checked={checked} onChange={e => onCheckedChange(e.target.checked)} {...props} />
);
