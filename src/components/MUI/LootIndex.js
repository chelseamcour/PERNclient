import React, {useState, useEffect, useReducer} from 'react';
import withRoot from './modules/withRoot';
import {Container, Row, Col} from 'reactstrap';
import LootCreate from './LootCreate';
import LootTable from './LootTable';
import LootEdit from './LootEdit';
import LootCards from './LootCards';
import LoggedInNav from './LoggedInNav';
import Button from '@material-ui/core/Button';
import APIURL from '../../helpers/environment';




const LootIndex = (props) => {
    const [logs, setLogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [logToUpdate, setLogToUpdate] = useState([]);
    const [sessionToken, setSessionToken] = useState('');
    // const [state, dispatch] = useState([]);

    const fetchLogs = () => {
        fetch(`${APIURL}log/showall`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((logData) => {
            console.log(logData.logName)
            setLogs(logData.logName)
        })
    }

    useEffect(() => {
        fetchLogs();
    }, [])

    const editUpdateLog = (log) => {
        console.log(log);
        setLogToUpdate(log);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    
    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
    }


    return(
        <Container>

            
            <LoggedInNav />
            {/* <LootCreate/> */}
                <LootCards logs={logs} editUpdateLog={editUpdateLog}
                updateOn={updateOn} fetchLogs={fetchLogs} token={props.token}/>

            {updateActive ? <LootEdit logToUpdate={logToUpdate}
            updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></>}
    
            <Button onClick={props.clickLogout}>Logout</Button>

    </Container>              
    )
}

export default withRoot(LootIndex);