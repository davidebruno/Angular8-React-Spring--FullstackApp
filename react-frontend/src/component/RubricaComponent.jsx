import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RubricaDataService from '../service/RubricaDataService';

const EMPLOYEES = 'employees'

class RubricaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        RubricaDataService.retrieveRubrica(EMPLOYEES, this.state.id)
            .then(response => this.setState({
                firstName: response.data.firstName,
                lastName:  response.data.lastName,
                emailId:  response.data.emailId
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.firstName) {
            errors.firstName = 'Enter the Name'
        } else if (values.firstName.length < 3) {
            errors.firstName = 'Enter at least 3 characters as Name'
        }

        return errors

    }

    onSubmit(values) {
        let username = EMPLOYEES

        let record = {
            id: this.state.id,
            firstName: values.firstName,
            lastName : values.lastName,
            emailId : values.emailId,
            targetDate: values.targetDate
        }

        if (this.state.id === "-1") {
            RubricaDataService.createRubrica(username, record)
                .then(() => this.props.history.push('/employees'))
        } else {
            RubricaDataService.updateRubrica(username, this.state.id, record)
                .then(() => this.props.history.push('/employees'))
        }

        console.log(values);
    }

    render() {

        let { emailId, lastName, firstName, id } = this.state

        return (
            <div>
                <h3>Rubrica</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, firstName, lastName, emailId }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="firstName" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>First Name</label>
                                        <Field className="form-control" type="text" name="firstName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Last Name</label>
                                        <Field className="form-control" type="text" name="lastName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="text" name="emailId" />
                                    </fieldset>
                                    
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default RubricaComponent