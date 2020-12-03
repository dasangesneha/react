import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
       super(props);
       
        this.state = {
           isModalOpen: false
       };
       this.toggleModal = this.toggleModal.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

     toggleModal() {
       this.setState({
           isModalOpen: !this.state.isModalOpen
       });
    }

     handleSubmit(values) {
       alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <div>
               <Button color="primary" outline color="secondary" onClick={this.toggleModal}>
               <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values) }>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" type="select" 
                                id="rating" name="rating" className="form-control" >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>   
                            <div className="form-group">
                               <Label htmlFor="author">Your Name</Label>
                               <Control.text model=".author" name="author" id="author" 
                               type="text" className="form-control" placeholder="Your Name"
                               validators={{ minLength: minLength(3), maxLength: maxLength(15) }} />
                                <Errors className="text-danger" model=".author" show="touched"
                                        messages={{
                                           minLength: 'Must be greater than 2 characters',
                                           maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </div>
                            <div className="form-group">
                               <Label htmlFor="">Comment</Label>
                               <Control.textarea rows="6" model=".comments" id="comments" 
                               name="comments" className="form-control" />
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal> 
            </div>                      
        );
    }
}

export default CommentForm;