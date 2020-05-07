import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import LootCreate from './LootCreate';
import LootTable from './LootTable';
import LootEdit from './LootEdit';

const LootIndex = (props) => {
    const [logs, setLogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [logToUpdate, setLogToUpdate] = useState({});

    const fetchLogs = () => {
        fetch('http://localhost:3002/loot/showall', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorication': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            setLogs(logData)
            console.log(logData)
        })
    }

    useEffect(() => {
        fetchLogs();
    }, [])

    const editUpdateLog = (log) => {
        setLogToUpdate(log);
        console.log(log);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <Container>
            <Row>
                <Col md="3">
                    {/* <LootCreate fetchLogs={fetchLogs} token={props.token}/> */}
                </Col>
                <Col md="9">
                    <LootTable logs={logs} editUpdateLog={editUpdateLog}
                    updateOn={updateOn} fetchLogs={fetchLogs} token={props.token}/>
                </Col>
                {updateActive ? <LootEdit logToUpdate={logToUpdate}
                updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></>}
            </Row>
        </Container>                
    )
}

export default LootIndex;