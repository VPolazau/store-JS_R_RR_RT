import React from 'react'
import renderer from 'react-test-renderer'

import ItemView from './item-view'

test('test ItemView', () => {

  const mockInfo = {
    imageUrl: 'https://i.dummyjson.com/data/products/1/1.jpg',
    title: 'iPhone 9',
    rating: 4.4,
    price: 549,
    discountPercentage: 0.3,
  }

  let component = renderer.create(
    <ItemView
      dataLoadState={0}
      info={mockInfo}
      onItemClicked={()=>{}}
      addToCart={()=>{}}
      user={{isEntered: false}}
      isInCart={false}
    />
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  component = renderer.create(
    <ItemView
      dataLoadState={1}
      info={mockInfo}
      onItemClicked={()=>{}}
      addToCart={()=>{}}
      user={{isEntered: false}}
      isInCart={false}
    />
  )

  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  component = renderer.create(
    <ItemView
      dataLoadState={1}
      info={mockInfo}
      onItemClicked={()=>{}}
      addToCart={()=>{}}
      user={{isEntered: true}}
      isInCart={false}
    />
  )

  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()

  component = renderer.create(
    <ItemView
      dataLoadState={1}
      info={mockInfo}
      onItemClicked={()=>{}}
      addToCart={()=>{}}
      user={{isEntered: true}}
      isInCart={true}
    />
  )

  componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()
})
