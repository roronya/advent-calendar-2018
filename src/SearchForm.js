import React from "react";
import { Formik } from "formik";
import InnerForm from "./InnerSearchForm";
import SearchCondition from "./SearchCondition";

export default () => (
  <Formik
    initialValues={new SearchCondition().toForm()}
    onSubmit={values => {
      const params = SearchCondition.fromForm(values).toAPI();
      // axios.get(endpoint, {params: params})
      // APIを叩く代わりにalertする
      alert(JSON.stringify(params));
    }}
    render={({ values, handleSubmit, handleChange }) => (
      <InnerForm
        values={values}
        candidates={(() => {
          // 日付の選択候補の算出
          return SearchCondition.getCandidates(new Date());
        })()}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    )}
  />
);
