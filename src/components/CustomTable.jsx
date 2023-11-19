import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SortIcon from '@mui/icons-material/Sort';
import { useState } from "react";

function TableHeader(props) {
    return (
        <TableCell align="center">
            {props.header}
            <IconButton onClick={props.sortData}>
                <SortIcon />
            </IconButton>
        </TableCell>
    );
}

function CustomTable() {
    const [habitatge, setHabitatge] = useState([
        { descripcio: 'Pis Barcelona 1', localitat: 'Barcelona', preu: 500000, habitacions: 4, metresQuadrats: 150 },
        { descripcio: 'Pis Badalona 1', localitat: 'Badalona', preu: 250000, habitacions: 3, metresQuadrats: 75 },
        { descripcio: 'Pis Barcelona 2', localitat: 'Barcelona', preu: 450000, habitacions: 2, metresQuadrats: 85 },
        { descripcio: 'Casa Sabadell 1', localitat: 'Sabadell', preu: 650000, habitacions: 5, metresQuadrats: 180 },
        { descripcio: 'Casa Alella 1', localitat: 'Alella', preu: 1200000, habitacions: 6, metresQuadrats: 250 },
    ]);

    const sortData = (key) => {
        setHabitatge([...habitatge].sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        }));
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableHeader header="Descripcio" sortData={() => sortData('descripcio')} />
                        <TableHeader header="Localitat" sortData={() => sortData('localitat')} />
                        <TableHeader header="Preu" sortData={() => sortData('preu')} />
                        <TableHeader header="Habitacions" sortData={() => sortData('habitacions')} />
                        <TableHeader header="Metres quadrats" sortData={() => sortData('metresQuadrats')} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {habitatge.map((item) => (
                        <TableRow key={item.descripcio}>
                            <TableCell align="center">{item.descripcio}</TableCell>
                            <TableCell align="center">{item.localitat}</TableCell>
                            <TableCell align="center">{item.preu}</TableCell>
                            <TableCell align="center">{item.habitacions}</TableCell>
                            <TableCell align="center">{item.metresQuadrats}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;