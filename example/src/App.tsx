import React from 'react'
import { useMemoize } from 'use-memoize'

const fn = (num: number) => {
  console.log('exec', num)
  return 2 * num
}

const App: React.FC = () => {
  const [, forceUpdate] = React.useState()
  const [count, setCount] = React.useState(0)
  const memo = useMemoize(fn)

  memo(count)

  return (
    <div>
      <span>Create React Library Example 😄</span>
      <span>count * 2: {memo(count)}</span>
      <button onClick={() => setCount(prevState => prevState += 1)}>Incr</button>
      <button onClick={() => setCount(prevState => prevState -= 1)}>Decr</button>
      <button onClick={() => forceUpdate({})}>Re-render</button>
    </div>
  )
}

export default App
