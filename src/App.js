import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUS/AboutUs';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {

  
  return (
    <div className="main">

      
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/Services'>
            <Services></Services>
          </Route>
          <Route  path='/Blog'>
            <Blog></Blog>
          </Route>
          <Route  path='/Contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route  path='/About'>
            <AboutUs></AboutUs>
          </Route>
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        
        <Footer></Footer>
      </Router>
      

    </div>
  );
}

export default App;
