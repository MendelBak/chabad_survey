import React, { Component } from 'react';
import { Field as FormikField } from 'formik';
import Switch from './Inputs/Switch';
import Select from './Inputs/Select';
import Range from './Inputs/Range';

class FormField extends Component {
  render() {
    switch (this.props.type) {
      case 'switch':
        return (
          <Switch
            key={this.props.id}
            id={this.props.id}
            label={this.props.label}
            question={this.props.question}
          />
        );
      case 'select':
        return (
          <Select
            key={this.props.id}
            id={this.props.id}
            label={this.props.label}
            question={this.props.question}
            options={this.props.options}
            multipleSelect={this.props.multipleSelect}
          />
        );

      case 'range':
        return (
          <Range
            ey={this.props.id}
            id={this.props.id}
            label={this.props.label}
            question={this.props.question}
          />
        );

      default:
        return (
          <div>
            <label>{this.props.question}</label>
            <div className='input-field'>
              <FormikField
                id={this.props.id}
                name={this.props.id}
                placeholder={this.props.label}
                type={this.props.type}
              />
            </div>
          </div>
        );
    }
  }
}

export default FormField;
