import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import classnames from 'classnames';
import { Container, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';


import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className } = this.props;
        return (
            <div className={classnames('About', className)}>
                <p><Link to="/">Home</Link></p>
                <h1>Fuck the king 2 - Abouts</h1>
                <Container>
                    <Card block>
                        <CardBlock>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="danger">Button</Button>
                        </CardBlock>
                    </Card>
                </Container>
            </div>
        );
    }
}