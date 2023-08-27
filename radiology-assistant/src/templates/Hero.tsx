import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import React from "react";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export function Hero() {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
      try {
          const result = await signInWithPopup(auth, googleAuth);
          if (result.user) {
              window.location.href = "https://creator.voiceflow.com/prototype/64ea96a32998320007252667";
          }
      } catch (error) {
          console.error("Error logging in", error);
      }
  };

  return (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <ul className="flex space-x-4">
          <li className="px-2">
            <Link href="/">Sign up</Link>
          </li>
          <li className="px-2">
            <button onClick={login}>Log in</button>
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
            <button onClick={login} className="text-white bg-primary-700 px-6 py-3 rounded-lg text-primary-500 hover:bg-primary-800 shadow-lg">GET STARTED</button>
          </Link>
        }
      />
    </Section>
  </Background>
  );
}
