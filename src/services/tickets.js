import * as moment from 'moment';
import 'moment/locale/ru';

moment.updateLocale('ru', {
  weekdaysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
});

moment.updateLocale('ru', {
  monthsShort: [
    "янв", "фев", "мар", "апр", "май", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"
  ]
});

export default class Tickets {
  constructor() {
    this._path = './data/tickets.json';
  }

  getAllTickets = async () => {
    const request = await fetch(this._path);
    if (!request.ok) {
      throw new Error('Error with fetching tickets');
    }
    const data = await request.json();
    const sorted = this.sortTickets(data.tickets);
    const result = await sorted.map((ticket) => this._transformTicket(ticket));
    return result;
  }

  sortTickets = (tickets) => {
    const comparePrices = (ticket1, ticket2) => {
      return ticket1.price - ticket2.price;
    }
    return tickets.sort(comparePrices);
  }

  _transformStops = ({ stops }) => {
    switch (stops) {
      case 1:
        return `${stops} пересадка`;
      case 2:
      case 3:
        return `${stops} пересадки`;
      default:
        return '';
    }
  }

  _transformTicket = (ticket) => {
    const {
      departure_date,
      arrival_date
    } = ticket;

    return {
      ...ticket,
      departure_date: moment(new Date(departure_date)).format('D MMM YYYY[,] ddd'),
      arrival_date: moment(new Date(arrival_date)).format('D MMM YYYY[,] ddd'),
      stops: this._transformStops(ticket)
    }
  }
}