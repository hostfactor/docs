import React, {ReactElement} from 'react';
import {Center, Image, ImageProps} from "@chakra-ui/react";
import useBaseUrl from "@docusaurus/useBaseUrl";


export interface BlogImageProps extends ImageProps {

}

const BlogImage: React.FC<BlogImageProps> = (props: BlogImageProps): ReactElement | null => {
  const {
    src,
    ...rest
  } = props

  return (
    <Center>
      <Image
        maxH={'35vh'}
        src={useBaseUrl(src)}
        m={'1em 0'}
        {...rest}
      />
    </Center>
  );
};

export default BlogImage
