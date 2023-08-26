import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <ul className="flex space-x-4">
          <li className="px-2">
            <Link href="/">Sign up</Link>
          </li>
          <li className="px-2">
            <Link href="/">Log in</Link>
          </li>
        </ul>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Generate the most comprehensive ultrasound results\n'}
            <span className="text-primary-700">in one click.</span>
          </>
        }
        description="The AI-driven solution that revolutionizes the way ultrasound images are interpreted and understood."
        button={
          <Link href="/">
            <button className="text-white bg-blue-500 px-6 py-3 rounded-lg text-primary-500 hover:bg-blue-600 shadow-lg">GET STARTED</button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
