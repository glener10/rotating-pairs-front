import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export const AboutDialog = (): JSX.Element => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">About the website</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          rotatingpairs.online is a free website to generate random pair combinations for those who
          work with pair programming and rotating pairs.
        </Dialog.Description>
        <Dialog.Title className="DialogTitle">Privacy Policy</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Our website does not store any user information.
        </Dialog.Description>
        <Dialog.Title className="DialogTitle">Terms of use</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Use it at your own risk. We are not responsible for its use.
        </Dialog.Description>

        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default AboutDialog;
