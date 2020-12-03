import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent'

function DishDetails(props) {
    if(props.dish != null)  {
        return(
            <div className="container">              
                <div className="row">   
                     <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                     </Breadcrumb> 
                </div>
                <div className="row">         
                     <RenderDish dish={props.dish} />                    
                     <RenderComments comment={props.comments} />
                </div>
            </div>
        );
    } else {
        return(<div></div>); 
    }
   }

  function RenderDish({dish}) {
       return(
            <div className="col-12 col-md-5 m-1">
                <Card> 
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
       );
   }

   function RenderComments({ comment }) {
    //    console.log(comments)
    //    const commentDetails = comments.map(comment => {
    //      return(
    //          <p key={comment.id}>{comment.comment}<br/>-- {comment.author}, {comment.date}<br />
    //          </p>           
    //      );
    //    });
       return(
              <div className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <p key={comment.id}>{comment.comment}<br/>-- {comment.author}, {comment.date}<br />
                  </p>  
                     <CommentForm />

              </div>   
       );       
   }

export default DishDetails;