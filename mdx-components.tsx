import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import DSC06435 from "DSC06435.jpg";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Image: (props: React.ComponentProps<typeof Image>) => (
      <Image {...props} alt={props.alt} />
    ),
    Image2: () => <Image alt={"test"} src={DSC06435} placeholder="blur" />,
    ...components,
  };
}
