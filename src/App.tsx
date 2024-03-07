import { Suspense, lazy, useState } from "react"

const Profile = lazy(() => import('./components/Profile'))
const Org = lazy(() => import('./components/Org'))

function App() {
  const [showOrg, setShowOrg] = useState(false);

  return (
    <Suspense fallback={<h3>Loading ...</h3>}>
      Hello world
      <Profile />

      <button onClick={() => setShowOrg(!showOrg)}>Show Org</button>
      {showOrg && (
        <Suspense fallback={<h3>Loading ...</h3>}>
          <Org />
        </Suspense>
      )}
    </Suspense>
  )
}

export default App
