import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Stop waiting for results and take action."
      subtitle=""
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
            <button className="text-white bg-primary-700 px-6 py-3 rounded-lg text-primary-500 hover:bg-primary-800 shadow-lg">GET STARTED</button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
