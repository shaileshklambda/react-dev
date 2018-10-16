import React from 'react'
import renderer from 'react-test-renderer'
import Popovercomponent from './index.js'

it('Popovercomponent: default', () => {
  const component = renderer.create(<Popovercomponent />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})