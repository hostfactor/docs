import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Hero} from "@site/src/components/Hero";
import {Button, ChakraProvider, extendTheme, ThemeConfig} from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#4f6ac6',
    800: '#3d5abc',
    700: '#3a55b2',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({colors, config})

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;

  return (
    <ChakraProvider theme={theme}>
      <Layout
        title={siteConfig?.title}
        description={siteConfig?.tagline}
        wrapperClassName='es-footer-white'
      >
        <Hero
          title='Host Factor info'
          emphasis={'Updates and docs for hostfactor.io'}
          subtitle={'All updates and docs for the website will be posted here as well as our Discord.'}
        >
          <Button>Blog</Button>
        </Hero>

      </Layout>
    </ChakraProvider>
  );
}
