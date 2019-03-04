import React, { Component } from "react";
import './filter.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter__block">
          <span className="filter__title">Валюта</span>
          <div className="filter__radios">

            <div className="radio">
              <input type="radio" className="input radio__input" id="rub" name="currency"
                      onChange={() => this.props.onCurrencyFilter('rub')} defaultChecked></input>
                <label htmlFor="rub" className="radio__label">RUB</label>
                        </div>
                        <div className="radio">
                <input type="radio" className="input radio__input" id="usd" name="currency"
                      onChange={() => this.props.onCurrencyFilter('usd')}></input>
                  <label htmlFor="usd" className="radio__label">USD</label>
                        </div>
                        <div className="radio">
                  <input type="radio" className="input radio__input" id="eur" name="currency"
                        onChange={() => this.props.onCurrencyFilter('eur')}></input>
                    <label htmlFor="eur" className="radio__label">EUR</label>
                        </div>

                    </div>
              </div>
              <div className="filter__block">
                <span className="filter__title">Количество пересадок</span>
                <div className="checks">
                  <label className="check">
                    <input type="checkbox" className="input check__input"
                          onChange={() => this.props.onStopsFilter('all')}
                          checked={this.props.stopsFilter.all}></input>
                      <span className="check__box"></span>
                      <button className="check__button"
                          onClick={() => this.props.onStopsFilter('all', true)}>Только</button>
                      Все
                        </label>
                    <label className="check">
                      <input type="checkbox" className="input check__input"
                          onChange={() => this.props.onStopsFilter('zero')}
                          checked={this.props.stopsFilter.zero}></input>
                        <span className="check__box"></span>
                        <button className="check__button"
                          onClick={() => this.props.onStopsFilter('zero', true)}>Только</button>
                        Без пересадок
                        </label>
                      <label className="check">
                        <input type="checkbox" className="input check__input"
                            onChange={() => this.props.onStopsFilter('one')}
                            checked={this.props.stopsFilter.one}></input>
                          <span className="check__box"></span>
                          <button className="check__button"
                          onClick={() => this.props.onStopsFilter('one', true)}>Только</button>
                          1 пересадка
                        </label>
                        <label className="check">
                          <input type="checkbox" className="input check__input"
                            onChange={() => this.props.onStopsFilter('two')}
                            checked={this.props.stopsFilter.two}></input>
                            <span className="check__box"></span>
                            <button className="check__button"
                          onClick={() => this.props.onStopsFilter('two', true)}>Только</button>
                            2 пересадки
                        </label>
                          <label className="check">
                            <input type="checkbox" className="input check__input"
                            onChange={() => this.props.onStopsFilter('three')}
                            checked={this.props.stopsFilter.three}></input>
                              <span className="check__box"></span>
                              <button className="check__button"
                          onClick={() => this.props.onStopsFilter('three', true)}>Только</button>
                              3 пересадки
                        </label>
                    </div>
                </div>
            </div>
    )
  }
}