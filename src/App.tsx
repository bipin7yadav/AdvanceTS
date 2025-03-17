import { useState,useRef } from 'react'
import Input from './components/Input'
import { Button } from './components/Button.tsx';
import Container from './components/Container.tsx';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      {/* <Container as={Button} /> */}
      {/* <Container as={Button}>Click Me </Container>  */}
      {/* <p>
        <Button >Click me</Button>
      </p>
      <p>
        <Button  href='https://google.com' target={"_blank"}>A Link</Button>
      </p>
    <Input label="Name" id="name" type="text" />
    <Input label="Age" id="age" type="number" /> */}
    <Input label="Test" id="test" ref={input} />
    </main>
  )
}

export default App
