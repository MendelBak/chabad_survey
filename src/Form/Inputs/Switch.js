import React, { Component } from 'react';
import { Field as FormikField } from 'formik';

class FormField extends Component {
  render() {
    return (
      <div style={{ marginBottom: '2%' }} className='col s12 m6 l6'>
        <label>{this.props.question}</label>
        <div className='switch' style={{ display: 'flex' }}>
          <label>
            No
            <FormikField type='checkbox' name={this.props.id} />
            <span className='lever'></span>
            Yes
          </label>
        </div>
      </div>
    );
  }
}

export default FormField;
