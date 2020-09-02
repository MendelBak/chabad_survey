import React, { Component } from 'react';
import { Field as FormikField } from 'formik';
import _ from 'lodash';

class Select extends Component {
  render() {
    return (
      <div>
        <label>{this.props.question}</label>
        <div className='input-field'>
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
