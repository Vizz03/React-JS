import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Barcode from './BarcodeScanner'
import Results from './ResultsComponent'
import PageNotFound from './PageNotFound'


function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" render={() => <Barcode />} />
        <Route exact path="/results/:visitNumber" render={() => <Results />} />
        <Route  render={() => <PageNotFound/>} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
