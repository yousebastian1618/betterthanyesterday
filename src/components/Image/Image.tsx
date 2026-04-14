import type { ComponentProps } from "react";
import NextImage from "next/image";

type Props = ComponentProps<typeof NextImage> & {
  containerClassName?: string;
};

export default function Image({
  containerClassName,
  className,
  ...imageProps
}: Props) {
  return (
    <div className={`image-container${containerClassName ? ` ${containerClassName}` : ""}`}>
      <NextImage className={className} {...imageProps} />
    </div>
  );
}
