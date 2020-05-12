import React, {useState, useEffect, useReducer} from 'react';
import withRoot from './modules/withRoot';
import {Container, Row, Col} from 'reactstrap';
import LootCreate from './LootCreate';
import LootTable from './LootTable';
import LootEdit from './LootEdit';
import LootCards from './LootCards';
import Search from './Search';
import LoggedInNav from './modules/views/LoggedInNav';



const LootIndex = (props) => {
    const [logs, setLogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [logToUpdate, setLogToUpdate] = useState([]);
    const [sessionToken, setSessionToken] = useState('');
    // const [state, dispatch] = useState([]);

    const fetchLogs = () => {
        fetch('http://localhost:3002/log/showall', {
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

    // const search = searchValue => {
    //     dispatch({
    //       type: "SEARCH_MOVIES_REQUEST"
    //     });
    // }

    return(
        <Container>
            <LoggedInNav clearToken={clearToken}/>
        <Row>
            <Col>
                <LootCards logs={logs} editUpdateLog={editUpdateLog}
                updateOn={updateOn} fetchLogs={fetchLogs} token={props.token}/>
            </Col>
            {updateActive ? <LootEdit logToUpdate={logToUpdate}
            updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></>}
        </Row>
    </Container>              
    )
}

export default withRoot(LootIndex);