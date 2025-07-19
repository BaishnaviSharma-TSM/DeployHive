import { HStack, Text } from '@chakra-ui/react';

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: '1',
      title: 'Basic',
      description: 'Basic compoents, perfect to get started.',
      price: 'Free',
      features: [
        {
          title: 'Flexible virtual machine selection',
        },
        {
          title: 'Regional cloud support',
        },
        {
          title: 'Custom honeypot configurations',
        },
        // {
        //   title: 'Intuitive setup wizard',
        // },
      ],
      action: {
        href: '#step1',
      },
    },
    {
      id: 'step2',
      title: 'Preminum',
      description: 'Complete frontend stack for bootstrappers and small teams.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'One-click deployment',
        },
        {
          title: 'GCP, AWS, Azure support',
        },
        {
          title: 'Automated provisioning',
        },
      ],
      action: {
        href: '#step2',
      },
    },
    {
      id: 'step3',
      title: 'Business',
      description: 'Unlimited license for growing teams.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Real-time attack insights',
        },
        {
          title: 'Attack tracking & log management',
        },
        {
          title: 'Visual dashboard for system metrics',
        },
      ],
      action: {
        href: '#step3',
      },
    },
  ],
}