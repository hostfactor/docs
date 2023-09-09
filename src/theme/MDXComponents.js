import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import BlogImage from '@site/src/components/BlogImage';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<BlogImage>" tag to our BlogImage component
  // `BlogImage` will receive all props that were passed to `<BlogImage>` in MDX
  BlogImage,
};
