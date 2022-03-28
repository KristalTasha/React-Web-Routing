import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from '../data';
import './invoices.css';

export default function Invoices() {
    let invoices = getInvoices();
    return (
      <div className="invoices-body">
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          {invoices.map((invoice) => (
            <Link className='invoice-name'
              style={{ display: "block", margin: "1rem 0" }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    );
}
