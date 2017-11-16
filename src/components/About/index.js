import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { compose, withHandlers, withProps } from 'recompose'
import { Button, Row, Col, Card, CardTitle, Icon } from 'react-materialize'

import * as AboutActions from '../../stores/reducers/About'
import './style.css'
import FKing from '../../fking.jpg'

const About = (props) => {
  const { totalNumber, onClick, onPush } = props
  return (
    <Row className='About'>
      <Row>
        <Col m={6} s={12}>
          <h2>Fuck the king 2 - About</h2>
          <h2>Counter - { totalNumber.askdjhasd }</h2>
        </Col>
      </Row>
      <Row>
        <Col m={6} s={12}>
          <Card className='small' header={<CardTitle image={FKing}>Card Title</CardTitle>}
            actions={[<a onClick={onClick}>This is a Link</a>]}>
                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </Card>
        </Col>
      </Row>
      <Row>
        <Col m={6} s={12}>
          <Link to='/sadasdad'>
            <Button waves='light'onClick={onPush}>Redirect nowhere<Icon left>cloud</Icon></Button>
          </Link>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Father><Child text='fdfsfdsf' /><Child text='dasd' /></Father>
    </Row>
  )
}

About.propTypes = {
  number: PropTypes.number
}

const Father = props => <div>{props.children}</div>

const Child = props => <p>{props.text}</p>

const withComponentHandlers = withHandlers({
  onClick: ({ dispatch }) => (e) => {
    dispatch(AboutActions.addNumber())
  },
  onPush: ({ history }) => (e) => {
    history.push('/asdlkajsd')
  }
})

const withComponentProps = withProps(props => ({
  totalNumber: props.number + 1
}))

const decorate = compose(
    withComponentProps,
    withRouter,
    withComponentHandlers
)

export default decorate(About)
