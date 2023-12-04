import { Link } from '@radix-ui/themes';

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2023-2025 Rotating Pairs. All rights reserved.</p>
        <div>
          <Link onClick={(): void => console.log('Going to About Page')}>About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
