import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Register';
import List from './pages/List';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Login } exact path="/" />
        <Route component={ List } path="/list"/>
        <Route component={NotFound} />
      </Switch>
    </ BrowserRouter>
    );
}

export default App;
