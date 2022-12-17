import React from 'react'
import renderer from 'react-test-renderer'

import ErrorBoundary from './error-boundry'

test('test ErrorBoundary', () => {
  const Child = () => {
    throw new Error()
  }

  const component = renderer.create(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  )

  let componentTree = component.toJSON()
  expect(componentTree).toMatchSnapshot()
})


// import { render } from '@testing-library/react'

// const renderProviders = (ui: React.ReactElement) => render(ui, {})

// const Child = () => {
//   throw new Error()
// }

// describe('Error Boundary', () => {
//   it(`should render error boundary component when there is an error`, () => {
//     const { getByText } = renderProviders(
//       <ErrorBoundary>
//         <Child />
//       </ErrorBoundary>
//     )

//     const errorMessage = getByText('something went wrong')
//     expect(errorMessage).toBeDefined()
//   })
// })