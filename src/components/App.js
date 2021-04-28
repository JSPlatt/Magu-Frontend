
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Store from './Store/Store'
import StoresContainer from './StoresContainer/StoresContainer'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={StoresContainer}/>
      <Route exact path="/stores/:slug" component={Store}/>
    </Switch>
  );
}

export default App;
