
import { useState } from 'react'
import './App.css'
import ManualForm from './manualform'
import HookForm from './hookform'

function App() {
const [tab, setTab] = useState('manual')

  return (
    <>
     <div className='tab'>
      <button onClick={() => setTab("manual")}>Manual Form</button>
      <button onClick={() => setTab("hook")}>Hook Form</button>
     </div>
     <div>
      {tab === "manual" ? <ManualForm /> : <HookForm />}
     </div>
    </>
  )
}

export default App
