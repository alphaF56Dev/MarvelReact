import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Comics from './pages/Comics';
import Series from './pages/Series';
import Error404 from './pages/Error404';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>      
      <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Home />} />
            <Route path='/comics' element={<Comics />} />
            <Route path='/series' element={<Series /> } />
            <Route component={<Error404 />} />
            {/*<Route path='/' exact component={()=><Home />} />
            <Route path='/inicio' exact component={()=><Home />} />
            <Route path='/comics' exact component={()=><Comics />} />
            <Route path='/series' exact component={()=><Series /> } />
            <Route component={()=> <Error404 />} /> */}
          </Routes>
        </Router>      
    </div>
  );
}

export default App;
