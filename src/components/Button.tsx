import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};
// predicate function to check if props is AnchorProps

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

// props is AnchorProps if it has href property

export function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

// type ButtonProps = {
//   el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//   el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// export default function Button(props: ButtonProps | AnchorProps) {
//   // const {el, ...otherProps} = props;
//   if (props.el === 'anchor') {
//     return <a className="button" {...props}></a>;
//   }

//   return <button className="button" {...props}></button>;
// }


