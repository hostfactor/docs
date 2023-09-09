import React, {ReactElement, ReactNode} from 'react';
import {Box, Button, Container, Heading, Stack, Text} from "@chakra-ui/react";

export interface HeroProps {
  title: string
  emphasis: string
  subtitle: string

  children?: ReactNode
}

export const Hero: React.FC<HeroProps> = (props: HeroProps): ReactElement | null => {
  const {
    title,
    subtitle,
    emphasis,
    children,
  } = props

  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{base: 8, md: 14}}
          py={{base: 20, md: 36}}>
          <Heading
            fontWeight={600}
            fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
            lineHeight={'110%'}>
            {title} <br/>
            <Text as={'span'} color={'brand.900'}>
              {emphasis}
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            {subtitle}
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'green'}
              bg={'brand.800'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'brand.900',
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
