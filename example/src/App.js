import React from 'react'

import { useMemoize } from 'use-memoized'
import 'use-memoized/dist/index.css'

const fn = (num) => {
  console.log('debug', 'exec', num)
  return 'result'
}

const App = () => {
  const [,forceUpdate] = React.useState()
  const [count,setCount] = React.useState(0)
  const memo = useMemoize(fn)

  console.log('debug', memo(count))
  return (<div>
    <span>Create React Library Example 😄</span>
    <span>count: {count}</span>
    <button onClick={() => setCount(prevState => prevState +=1 )}>Incr</button>
    <button onClick={() => setCount(prevState => prevState -=1 )}>Decr</button>
    <button onClick={() => forceUpdate({})}>Re-render</button>
  </div>)
}

export default App
