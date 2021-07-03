import './App.css';
import ListingClients from './components/clientComponent/ListingClients';
import AddClient from './components/clientComponent/AddClient';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ListingClients} />
          <Route path="/addClient" component={AddClient} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
