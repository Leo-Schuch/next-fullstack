import NextLink from "next/link";
import Text from "../Text/Text";
import React, { forwardRef } from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
}

const Link = React.forwardRef(
  ({ href, children, ...props }: LinkProps, ref) => {
    const isExternalLink = href.startsWith("http");

    const linkProps = {
      tag: "a",
      ref,
      children,
      ...props, 
      href,
    };

    if (isExternalLink) return <Text {...linkProps} />;

    return (
      <NextLink href={href} legacyBehavior>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

export default Link;
