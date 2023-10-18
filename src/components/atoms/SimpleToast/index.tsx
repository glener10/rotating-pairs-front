import * as Toast from '@radix-ui/react-toast';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface SimpleToastProps {
  description: string;
  title: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const SimpleToast = (props: SimpleToastProps): JSX.Element | null => {
  const { open, setOpen, description, title } = props;

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, [setOpen]);

  return open ? (
    <Toast.Provider>
      <Toast.Root className="ToastRoot" open={open}>
        <Toast.Title className="ToastTitle">{title}</Toast.Title>
        <Toast.Description>{description}</Toast.Description>
        <Toast.Action className="ToastAction" altText="Close" onClick={(): void => setOpen(false)}>
          x
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  ) : null;
};

export default SimpleToast;
