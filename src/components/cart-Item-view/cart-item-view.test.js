import React from 'react'
import renderer from 'react-test-renderer'

import CartItemView from './cart-item-view'

test('test CartItemView', () => {
  const mockInfo = {
    img: 'https://i.dummyjson.com/data/products/1/1.jpg',
    title: 'iPhone 9',
    count: 1,
    price: 549,
  }

  const component = renderer.create(
    <CartItemView
      info={mockInfo}
      isDeleted={false}
      inc={() => {}}
      dec={() => {}}
      removeItem={() => {}}
    />
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()
})
