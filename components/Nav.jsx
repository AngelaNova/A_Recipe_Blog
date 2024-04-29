"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3' position='absolute' top='70px' right='0px'>
      <Link href='./' className='flex gap-2 flex-center l'>
        <Image
          src='/assets/images/logo.png'
          alt='Orange Blog logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'> Orange Blog</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex justify-in_between position:relative left-0 items-left'>
        {!session && providers && (
          <div className='flex gap-3 md:gap-5 justify-Content:flex-end align-Items:flex-end align-Content: flex-end position absolute'>
            {Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign in with {provider.name}
              </button>
            ))}
          </div>
        )}

        {session && (
          <div className='flex gap-3 md:gap-5 justify-Content:flex-end align-Items:flex-end align-Content: flex-end position absolute'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button
              type='button'
              onClick={() => signOut('google')}
              className='outline_btn'
            >
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src='/assets/images/Channel_Pic-Angela.jpg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:flex relative'>
        {session?.user && (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}

        {!session && providers && (
          <div className='flex gap-3 md:gap-5 justify-Content:flex-end align-Items:flex-end align-Content: flex-end position absolute'>
            {Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign in with {provider.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
