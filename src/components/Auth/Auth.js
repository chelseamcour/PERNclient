import React from 'react';
import APIURL from '../../helpers/environment';
import {Container, Row, Col} from 'reactstrap';
// import Login from '../Home/Login';
import SignUp from '../MUI/SignUp';
import LogIn from '../MUI/LogIn';



const Auth = (props) => { 
    return(
        <>
        <Container className="auth-container">
        <Row>
                <Col >
            <SignUp updateToken={props.updateToken}/>
            </Col>
                <Col >
            <LogIn updateToken={props.updateToken}/>
            </Col>
            </Row>
            </Container>
        {/* <Container className="auth-container-two">
            <SignUp updateToken={props.updateToken}/>
            </Container> */}
</>
    );
};

export default Auth;