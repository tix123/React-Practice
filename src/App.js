import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainPage} exact />
      </Switch>
    </Router>

  );
}

export default App;