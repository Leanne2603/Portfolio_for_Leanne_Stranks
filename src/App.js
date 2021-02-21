import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainNav from './components/layout/MainNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/about/About'
import Main from './components/main/Main'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
  return (
    <BrowserRouter>
        <MainNav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
