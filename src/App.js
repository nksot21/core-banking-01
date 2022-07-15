import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import CustomerManagement from './pages/TellerOperation/CustomerManagement';
// import Login from './layouts/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <DefaultLayout>
          <CustomerManagement />
      </DefaultLayout>
    </div>
  );
}

export default App;

