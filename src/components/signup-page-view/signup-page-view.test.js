import React from 'react'
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer'

import SignupPageView from './signup-page-view'

test('test SignupPageView', () => {
  const component = renderer.create(
    <SignupPageView handlerAddUser={()=>{}} onGoBack={()=>{}} />
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  const inputName = component.root.findByProps({"data-testid":"name"})
  act(() => {
    const mockChangeEvent = { target: { value: 'Victor' } }
    inputName.props.onChange(mockChangeEvent)
  })

  const inputEmail = component.root.findByProps({ "data-testid":"email"})
  act(() => {
    const mockChangeEvent = { target: { value: 'email' } }
    inputEmail.props.onChange(mockChangeEvent)
  })

  const inputPassword = component.root.findByProps({"data-testid":"password"})
  act(() => {
    const mockChangeEvent = { target: { value: 12345678 } }
    inputPassword.props.onChange(mockChangeEvent)
  })
  
  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()
})
