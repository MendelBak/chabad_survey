import React from 'react';
import FormField from './FormField';
import Survey1 from '../Surveys/Survey1';
import _ from 'lodash';
import { Formik, Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';

function renderFormField() {
  // For each survey item, render one form field.
  return _.map(Survey1.survey, (item) => {
    return (
      <FormField
        key={item.id}
        id={item.id}
        label={item.label}
        question={item.question}
        options={item.options}
        type={item.type}
        multipleSelect={item.multipleSelect}
      />
    );
  });
}

const Form = () => (
  <div className='row' style={{ display: 'flex' }}>
    <Formik
      // TODO: this initial values option is incorrect.
      initialValues={{ 0: '', 1: '' }}
      onSubmit={async (values) => {
        console.log(values);
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <FormikForm>
        {renderFormField()}
        <Link to={'/surveySummary'}>
          <button
            type='submit'
            className='btn-large hoverable waves-effect waves-light'
          >
            Submit
            <i className='material-icons right'>done_all</i>
          </button>
        </Link>
      </FormikForm>
    </Formik>
  </div>
);

export default Form;
