import { useEffect } from 'react';
import { type NextPage } from 'next';

const PrivacyPage: NextPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      /*
      // @ts-expect-error it needs this attribute */
      name="termly-embed"
      data-id="bccd9db6-3bed-4b7b-acae-35aecd4db216"
      data-type="iframe"
    />
  );
};

export default PrivacyPage;
