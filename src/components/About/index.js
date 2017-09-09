import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import { Container, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'

import './style.css';

class About extends Component {
    constructor(props) {
        super(props);

        this.onPush = this.onPush.bind(this);
    }

    onPush(e){
        this.props.history.push('/asdlkajsd');
    }

    render() {
        const { onClick, number } = this.props;
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
                            <Button color="danger" onClick={onClick}>Button</Button>
                        </CardBlock>
                    </Card>
                </Container>
                <Button color="danger" onClick={this.onPush}>Redirect nowhere</Button>
            </div>
        );
    }
}

export default withRouter(About);

About.propTypes = {
    number: PropTypes.number,
    history: PropTypes.object,
    onClick: PropTypes.func
};