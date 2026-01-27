import React from 'react';
export const Tabs = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const TabsContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const TabsList = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const TabsTrigger = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props}>{children}</button>;
