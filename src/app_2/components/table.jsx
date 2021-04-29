import * as React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export const Table = ({columns,sortColumn,onSort,data}) => {
    return (
        <table className='table'>
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody data={data} columns={columns}/>

        </table>
    );
};