import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Details } from './components/artists/Details';
import { Details as AlbumDetail } from './components/albums/Details';
import { Main } from './components/Main';

function App() {

  /**
   * Is always a good practice to have the componentes Separated
   * in this case all Results are connected, so for general results
   * I used one single component which takes the decision to call
   * the children component like Artist, Album and Track.
   *
   * I have alse separated the call to the API in a differente file 
   * named 'axios', which have all the logic part to get the data from
   * the result.
   * Axios is a good technology to connect to API's and with the use
   * of Async - Await, the promise can be Async which is good to get 
   * the data in the correct moment.
   * 
   * To show my experience with React Router Dom, I created an extra
   * component named Details, to navigate to another component and
   * with the use of params 
   * 
   * I use Hooks as useState and useEffect to have a best control of
   * the state.
   * I know I could improve using more technologies as Context and Reducer
   * or even Redux, but for to do it simple and practical I did not
   * use them. And use them can take some extra time.
   * 
   * For the look & feel Bootstrap v5 is used. Use of card components help 
   * me to have control over the components.
   * 
   * For responsive I used a simple media queries, which are very basic
   */
  
  return (
    <>
      <Router>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/artistDetails/:id" component={Details}/>
            <Route exact path="/albumDetails/:id" component={AlbumDetail}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
