import React, {useState} from 'react';
import { //1 - Notice the specific reactstrap imports, we're only grabbing what we need from the file. 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Sitebar = (props) => { //2 - Our arrow function component is named Sitebar simply to avoid a naming conflict with the <Navbar> we use from bootstrap.
    //3 - Notice we are rendering a single parent element, <Navbar>, in this case, which holds the child element <NavbarBrand>. React enforces this 1-parent rule for all of its components.
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <Navbar color="faded" light expand="md">
            {/* <NavbarBrand href="/">Workout Log</NavbarBrand> */}
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Sitebar;