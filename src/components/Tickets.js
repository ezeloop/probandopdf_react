import React, { useEffect, useState } from "react";
import generatePDF from "./generatePDF";
import axios from 'axios';
import TicketsComponent from './TicketsComponent'

const Tickets = () => {
  
  const [tickets, setTickets] = useState([]);
  

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tickets");
        setTickets(response.data.tickets);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTickets();
  }, []);

const reportTickets = tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      
      <TicketsComponent tickets={tickets} />
    </div>
  );
};

export default Tickets;