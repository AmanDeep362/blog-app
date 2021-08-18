import React from 'react'
import Main from './indexpage';
import Page2 from './page2';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from './components/page1'
import Page3 from './page3';
import Pagenotfound from './components/pagenotfound';



let App = ()=>{
  return(
    <>
   <BrowserRouter>
   <Switch>
   <Route path="/" exact >
   <Main />
   </Route>
<Route path="/page1">
<Page1 />
</Route>
   <Route path="/page2" component={Page2}>
  
   </Route>
   <Route path="/page3" component={Page3}>
  
   </Route>
   <Route >
     <Pagenotfound />
   </Route>
   </Switch>
   </BrowserRouter>
    </>
  );
}
export default App;