import React from 'react';
export const Select = ({ children, ...props }: any) => <select {...props}>{children}</select>;
export const SelectContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const SelectItem = ({ children, ...props }: any) => <option {...props}>{children}</option>;
export const SelectTrigger = ({ children, ...props }: any) => <div {...props}>{children}</div>;
export const SelectValue = ({ children }: { children: React.ReactNode }) => <span>{children}</span>;
