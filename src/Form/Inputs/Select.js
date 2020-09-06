import React, { Component } from 'react';
import { Field as FormikField } from 'formik';
import _ from 'lodash';

class Select extends Component {
  render() {
    return (
      <div className='col s12 m6 l6'>
        <label>{this.props.question}</label>
        <div className='input-field' style={{ display: 'flex' }}>
          <FormikField component='select' multiple={this.props.multipleSelect}>
            {_.map(this.props.options, (item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </FormikField>
        </div>
      </div>
    );
  }
}

export default Select;
