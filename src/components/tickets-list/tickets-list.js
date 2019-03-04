import React, { Component } from "react";
import './tickets-list.css';
import Ticket from "../ticket";
import TicketsService from "../../services/tickets";
import Rates from "../../services/exchange-rates";
import Loader from "../loader";

export default class TicketsList extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      tickets: [],
      usdRate: 0,
      eurRate: 0
    }
  }

  componentWillMount() {
    this.updateTickets();
    this.updateRates();
  }

  updateRates() {
    const { getUsdRate, getEurRate } = new Rates();
    
    getUsdRate()
      .then((usdRate) => this.setState((state) => {
        return {
          ...state,
          usdRate
        }
      }));
    getEurRate()
      .then((eurRate) => this.setState((state) => {
        return {
          ...state,
          eurRate
        }
      }));
  }

  updateTickets() {
    const { getAllTickets } = new TicketsService();

    getAllTickets()
      .then((tickets) => {

        const ticketsData = tickets.map((ticket) => {
          return {
            ...ticket,
            price: this.transformPrice(ticket.price, this.props.currencyFilter)
          }
        });

        this.setState((state) => {
          return {
            ...state,
            isLoading: false,
            tickets: this.filterByStops(ticketsData)
          }
        });
      });
  }

  filterByStops(tickets) {
    const { all, zero, one, two, three } = this.props.stopsFilter;
    const result = [];
    if (all || (!all && !zero && !one && !two && !three)) {
      return tickets;
    }
    if (zero) {
      const filtered = tickets.filter((ticket) => !ticket.stops);
      result.push(filtered);
    }
    if (one) {
      const filtered = tickets.filter((ticket) => parseInt(ticket.stops) === 1);
      result.push(filtered);
    }
    if (two) {
      const filtered = tickets.filter((ticket) => parseInt(ticket.stops) === 2);
      result.push(filtered);
    }
    if (three) {
      const filtered = tickets.filter((ticket) => parseInt(ticket.stops) === 3);
      result.push(filtered);
    }
    return result.flat();
  }

  transformPrice(price, currencyFilter) {
    const { usdRate, eurRate } = this.state;

    const beautify = (str) => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    switch(currencyFilter) {
      case 'usd':
        return `$${beautify((price / usdRate).toFixed(0))}`;
      case 'eur':
        return `${beautify((price / eurRate).toFixed(0))}€`;
      default:
        return `${beautify(price)}₽`;
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currencyFilter === prevProps.currencyFilter && this.props.stopsFilter === prevProps.stopsFilter) {
      return;
    }
    this.updateTickets();
  }

  renderTickets(tickets) {
    return tickets.map((ticket, idx) => <Ticket ticket={ticket} key={idx}/>);
  }

  render() {

    const { tickets, isLoading } = this.state;

    const ticketsContent = isLoading ? <Loader /> : this.renderTickets(tickets);

    return (
      <div className="tickets">

        {ticketsContent}

          </div>
    )
  }
};