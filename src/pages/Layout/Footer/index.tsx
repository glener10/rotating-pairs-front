import { Link } from '@radix-ui/themes';
import { Dispatch, SetStateAction } from 'react';

type FooterProps = {
  setIsAboutModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const Footer = (props: FooterProps): JSX.Element => {
  const { setIsAboutModalOpen } = props;
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2023-2025 Rotating Pairs. All rights reserved.</p>
        <div>
          <Link onClick={(): void => setIsAboutModalOpen(true)}>Open Website Informations</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
