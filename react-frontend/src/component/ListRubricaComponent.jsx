import React, { Component } from 'react'
import RubricaDataService from '../service/RubricaDataService';

const EMPLOYEES = 'employees'

class ListRubricaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: [],
            message: null
        }
        this.deleteRubricaClicked = this.deleteRubricaClicked.bind(this)
        this.updateRubricaClicked = this.updateRubricaClicked.bind(this)
        this.addRubricaClicked = this.addRubricaClicked.bind(this)
        this.refreshRubrica = this.refreshRubrica.bind(this)
    }

    componentDidMount() {
        this.refreshRubrica();
    }

    refreshRubrica() {
        RubricaDataService.retrieveAllRubrica(EMPLOYEES)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ records: response.data })
                }
            )
    }

    deleteRubricaClicked(id) {
        RubricaDataService.deleteRubrica(EMPLOYEES, id)
            .then(
                response => {
                    this.setState({ message: `Successfully deleted record with id ${id} from the Rubrica` })
                    this.refreshRubrica()
                }
            )

    }

    addRubricaClicked() {
        this.props.history.push(`/employees/-1`)
    }

    updateRubricaClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/employees/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                
                <br />
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="row">
                   <div><h3>Rubrica</h3></div>
                   <div className="divspace"></div> 
                   <div>
                        <button className="btn btn-warning" onClick={this.addRubricaClicked}>Add Entry</button>
                    </div>
                </div>
                <br />
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { // Loops the elements of the rubrica
                                this.state.records.map(
                                    record =>
                                        <tr key={record.id}>
                                            <td>{record.id}</td>
                                            <td>{record.firstName}</td>
                                            <td>{record.lastName}</td>
                                            <td>{record.emailId}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateRubricaClicked(record.id)}>Update</button></td>
                                            <td><button className="btn btn-delete" onClick={() => this.deleteRubricaClicked(record.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListRubricaComponent