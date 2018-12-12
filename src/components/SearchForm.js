import React from "react";
import { Formik } from "formik";
import InnerForm from "./InnerSearchForm";

export default ({ searchCondition, candidates, handleSubmit }) => (
  <Formik
    initialValues={searchCondition}
    onSubmit={values => {
      handleSubmit(values);
    }}
    render={({ values, handleSubmit, handleChange }) => (
      <InnerForm
        values={values}
        candidates={candidates}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    )}
  />
);
