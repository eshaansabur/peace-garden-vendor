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
import Orders from './Orders/Orders';
import OrderDetails from './OrderDetails/OrderDetails';
import NewOrders from './Orders/NewOrders';
import NewOrderDetails from './OrderDetails/NewOrderDetails';
import ReturnOrders from './Orders/ReturnOrders';
import ReturnOrderDetails from './OrderDetails/ReturnOrderDetails';
import CancelOrders from './Orders/CancelOrders';
import CancelOrderDetails from './OrderDetails/CancelOrderDetails';
import CompletedOrders from './Orders/CompletedOrders';
import CompletedOrderDetails from './OrderDetails/CompletedOrderDetails';
import OutOfStocks from './components/Products/OutOfStocks';
import OutOfStockDetails from './components/ProductDetails/OutOfStockDetails';
import InStocks from './components/Products/InStocks';
import InStockDetails from './components/ProductDetails/InStockDetails';
import ShippingFees from './Widgets/ShippingFees';
import Coupons from './Widgets/Coupons';
import PaymentIntegration from './Widgets/PaymentIntegration';
import SignUp from './components/SignUp/SignUp';

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
              <Route path='/outofstocks' element={<OutOfStocks></OutOfStocks>}></Route>
              <Route path='/outofstockproduct/:outId' element={<OutOfStockDetails></OutOfStockDetails>}></Route>
              <Route path='/instocks' element={<InStocks></InStocks>}></Route>
              <Route path='/stockproduct/:inId' element={<InStockDetails></InStockDetails>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/orders' element={<Orders></Orders>}></Route>
              <Route path='/order/:orderId' element={<OrderDetails></OrderDetails>}></Route>
              <Route path='/neworders' element={<NewOrders></NewOrders>}></Route>
              <Route path='/neworder/:newOrderId' element={<NewOrderDetails></NewOrderDetails>}></Route>
              <Route path='/returnorders' element={<ReturnOrders></ReturnOrders>}></Route>
              <Route path='/returnorder/:returnOrderId' element={<ReturnOrderDetails></ReturnOrderDetails>}></Route>
              <Route path='/cancelorders' element={<CancelOrders></CancelOrders>}></Route>
              <Route path='/cancelorder/:cancelOrderId' element={<CancelOrderDetails></CancelOrderDetails>}></Route>
              <Route path='/completedorders' element={<CompletedOrders></CompletedOrders>}></Route>
              <Route path='/completedorder/:completedOrderId' element={<CompletedOrderDetails></CompletedOrderDetails>}></Route>
              <Route path='/shippingfees' element={<ShippingFees></ShippingFees>}></Route>
              <Route path='/coupons' element={<Coupons></Coupons>}></Route>
              <Route path='/paymentintegration' element={<PaymentIntegration></PaymentIntegration>}></Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
            </Routes>
            </div>
      </div>
    </div>
  );
}

export default App;
