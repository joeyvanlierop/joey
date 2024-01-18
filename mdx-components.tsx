import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Image: (props: React.ComponentProps<typeof Image>) => (
      <Image {...props} alt={props.alt} />
    ),
    ...components,
  };
}
