/* eslint-disable @typescript-eslint/no-misused-promises */
import { DonateButton } from '@/components/atoms/DonateButton';
import { Link } from '@radix-ui/themes';
import { useRouter } from 'next/router';

export const Footer = (props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const { ...rest } = props;
  const router = useRouter();

  async function goToAboutPage(): Promise<void> {
    await router.push('about');
  }

  return (
    <footer
      {...rest}
      style={{ display: 'flex', justifyContent: 'space-between' }}
      className="footer"
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>&copy; 2023-2025 Rotating Pairs. All rights reserved.</p>
        <div>
          <Link onClick={async (): Promise<void> => goToAboutPage()}>About</Link>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <DonateButton />
      </div>
    </footer>
  );
};

export default Footer;
