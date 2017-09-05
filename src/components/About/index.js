import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import { Container, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

import  * as AboutActions from '../../stores/reducers/About';
import './style.css';

class About extends Component {
    constructor(props) {
        super(props);

        this.addNumber2 = this.addNumber2.bind(this);
    }

    static propTypes = {
        //about: PropTypes.object,
        number: PropTypes.number
    }
    // static defaultProps = {}
    // state = {}

    addNumber2() {
        this.props.store.dispatch(AboutActions.addNumber());
    }

    render() {
        const { number } = this.props;
        return (
            <div className='About'>
                <p><Link to="/">Home</Link></p>
                <h1>Fuck the king 2 - Abouts</h1>
                <h1>Counter - { number }</h1>
                <Container>
                    <Card block>
                        <CardBlock>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="danger" onClick={this.addNumber2}>Button</Button>
                        </CardBlock>
                    </Card>
                </Container>
            </div>
        );
    }
}

/*const ConnectedComponent = withRouter(connect(
    state => aboutReducer().toJS(), AboutActions
)(About));

export default function Root(props) {
    return <Provider store={store}><ConnectedComponent /></Provider>
}*/
export default About;