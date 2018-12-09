const toDateString = date => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

export default class SearchCondition {
  constructor(date = new Date(), timeFrom = null, timeTo = null) {
    this.date = date;
    this.timeFrom = timeFrom;
    this.timeTo = timeTo;
  }
  toForm() {
    console.log(this.timeFrom);
    return {
      date: toDateString(this.date),
      timeFrom: `${this.date.getHours() + 1}:00`,
      timeTo: this.timeTo ? `${this.timeTo}:00` : "null"
    };
  }
  toAPI() {
    return {
      date: toDateString(this.date),
      time_from: this.timeFrom,
      time_to: this.timeTo
    };
  }
  static fromForm({ date, timeFrom, timeTo }) {
    return new SearchCondition(
      new Date(date),
      timeFrom === "null" ? null : timeFrom,
      timeTo === "null" ? null : timeTo
    );
  }
  static getCandidates(inputDate) {
    let date = new Date(inputDate);
    const today = `${date.getMonth() + 1}/${date.getDate()}`;
    date.setDate(date.getDate() + 1);
    const tomorrow = `${date.getMonth() + 1}/${date.getDate()}`;
    while (date.getDay() !== 6) {
      date.setDate(date.getDate() + 1);
    }
    const sut = `${date.getMonth() + 1}/${date.getDate()}`;
    date.setDate(date.getDate() + 1);
    const sun = `${date.getMonth() + 1}/${date.getDate()}`;
    return [
      { label: `今日${today}`, value: `${today}` },
      { label: `明日${tomorrow}`, value: `${tomorrow}` },
      { label: `土曜${sut}`, value: `${sut}` },
      { label: `日曜${sun}`, value: `${sun}` }
    ];
  }
}
