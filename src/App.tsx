import { useState,useRef } from 'react'
import Input from './components/Input'
import { Button } from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form from './components/Form.tsx';

function App() {
  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    console.log(data);
    
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }
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
    {/* <Input label="Test" id="test" ref={input} /> */}
    <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" name='name' />
        <Input type="number" label="Age" id="age" name='age' />
        <p>
          <Button type='submit'>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App
