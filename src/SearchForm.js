import React from "react";
import { Formik } from "formik";
import InnerForm from "./InnerSearchForm";

export default () => (
  <Formik
    initialValues={(() => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const date = `${month}/${day}`;
      const hour = now.getHours() + 1;
      // デフォルトは今日の日付で直近の時間から「指定なし」にする
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
          // 日付の選択候補の算出
          let now = new Date();
          const today = `${now.getMonth() + 1}/${now.getDate()}`;
          now.setDate(now.getDate() + 1);
          const tomorrow = `${now.getMonth() + 1}/${now.getDate()}`;
          while (now.getDay() !== 6) {
            now.setDate(now.getDate() + 1);
          }
          const sut = `${now.getMonth() + 1}/${now.getDate()}`;
          now.setDate(now.getDate() + 1);
          const sun = `${now.getMonth() + 1}/${now.getDate()}`;
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
