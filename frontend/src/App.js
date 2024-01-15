import logo from './logo.svg';
import './App.css';
import Box from './Components/ListBox/box'
import Navbar from './Components/Navbar/Navbar';
import Transaction from './Pages/Transaction';
import AddEmployee from './Pages/AddEmployee';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BTTabbar from './Components/Tabbar/BTTabbar';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
    </Routes>
    </>
  );
}

export default App;
