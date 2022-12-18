import React from 'react'
import renderer from 'react-test-renderer'
import ItemInfoView from './item-info-view'



test('test ItemInfoView', () => {
  const mockItemBody = {
    title: 'iPhone X',
    brand: 'Apple',
    category: 'smartphones',
    discountPercentage: 0.23,
    price: 1060,
    rating: 4.44,
    stock: 34,
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  }

  let component = renderer.create(
    <ItemInfoView
      itemBody={mockItemBody}
      img={'https://i.dummyjson.com/data/products/2/1.jpg'}
      addItemToCart={() => {}}
      onGoBack={() => {}}
      isEntered={false}
    />
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  component = renderer.create(
    <ItemInfoView
      itemBody={mockItemBody}
      img={'https://i.dummyjson.com/data/products/2/1.jpg'}
      addItemToCart={() => {}}
      onGoBack={() => {}}
      isEntered={true}
    />
  )

  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()
})
