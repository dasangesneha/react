import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText,  CardBody, CardTitle } from 'reactstrap';
import DishDetails from './DishDetailedComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
      dishes: state.dishes,
      leaders: state.leaders,
      promotions: state.promotions,
      comments: state.comments
  }
};

class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
       const DishWithId = ({ match }) => {
           return(
              <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
               comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]}
              />
           );
       }

       const HomePage = () => {
           return(
               <Home 
                  dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                  leader={this.props.leaders.filter((leader) => leader.featured)[0]}
               />
           );
       }

        return(
          <div>
             <Header />

             <Switch>
                 <Route path="/home" component={HomePage} />
                 <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
                 <Route path="/menu/:dishId" component={DishWithId} />
                 <Route exact path="/contactus" component={Contact} />
                 <Route path="/aboutUs" component={() => <About leaders={this.props.leaders} /> } />
                 <Redirect to="/home" />
             </Switch> 
          
             <Footer />
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
