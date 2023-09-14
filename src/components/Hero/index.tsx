import React, {ReactElement, ReactNode} from 'react';
import {Box, Button, Container, Heading, HStack, Link, Stack, Text} from "@chakra-ui/react";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
          <HStack
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link
              href={`${useBaseUrl('/blog')}`}
              _hover={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Button
                colorScheme={'blue'}
                bg={'brand.800'}
                _hover={{
                  bg: 'brand.900',
                }}
                size={'lg'}
              >
                Blog
              </Button>
            </Link>
          </HStack>
        </Stack>
      </Container>
    </>
  );
};
