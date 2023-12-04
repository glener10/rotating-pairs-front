/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from '@radix-ui/themes';
import { useRouter } from 'next/router';

export const Footer = (): JSX.Element => {
  const router = useRouter();

  async function goToAboutPage(): Promise<void> {
    await router.push('about');
  }

  return (
    <footer className="footer">
      <div>
        <p>&copy; 2023-2025 Rotating Pairs. All rights reserved.</p>
        <div>
          <Link onClick={async (): Promise<void> => goToAboutPage()}>About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
