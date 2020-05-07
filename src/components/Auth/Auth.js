import React from 'react';
import APIURL from '../../helpers/environment';
import {Container, Row, Col} from 'reactstrap';
// import Login from '../Home/Login';
import SignUp from '../MUI/SignUp';
import LogIn from '../MUI/LogIn';



const Auth = (props) => { 
    return(
        <Container className="auth-container">
            <SignUp updateToken={props.updateToken}/>
            <LogIn updateToken={props.updateToken}/>


            <Row>
                <Col md="6" className="login-col">
                </Col>
                <Col md="6">
                    {/* <Login updateToken={props.updateToken}/> */}
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;