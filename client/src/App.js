
import './App.css';
import {NavBarFixedTop, NavbarSideBottom} from "./components/nav"
import Home from "./components/home"
import Pocket from "./components/collections"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {DataProvider} from './datacontext'
import Prefs from './components/prefs'
import Feedback from './feedback';
import NotFound from './components/404';
import {Collection,CollectionAll} from "./components/collections/collection";

const App = () => {

  return (
    <div className="App">
      <Router>
        <NavBarFixedTop />
          <div className="app-wrapper">
            <NavbarSideBottom />
            <DataProvider>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/collections' exact component={Pocket} />
                <Route path='/collections/all' component={CollectionAll} />
                <Route path='/collections/:id' component={Collection} />
                <Route path='/prefs' component={Prefs} />
                <Route path='/feedback' component={Feedback} />
                <Route component={NotFound} />
              </Switch>
            </DataProvider>
          </div>
      </Router>
    </div>
  );
}

export default App;
