import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button.tsx';

function App() {

  return (
    <main>
      <p>
        <Button >Click me</Button>
      </p>
      <p>
        <Button  href='https://google.com' target={"_blank"}>A Link</Button>
      </p>
    <Input label="Name" id="name" type="text" />
    <Input label="Age" id="age" type="number" />
    </main>
  )
}

export default App
