import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react"
const DataTable = ({ columns, rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(col => {
                            return (
                                <TableCell key={`${col.field}`}>
                                    {col.lable}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}
export default DataTable;