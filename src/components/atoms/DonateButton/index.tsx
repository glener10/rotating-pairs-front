/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect } from 'react';

export const DonateButton = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
    script.async = true;
    script.charset = 'utf-8';

    document.body.appendChild(script);

    script.onload = (): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: process.env.NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID,
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
      }).render('#donate-button');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="donate-button-container">
      <div id="donate-button"></div>
    </div>
  );
};

export default DonateButton;
