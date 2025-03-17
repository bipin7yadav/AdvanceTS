import { useState } from 'react'
import Input from './components/Input'

function App() {

  return (
    <>
    <Input label="Name" id="name" type="text" />
    <Input label="Age" id="age" type="number" />
    </>
  )
}

export default App
