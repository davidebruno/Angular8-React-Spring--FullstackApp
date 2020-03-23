import React, { Component } from 'react';
import ListRubricaComponent from './ListRubricaComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RubricaComponent from './RubricaComponent';

class RubricaApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h3>React Application with CRUD operations</h3>
                    <br />
                    <Switch>
                        <Route path="/" exact component={ListRubricaComponent} />
                        <Route path="/employees" exact component={ListRubricaComponent} />
                        <Route path="/employees/:id" component={RubricaComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default RubricaApp