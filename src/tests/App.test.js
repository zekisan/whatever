import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import {configure, shallow} from 'enzyme'

import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

const AppWithRouter = () => {
  return (
    <Router><App /></Router>
  )
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppWithRouter />, div)
})

describe('asdad', () => {
  const wrapper = shallow(<AppWithRouter />)

  it('asdjasd', () => {
    expect(wrapper.text()).toEqual('Off')
  })
})
