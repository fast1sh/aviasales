/* 
  TODO

  sort after filters

  sticky filter

  code refactor
*/

import React, { Component } from "react";
import './app.css';

import Filter from "../filter";
import TicketsList from "../tickets-list";
import Row from "../row";


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isError: false,
      currencyFilter: 'rub',
      stopsFilter: {
        all: false,
        zero: false,
        one: false,
        two: false,
        three: false
      }
    };
  }

  onCurrencyFilter = (currencyFilter) => {
    this.setState((state) => {
      return {
        ...state,
        currencyFilter
      }
    });
  }

  onStopsFilter = (value, isOnly = false) => {
    this.setState((state) => {
      if (isOnly) {
        for (let key in state.stopsFilter) {
          state.stopsFilter[key] = false;
        }
      }
      return {
        ...state,
        stopsFilter: {
          ...state.stopsFilter,
          [value]: !state.stopsFilter[value]
        }
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Row 
          left={<Filter onCurrencyFilter={this.onCurrencyFilter} 
                        onStopsFilter={this.onStopsFilter}
                        stopsFilter={this.state.stopsFilter}/>}
          right={<TicketsList currencyFilter={this.state.currencyFilter} stopsFilter={this.state.stopsFilter}/>}
        />
      </div>
    )
  }
}