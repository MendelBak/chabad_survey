import React, { Component } from 'react';
import { Field as FormikField } from 'formik';
import Switch from './Inputs/Switch';
import Select from './Inputs/Select';
// import Range from './Inputs/Range';

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

      // Commented out since not using, but I put a lot of time to figure out how it works, so I'm saving it for the future.
      // If used in the future, style will need to be set properly.
      // case 'range':
      //   return (
      //     <Range
      //       key={this.props.id}
      //       id={this.props.id}
      //       label={this.props.label}
      //       question={this.props.question}
      //     />
      //   );

      default:
        return (
          <div className='col s12 m6 l6'>
            <label>{this.props.question}</label>
            <div className='input-field' style={{ display: 'flex' }}>
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
