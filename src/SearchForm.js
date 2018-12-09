import React from "react";
import { Formik } from "formik";

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
        {[...Array(24).keys()].slice(11, 23).map(t => (
          <option key={`dateFrom${t}`} value={`${t}:00`}>
            {t}:00
          </option>
        ))}
      </select>
      ~
      <select value={values.timeTo} name="timeTo" onChange={handleChange}>
        <option value="null">指定なし</option>
        {[...Array(24).keys()].slice(11, 23).map(t => (
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
    initialValues={{
      date: "12/9",
      timeFrom: "11:00",
      timeTo: "null"
    }}
    onSubmit={values => alert(JSON.stringify(values))}
    render={({ values, handleSubmit, handleChange }) => (
      <InnerForm
        values={values}
        candidates={[
          { label: "今日12/9", value: "12/9" },
          { label: "明日12/10", value: "12/10" },
          { label: "土曜12/15", value: "12/15" },
          { label: "日曜12/16", value: "12/16" }
        ]}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    )}
  />
);
