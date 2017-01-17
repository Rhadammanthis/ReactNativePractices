import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeInitForm } from '../actions'
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component{

    componentWillMount(){
        this.props.employeeInitForm();
    }

    onButtonPressed(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render(){
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                        onPress={this.onButtonPressed.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProp, { employeeUpdate, employeeCreate, employeeInitForm })(EmployeeCreate);