// import React from 'react';
// import {Button} from 'reactstrap';
// import MaterialTable from 'material-table';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });
  
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];


// const LootTable = (props) => {

//     const deleteLog = (log) => { 
//         fetch('http://localhost:30002/log/${loot.id}', { 
//             method: 'DELETE',
//             headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': props.token 
//             })
//         })
//         .then(() => props.fetchLogs()) 
//     }

//     const logMapper = () => {
//         return props.logs.map((log, index) => { 
//             return( 
//                 <tr key={index}>
//                     <th scope="row">{log.id}</th>
//                     <td>{log.medal}</td>
//                     <td>{log.medalRating} stars</td>
//                     <td>{log.medalComments}</td>
//                     <td>{log.tshirt}</td>
//                     <td>{log.tshirtRating}</td>
//                     <td>{log.tshirtComments}</td>
//                     <td>{log.snacks}</td>
//                     <td>{log.snacksRating}</td>
//                     <td>{log.snacksComments}</td>
//                     <td>{log.photos}</td>
//                     <td>{log.comments}</td>
//                     <td>
//                         <Button color="warning" onClick={() => {props.editUpdateLog(log); props.updateOn()}}>Update</Button> {/*4 - We include two buttons that are non-functional right now. */}
//                         <Button color="danger" onClick={() => {deleteLog(log)}}>Delete</Button>
//                     </td>
//                 </tr>
//             )
//         })
//     }
//     const classes = useStyles();

//     return(
//         <AppNavBar />
//       <AppForm></AppForm>
//         <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
       
//     );
// };

// export default LootTable;


//  // <>
//         // <h3>Loot History</h3>
//         // <hr/>
//         // <Table striped>
//         //     <thead>
//         //         <tr>
//         //             <th>#</th>
//         //             <th>Medal</th>
//         //             <th>Medal Rating</th>
//         //             <th>Medal Comments</th>
//         //             <th>Tshirt</th>
//         //             <th>Tshirt Rating</th>
//         //             <th>Tshirt Comments</th>
//         //             <th>Snacks</th>
//         //             <th>Snacks Rating</th>
//         //             <th>Snacks Comments</th>
//         //             <th>Photos</th>
//         //             <th>Comments</th>
//         //         </tr>
//         //     </thead>
//         //     <tbody>
//         //     </tbody>
//         // </Table>
//         // </>