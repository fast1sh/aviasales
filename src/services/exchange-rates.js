export default class ExchangeRates {
  constructor() {
    this._url = 'https://www.cbr-xml-daily.ru/daily_json.js';
  }

  getRate = async (val) => {
    const request = await fetch(this._url);

    if (!request.ok) {
      throw new Error('Error');
    }

    const data = await request.json();

    const result = await data.Valute[val].Value;

    return result;
  }

  getUsdRate = async () => { 
    const result = await this.getRate('USD');
    return result;
   }

  getEurRate = async () => { 
    const result = await this.getRate('EUR');
    return result;
   }
};