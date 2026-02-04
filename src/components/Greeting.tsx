import { useState } from 'react'

interface GreetingProps {
  name?: string
}

export default function Greeting({ name = 'World' }: GreetingProps) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 data-testid="greeting">
        Hello,
        {name}
        !
      </h1>
      <p data-testid="count">
        Count:
        {count}
      </p>
      <button
        data-testid="increment"
        type="button"
        onClick={() => setCount(c => c + 1)}
      >
        +1
      </button>
    </div>
  )
}
