import NextLink from "next/link";
import Text from "../Text/Text";
import React, { forwardRef } from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import  { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvides";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(
  ({ href,
     children,
     colorVariant,
     styleSheet,
     colorVariantEnabled,
     ...props
       
    }: LinkProps, ref) => {
    const theme = useTheme();
    const isExternalLink = href.startsWith("http");

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover:{
        color: theme.colors[colorVariant].x400
      },
      focus:{
        color: theme.colors[colorVariant].x600
      },
    } 

    const linkProps = {
      tag: "a",
      ref,
      styleSheet: {
        textDecoration: 'none',
        ...colorVariantEnabled && {
          color: currentColorSet.color,
        },
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...colorVariantEnabled &&{
            color: currentColorSet.hover.color
          }
        },
        focus: {
          ...styleSheet?.focus,
          ...colorVariantEnabled &&{
            color: currentColorSet.focus.color
          }
        }
        },
      children,
      ...props, 
      href,
    };

    if (isExternalLink) return <Text {...{
      target: 'blank',
      ...linkProps
    }} />;

    return (
      <NextLink href={href} legacyBehavior>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true
}

export default Link;
