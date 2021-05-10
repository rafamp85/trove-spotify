import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Details } from './components/artists/Details';
import { Main } from './components/Main';

function App() {

  
  return (
    <>
      <Router>
        <div className="container mt-5">
          <Switch>
          <Route exact path="/" component={Main}/>
            <Route exact path="/details/:id" component={Details}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
