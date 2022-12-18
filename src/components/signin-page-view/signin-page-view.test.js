import React from 'react'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import SigninPageView from './signin-page-view'

test('test SigninPageView', () => {
  let component = renderer.create(
    <BrowserRouter>
      <SigninPageView
        onGoBack={() => {}}
        error={true}
        handlerAddUser={() => {}}
        onChangeInput={() => {}}
      />
    </BrowserRouter>
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  component = renderer.create(
    <BrowserRouter>
      <SigninPageView
        onGoBack={() => {}}
        error={false}
        handlerAddUser={() => {}}
        onChangeInput={() => {}}
      />
    </BrowserRouter>
  )

  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

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
