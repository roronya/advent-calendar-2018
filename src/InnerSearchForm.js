import React from "react";

const range = (i, j) => [...Array(j).keys()].slice(i, j);
export default ({ values, candidates, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      {candidates.map(c => (
        <div key={`date${c.value}`}>
          <input
            type="radio"
            id={c.value}
            name="date"
            defaultChecked={values.date === c.value}
            value={c.value}
            onChange={handleChange}
          />
          <label htmlFor={c.value}>{c.label}</label>
        </div>
      ))}
    </div>
    <div>
      <label>開始時刻</label>
      <select value={values.timeFrom} name="timeFrom" onChange={handleChange}>
        <option value="null">指定なし</option>
        {range(10, 23).map(t => (
          <option key={`dateFrom${t}`} value={`${t}:00`}>
            {t}:00
          </option>
        ))}
      </select>
      ~
      <select value={values.timeTo} name="timeTo" onChange={handleChange}>
        <option value="null">指定なし</option>
        {range(10, 23).map(t => (
          <option key={`dateTo${t}`} value={`${t}:00`}>
            {t}:00
          </option>
        ))}
      </select>
    </div>
    <input type="submit" value="指定した条件で探す" />
  </form>
);
