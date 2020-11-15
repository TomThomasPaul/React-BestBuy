//import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage.component';
import {Route, Switch,Link} from 'react-router-dom';


const HatsPage =(props)=>{

return <div>
   {/* <Link to='/'>Home page</Link> */}
 
   <button onClick={()=>props.history.push('/')}>Home Page</button>
   
  <h1>HATS PAGE</h1>
</div>


}

function App() {
  return (
    <div >
     {/* <Homepage></Homepage> */}
     {/* <Switch>
     <Route  path='/' component ={Homepage}></Route>
     <Route  path='/hats' component ={HatsPage}></Route>
     </Switch> */}

     <Route exact path='/' component ={Homepage}></Route>
     <Route  path='/shop/hats' component ={HatsPage}></Route>
     
    </div>
  );
}

export default App;
