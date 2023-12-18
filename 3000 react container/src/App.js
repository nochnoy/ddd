import React from 'react'
const Component1 = React.lazy(() => import('MicroFrontendReact/Component1'))
const Component2 = React.lazy(() => import('MicroFrontendAngular/Component2'))

export default function App() {
  return (
    <div>
      Реакт-контейнер
      <Component1 />
      <Component2 />
    </div>
  )
}
