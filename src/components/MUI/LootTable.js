import withRoot from './modules/withRoot';
import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppNavBar from './modules/views/AppNavBar';
import AppForm from './modules/views/AppForm';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     //   maxWidth: 700,
    
//     },
//   });

const LootTable = (props) => {
    
    const deleteLog = (log) => { 
        fetch(`http://localhost:3002/log/${log.id}`, { 
            method: 'DELETE',
            headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token 
            })
        })
        .then(() => props.fetchLogs()) 
    }
    console.log(props)

    const logMapper = () => {
        return props.logs.map((log, index) => { 
            return(
                <tr key={index}>
                    <th scope="row">{log.id}</th>
                    <td>{log.raceName}</td>
                    <td>{log.raceDate}</td>
                    <td>{log.raceCity}</td>
                    <td>{log.raceState}</td>
                    <td>{log.raceCountry}</td>
                    <td>{log.raceDistance}</td>
                    <td>{log.medal}</td>
                    <td>{log.medalRating}</td>
                    <td>{log.tshirt}</td>
                    <td>{log.tshirtRating}</td>
                    <td>{log.snacks}</td>
                    <td>{log.snacksRating}</td>
                    <td>{log.photos}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateLog(log); props.updateOn()}}>Update</Button> 
                        <Button color="danger" onClick={() => {deleteLog(log)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    // const classes = useStyles();

    return(
        <>
        <h3>Log History</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Race Name</th>
                    <th>Date</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Distance</th>
                    <th>Medal</th>
                    <th>Medal Rating</th>
                    <th>Tshirt</th>
                    <th>Tshirt Rating</th>
                    <th>Snacks</th>
                    <th>Snacks Rating</th>
                    <th>Photos</th>
                </tr>
            </thead>
            <tbody>
                {logMapper()}
            </tbody>
        </Table>
        </>
    // <TableContainer>
    //     <Table>
    //         <TableHead>
    //             <TableRow>
    //                 <TableCell>#</TableCell>
    //                 <TableCell>Race Name</TableCell>
    //                 <TableCell>Date</TableCell>
    //                 <TableCell>City</TableCell>
    //                 <TableCell>State</TableCell>
    //                 <TableCell>Country</TableCell>
    //                 <TableCell>Distance</TableCell>
    //                 <TableCell>Medal</TableCell>
    //                 <TableCell>Medal Rating</TableCell>
    //                 <TableCell>Tshirt</TableCell>
    //                 <TableCell>Tshirt Rating</TableCell>
    //                 <TableCell>Snacks</TableCell>
    //                 <TableCell>Snacks Rating</TableCell>
    //                 <TableCell>Photos</TableCell>
    //             </TableRow>
    //         </TableHead>
    //         <TableBody>
    //         </TableBody>
    //     </Table>
    //     </TableContainer>
    );
};

export default withRoot(LootTable);