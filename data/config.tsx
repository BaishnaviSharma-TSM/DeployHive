import { Button } from '@chakra-ui/react';
import { Link } from '@saas-ui/react';
import { NextSeoProps } from 'next-seo';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { Logo } from './logo';
const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Saas UI',
    description: '',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Join Us',
        href: 'https://form.typeform.com/to/Db1rF0uQ',
        isExternal: true,
      },
    ],
  },
  footer: {
    // copyright: (
    //   <>
    //     Built by{' '}
    //     <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
    //   </>
    // ),
    links: [
      {
        href: 'https://stackmentalist.com/en',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/saas_js',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/saas-js/saas-ui',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
