import * as React from "react";
export interface TableProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Table: React.FC<TableProps>;
export interface TableHeadProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TableHead: React.FC<TableHeadProps>;
export interface TableBodyProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TableBody: React.FC<TableBodyProps>;
export interface TableRowProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TableRow: React.FC<TableRowProps>;
export interface TableCellProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TableCell: React.FC<TableCellProps>;
