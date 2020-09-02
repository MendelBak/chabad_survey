import React, { Component } from 'react';
import { Field as FormikField } from 'formik';
import 'nouislider/distribute/nouislider.css';
import Nouislider from 'nouislider-react';

class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = { salaryRange1: 50000, salaryRange2: 55000 };

    this.handleSalaryChange = this.handleSalaryChange.bind(this);
  }

  handleSalaryChange(e) {
    this.setState({ salaryRange1: e[0], salaryRange2: e[1] });
  }

  render() {
    return (
      <div id='slider' style={{ marginBottom: '2%' }}>
        <label>{this.props.question}</label>
        <Nouislider
          start={[this.state.salaryRange1, this.state.salaryRange2]}
          connect={true}
          step={1000}
          behaviour='drag-fixed'
          orientation='horizontal'
          range={{
            min: 20000,
            max: 100000,
          }}
          onUpdate={this.handleSalaryChange}
        />
        <p
          id='salaryDisplay'
          onChange={this.handleSalaryChange}
        >{`$${this.state.salaryRange1} - $${this.state.salaryRange2}`}</p>
      </div>
    );
  }
}

export default FormField;
