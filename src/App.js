import { Link, Outlet } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="header">
    <h1 className="logo-title">Book Store</h1>
    <nav className="navie">
      <Link to="/invoices" className="nav-item">Invoices</Link> |{" "}
      <Link to="/expenses" className="nav-item">Expenses</Link>
    </nav>
    <Outlet />
  </div>
  );
}

export default App;
