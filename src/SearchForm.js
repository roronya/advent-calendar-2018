import React from "react";
import { Formik } from "formik";

const range = (i, j) => [...Array(j).keys()].slice(i, j);

const InnerForm = ({ values, candidates, handleChange, handleSubmit }) => (
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

export default () => (
  <Formik
    initialValues={(() => {
      const now = new Date();
      const month = now.getMonth();
      const day = now.getDate();
      const date = `${month}/${day}`;
      const hour = now.getHours() + 1;
      return {
        date: date,
        timeFrom: `${hour}:00`,
        timeTo: "null"
      };
    })()}
    onSubmit={values => {
      // APIを叩くために変換する
      const params = {
        date: values.date,
        time_from: values.timeFrom === "null" ? null : values.timeFrom,
        time_to: values.timeTo === "null" ? null : values.timeTo
      };
      // axios.get(endpoint, {params: params})
      // APIを叩く代わりにalertする
      alert(JSON.stringify(params));
    }}
    render={({ values, handleSubmit, handleChange }) => (
      <InnerForm
        values={values}
        candidates={(() => {
          let now = new Date();
          const today = `${now.getMonth()}/${now.getDate()}`;
          now.setDate(now.getDate() + 1);
          const tomorrow = `${now.getMonth()}/${now.getDate()}`;
          while (now.getDay() !== 6) {
            now.setDate(now.getDate() + 1);
          }
          const sut = `${now.getMonth()}/${now.getDate()}`;
          now.setDate(now.getDate() + 1);
          const sun = `${now.getMonth()}/${now.getDate()}`;
          return [
            { label: `今日${today}`, value: `${today}` },
            { label: `明日${tomorrow}`, value: `${tomorrow}` },
            { label: `土曜${sut}`, value: `${sut}` },
            { label: `日曜${sun}`, value: `${sun}` }
          ];
        })()}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    )}
  />
);
