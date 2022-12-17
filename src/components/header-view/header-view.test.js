import React from 'react'
import renderer from 'react-test-renderer'

import HeaderView from './header-view'

test('test HeaderView', () => {
  const mockName = 'Victor'
  const mockAmountItemsInCart = 10

  let component = renderer.create(
    <HeaderView
      onClickSignIn={() => {}}
      onClickCart={() => {}}
      name={mockName}
      amountItemsInCart={mockAmountItemsInCart}
      isEntered={false}
      onLogOut={() => {}}
    />
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  component = renderer.create(
    <HeaderView
      onClickSignIn={() => {}}
      onClickCart={() => {}}
      name={mockName}
      amountItemsInCart={mockAmountItemsInCart}
      isEntered={true}
      onLogOut={() => {}}
    />
  )

  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()
})
