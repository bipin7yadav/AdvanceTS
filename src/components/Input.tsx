// import { type ComponentPropsWithoutRef } from "react";
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
    label: string;
    id: string;
  }& ComponentPropsWithoutRef<'input'>;
  
  const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, id, ...props },
    ref
  ) {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} />
      </p>
    );
  });
  
  export default Input;

//   export default function Input({label, id,...props}: InputProps) {
//     return (
//       <p>
//         <label htmlFor={id}>{label}</label>
//         <input id={id} {...props} />
//       </p>
//     );
//   }

