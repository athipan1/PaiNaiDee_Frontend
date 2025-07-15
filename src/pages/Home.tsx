import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pai Nai Dee</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Home
