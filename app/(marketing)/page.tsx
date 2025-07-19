'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import Lottie from 'lottie-react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiActivity,
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCloud,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiShield,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
// import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

import landingPageImg from '../../public/static/images/ladingPageImage.json'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 40 }} pb="20">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Now Deploy VMs & Honeypots
                <Br /> in just One Click
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Easily deploy virtual machines and honeypots on GCP, AWS, or
                Azure. Select VM types, honeypot quantity, and preferred cloud
                region, we automate everything else. Instantly gain real-time
                monitoring, system logs, and complete visibility into your cloud
                infrastructure.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" py="20px">
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="https://form.typeform.com/to/Db1rF0uQ"
                >
                  Join Us
                </ButtonLink>
                {/* <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Get Started
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <div style={{ width: 500, height: 500 }}>
                <Lottie animationData={landingPageImg} loop={true} />
              </div>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Simplified Cloud Configuration',
            icon: FiSmile,
            description: `Deploy VMs and honeypots in clicks with an intuitive setup select type, region, and behavior for instant monitoring.`,
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'One-Click Cloud Deployment',
            icon: FiSliders,
            description:
              'With a single click, launch your secure honeypot environment across Google Cloud Platform , Amazon Web Services, and Microsoft Azure.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Real-Time Monitoring',
            icon: FiGrid,
            description:
              'Get centralized visibility with real-time metrics and alerts on resource usage, network activity, and honeypot interactions.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Built for Security Teams',
            icon: FiThumbsUp,
            description:
              'Use honeypots to detect threats, analyze attacker behavior, and stay ahead of cyber risks all without touching the command line.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      {/* <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>
 
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem> */}
      {/* <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem> */}
      <HighlightsTestimonialItem
        name="Google Cloud"
        avatar="/static/images/GCP.webp"
        size={'sm'}
        gradient={['pink.200', 'purple.500']}
      ></HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Google Cloud">
        <Text color="muted" fontSize="lg">
          Google Cloud Platform (GCP) is a suite of cloud computing services
          that enables businesses to build, deploy, and scale applications on
          Google's reliable infrastructure.
        </Text>
        <Wrap mt="8">
          {[
            'compute',
            'storage',
            'networking',
            'analytics',
            'ai',
            'bigquery',
            'kubernetes',
            'monitoring',
            'databases',
            'devops',
            'scalability',
            'reliability',
            'security',
            'flexibility',
            'performance',
            'efficiency',
            'automation',
            'compliance',
            'speed',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Microsoft Azure"
        avatar="/static/images/azure.png"
        gradient={['pink.200', 'purple.500']}
      ></HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Microsoft Azure">
        <Text color="muted" fontSize="lg">
          Microsoft Azure is a comprehensive cloud platform offering a wide
          range of services for building, deploying, and managing applications
          through Microsoft's global network.
        </Text>
        <Wrap mt="8">
          {[
            'scalability',
            'integration',
            'security',
            'flexibility',
            'global-reach',
            'compliance',
            'hybrid-support',
            'analytics',
            'devops',
            'productivity',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name=" AWS"
        avatar="/static/images/aws.jpeg"
        gradient={['pink.200', 'purple.500']}
      ></HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title=" AWS">
        <Text color="muted" fontSize="lg">
          Amazon Web Services (AWS) is a leading cloud platform offering
          on-demand computing, storage, and a wide array of services to build
          and scale applications globally.
        </Text>
        <Wrap mt="8">
          {[
            'scalability',
            'security',
            'reliability',
            'flexibility',
            'global-infrastructure',
            'performance',
            'cost-efficiency',
            'ecosystem',
            'innovation',
            'automation',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Cloud-Native Honeypot Deployment <Br /> & Threat Monitoring Platform
        </Heading>
      }
      description={
        <>
          Our platform makes it easy to deploy honeypots and deception
          environments across AWS, GCP, and Azure.
          <Br />
          With a clean interface, users can simulate real attack surfaces,
          gather real-time threat intel, and respond instantly.
          <Br />
          It’s perfect for security researchers, DevSecOps teams, and cloud
          admins.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Easy Cloud Deployment',
          icon: FiCloud,
          description:
            'Quickly launch honeypots in AWS, Azure, or GCP using a simple, web-based UI powered by Terraform or Pulumi.',
          variant: 'inline',
        },
        {
          title: 'Real-Time Threat Detection',
          icon: FiActivity,
          description:
            'Get real-time alerts for suspicious activity like port scans or unauthorized access with tools like Falco and Wazuh.',
          variant: 'inline',
        },
        {
          title: 'Centralized Monitoring',
          icon: FiShield,
          description:
            'Use Grafana dashboards to track attacks, system health, and uptime across all cloud honeypots in one place.',
          variant: 'inline',
        },
        {
          title: 'Automated Incident Response',
          icon: FiLock,
          description:
            'Block IPs or shut down instances automatically when threats are detected, reducing manual intervention.',
          variant: 'inline',
        },
        {
          title: 'Cloud-Agnostic Architecture',
          icon: FiToggleLeft,
          description:
            'Seamlessly integrate with any cloud using secure OAuth or IAM-based credential management.',
          variant: 'inline',
        },
        {
          title: 'Infrastructure-as-Code',
          icon: FiTerminal,
          description:
            'Maintain consistency and scalability using infrastructure-as-code tools like Terraform or Pulumi.',
          variant: 'inline',
        },
        {
          title: 'Threat Intelligence',
          icon: FiSearch,
          description:
            'Capture attacker behavior to gather actionable threat intelligence and improve your security posture.',
          variant: 'inline',
        },
        {
          title: 'Built for Teams',
          icon: FiUserPlus,
          description:
            'Designed for effective collaboration between security teams, with user roles and shared access to critical threat data.',
          variant: 'inline',
        },
        {
          title: 'Developer Friendly',
          icon: FiCode,
          description: (
            <>
              Fully extendable via APIs and automation pipelines. Built in a{' '}
              <Link href="https://turborepo.org">Turborepo</Link> for high
              performance and flexibility.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted"></Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
