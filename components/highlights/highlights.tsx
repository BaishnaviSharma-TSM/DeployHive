import {
  Box,
  Card,
  CardProps,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  Image,
  Text,
  useTheme,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

import { Section, SectionProps } from '#components/section'

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardProps, 'title'> {}

export const HighlightsItem: React.FC<HighlightBoxProps> = (props) => {
  const { children, title, ...rest } = props
  return (
    <GridItem
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      overflow="hidden"
      position="relative"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      {...rest}
    >
      {title && (
        <Heading fontSize="3xl" mb="8">
          {title}
        </Heading>
      )}
      {children}
    </GridItem>
  )
}

interface AvatarOnlyProps extends HighlightBoxProps {
  avatar: string
  name: string
  imageSize?: string // e.g., '100px' or '8rem'
  gradient?: [string, string]
}

export const HighlightsTestimonialItem: React.FC<AvatarOnlyProps> = ({
  name,
  avatar,
  imageSize = '200px',
  gradient = ['primary.500', 'secondary.500'],
  ...rest
}) => {
  const theme = useTheme()

  return (
    <HighlightsItem
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p="4"
      position="relative"
      {...rest}
    >
      <Box
        bgGradient={`linear(to-br, ${transparentize(
          gradient[0],
          0.8,
        )(theme)}, ${transparentize(gradient[1], 0.8)(theme)})`}
        opacity="1"
        position="absolute"
        inset="0px"
        pointerEvents="none"
        zIndex="0"
        _dark={{ opacity: 0.5, filter: 'blur(50px)' }}
      />
      <Image
        src={avatar}
        alt={name}
        borderRadius="full"
        boxSize={imageSize}
        objectFit="cover"
        zIndex="1"
      />
      <Text fontSize="xl" fontWeight="bold" mt="4" color="white" zIndex="1">
        {name}
      </Text>
    </HighlightsItem>
  )
}

export const Highlights: React.FC<SectionProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        position="relative"
      >
        {children}
      </Grid>
    </Section>
  )
}
