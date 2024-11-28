import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Button, NavbarBrand, NavbarContent } from '@nextui-org/react';

interface NavbarProps {
  logoSrc?: string;
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];


export function LandingNavbar({ logoSrc }: NavbarProps) {
  return (
    <Navbar
    maxWidth='2xl'
    isBlurred
shouldHideOnScroll
      className="text-white bg-gradient-to-r from-gray-900 to-indigo-950"
    >
      <NavbarBrand>
        {logoSrc && (
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Logo"
              width={500}
              height={500}
              className="h-20 w-auto"
            />
          </Link>
        )}
              </NavbarBrand>
        <NavbarContent className="space-x-4" justify='center'>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="light"
                className="text-white hover:bg-gray-700"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </NavbarContent>

      <NavbarContent justify='end'>
        <Button
          color="primary"
          href='#contact'
          className="bg-indigo-500 hover:bg-blue-600"
        >
          Comenzar ahora
        </Button>
      </NavbarContent>
    </Navbar>
  );
}

