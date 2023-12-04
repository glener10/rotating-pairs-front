import { Cross1Icon } from '@radix-ui/react-icons';
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
        <Toast.Action
          className="ToastAction"
          style={{ background: 'none', display: 'flex', alignContent: 'center' }}
          altText="Close"
          onClick={(): void => setOpen(false)}
        >
          <Cross1Icon />
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  ) : null;
};

export default SimpleToast;
