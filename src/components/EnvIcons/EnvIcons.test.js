import React from 'react'
import renderer from 'react-test-renderer'
import Envicons from './index.js'

it('Envicons: default', () => {
  const component = renderer.create(<Envicons />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})