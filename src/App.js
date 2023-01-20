import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Charts from './components/Charts/Charts';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container-fluid">
            <div className='row'>
            <Sidebar></Sidebar>
            <Routes>
              <Route path='/' element={<Dashboard></Dashboard>}></Route>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='/charts' element={<Charts></Charts>}></Route>
              <Route path='/products' element={<Products></Products>}></Route>
              <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
            </div>
      </div>
    </div>
  );
}

export default App;
