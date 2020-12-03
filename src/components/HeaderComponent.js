import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Jumbotron, Button, Modal,
 ModalHeader, ModalBody, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
       super(props);

       this.state = {
           isNavOpen: false,
           isModalOpen: false
       };
       this.toggleModal = this.toggleModal.bind(this);
       this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
       this.setState({
           isModalOpen: !this.state.isModalOpen
       });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: "+this.username.value+", Password: "+this.password.value+", Remember: "+this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
         <React.Fragment>   
            <div>
              <Navbar dark expand="md">
                  <div className="container">
                      <NavbarToggler onClick={() => this.toggleNav() }/>
                
                      <NavbarBrand href="/" className="mr-auto">
                          <img src="assets/images/logo.png" height="30" width="41" alt="Restaurant Confusion" />
                      </NavbarBrand>
                
                      <Collapse navbar isOpen={this.state.isNavOpen}>
                      <Nav navbar>
                            <NavItem>
                               <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                               <NavLink to="/aboutUs" className="nav-link"><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                               <NavLink to="/menu" className="nav-link"><span className="fa fa-menu fa-lg"></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink to="/contactUs" className="nav-link"><span className="fa fa-address-card fa-lg"></span>Contact Us</NavLink>
                            </NavItem>
                      </Nav>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                          <Button outline onClick={this.toggleModal}>
                          <span className="fa fa-sign-in fa-lg"></span> Login
                          </Button>
                          </NavItem>
                      </Nav>
                      </Collapse>
                   </div>        

              </Navbar>   

              <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Restaurant Confusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                       <Form onSubmit={this.handleLogin}> 
                          <FormGroup> 
                             <Label htmlFor="username">UserName</Label>
                             <Input type="text" id="username" name="username"
                             innerRef={(input) => this.username = input} />
                          </FormGroup>
                          <FormGroup> 
                             <Label htmlFor="password">Password</Label>
                             <Input type="password" id="password" name="password"
                             innerRef={(input) => this.password = input} />
                          </FormGroup>
                           <FormGroup check> 
                             <Label check>
                             <Input type="checkbox" name="remember"
                             innerRef={(input) => this.remember = input} />Remember Me
                             </Label>
                          </FormGroup>
                          <Button type="submit" value="submit" color="primary">Login</Button>
                       </Form>
                    </ModalBody>
                </Modal>
            </div>
         </React.Fragment>   
        );
    }
}

export default Header;