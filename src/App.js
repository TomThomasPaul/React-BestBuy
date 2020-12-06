//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch,Link,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from '../src/components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';


// const HatsPage =(props)=>{

// return <div>
//    {/* <Link to='/'>Home page</Link> */}
 
//    <button onClick={()=>props.history.push('/')}>Home Page</button>
   
//   <h1>HATS PAGE</h1>
// </div>


// }

class App extends React.Component {

  constructor(props){

super(props);

this.state={

  currentUser : null
}



  }

unsubscribeFromAuth = null;

  componentDidMount(){
    console.log("AppJs Mounted")
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{//this.unsubscribeFromAuth will be assigned a function that when called will close the subscription

     //this.setState({currentUser : user},()=>{ console.log(this.state)});
     const {setCurrentUser} =this.props;
     if(userAuth){
       console.log('inside if statement of auth subscriber');
      const userRef = await createUserProfileDocument(userAuth);
        
      userRef.onSnapshot(snapshot=>{
         
        
        setCurrentUser({
         
           id : snapshot.id,
           ...snapshot.data()


         


        });  
      });



     }else{

      //this.setState({currentUser : userAuth});
      console.log('inside else statement of auth subscriber');
      console.log(userAuth);
      console.log(setCurrentUser(userAuth));


     }

     
     

    });


  }

  componentWillUnmount(){
  console.log("AppJs unmount")
    this.unsubscribeFromAuth();
  }

render(){
console.log('App render started');
  return (
    <div >
      <Header ></Header> 
      {/*currentUser={this.state.currentUser} was removed from header after adding redux*/}
     {/* <Homepage></Homepage> */}
     {/* <Switch>
     <Route  path='/' component ={Homepage}></Route>
     <Route  path='/hats' component ={HatsPage}></Route>
     </Switch> */}
     <Switch>
     <Route exact path='/' component ={Homepage}></Route>
     <Route  path='/shop' component ={ShopPage}></Route>
     {/*<Route  path='/signIn' component ={SignInAndSignUpPage}></Route>*/}
     <Route exact path='/signIn' render ={()=>this.props.currentUser? ( <Redirect to='/' />) : (<SignInAndSignUpPage/>)} ></Route>
     </Switch>
   
     
    </div>
  );




}
  }

 const mapStateToProps=({user})=>( { //destructure user from root reducer and return currentUser which is used as props in app component

   currentUser : user.currentUser

 } )

const mapDispatchToProps=(dispatch)=>{

return {

  setCurrentUser : (user)=> {
return dispatch(setCurrentUser(user));

  }
} ;

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
