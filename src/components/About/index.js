import React from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import { Container, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { compose, withHandlers, withProps } from 'recompose';
import { withRouter } from 'react-router-dom'

import  * as AboutActions from '../../stores/reducers/About';
import './style.css';

const About = (props) => {
    const { totalNumber, onClick, onPush } = props;
    return (
        <div className='About'>
            <p><Link to="/">Home</Link></p>
            <h1>Fuck the king 2 - Abouts</h1>
            <h1>Counter - { totalNumber }</h1>
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
            <Button color="danger" onClick={onPush}>Redirect nowhere</Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <Father><Child text="fdfsfdsf"/><Child text="dasd"/></Father>
        </div>
    );
}

About.propTypes = {
    number: PropTypes.number
};

const Father = props => <div>{props.children}</div>;

const Child = props => <p>{props.text}</p>;

const withComponentHandlers = withHandlers({
    onClick: ({ store }) => (e) => {
        store.dispatch(AboutActions.addNumber());
    },
    onPush: ({ history }) => (e) => {
        history.push('/asdlkajsd');
    }
});

const withComponentProps = withProps(props => ({
    totalNumber: props.number + 1
}));

const decorate = compose(
    withComponentProps,
    withRouter,
    withComponentHandlers
);

export default decorate(About);