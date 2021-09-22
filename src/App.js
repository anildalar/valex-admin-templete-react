import { BrowserRouter as Router,Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
        <Route path="/" exact component={ Home }> </Route>
        <Route path="/dashboard" component={ Dashboard }></Route>
    </Router>
  );
}

export default App;
