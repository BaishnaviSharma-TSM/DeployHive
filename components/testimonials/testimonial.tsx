import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

export interface TestimonialProps extends CardProps {
  name: string
  step: string
  description: React.ReactNode
  avatar?: string
  href?: string
  children?: React.ReactNode
}

export const Testimonial = ({
  name,
  step,
  description,
  avatar,
  href,
  children,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" p={4} shadow="md" borderRadius="xl" {...rest}   height="100%"  >
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        {/* Optionally show avatar if needed */}
        {/* {avatar && <Avatar name={name} src={avatar} size="sm" bg="gray.100" />} */}
        <Stack spacing="1" ms="4">
          <Heading size="sm" color="gray.500">
            {step}
          </Heading>
          <Heading size="md">{name}</Heading>
          <Text color="gray.400" fontSize="sm">
            {description}
          </Text>
        </Stack>
      </CardHeader>

      <CardBody mt={2}>
        {Array.isArray(children) ? (
          <Stack spacing={3} mt={2}>
            {children.map((child: any, index: number) => (
              <Flex key={index} align="start">
                <Icon as={FiCheck} color="green.500" mt={1} mr={2} />
                <Text fontSize="sm" color="gray.500">
                  {child}
                </Text>
              </Flex>
            ))}
          </Stack>
        ) : (
          <>{children}</>
        )}

        {href && (
          <Link href={href} position="absolute" top="4" right="4" isExternal>
            <FaTwitter />
          </Link>
        )}
      </CardBody>
    </Card>
  )
}
