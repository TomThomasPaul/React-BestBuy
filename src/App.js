//import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component';


// const HatsPage =(props)=>{

// return <div>
//    {/* <Link to='/'>Home page</Link> */}
 
//    <button onClick={()=>props.history.push('/')}>Home Page</button>
   
//   <h1>HATS PAGE</h1>
// </div>


// }

function App() {
  return (
    <div >
      <Header></Header>
     {/* <Homepage></Homepage> */}
     {/* <Switch>
     <Route  path='/' component ={Homepage}></Route>
     <Route  path='/hats' component ={HatsPage}></Route>
     </Switch> */}
     <Switch>
     <Route exact path='/' component ={Homepage}></Route>
     <Route  path='/shop' component ={ShopPage}></Route>
     </Switch>
   
     
    </div>
  );
}

export default App;
