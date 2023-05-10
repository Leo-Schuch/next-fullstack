import { ThemeTypographyVariants } from "@src/theme/theme"
import styled from "styled-components"
import Text from "../Text/Text"
import React, { useRef } from "react"
import {useRipple} from 'react-use-ripple'
import { StyleSheet } from "@src/theme/StyleSheet"

const StyledButton = styled(Text)<any>`
 
`
interface ButtonBase{
  href?: string;
  children: React.ReactNode
  textVariant?: ThemeTypographyVariants
  styleSheet?: StyleSheet
}

export default function ButtonBase({
  children,
  styleSheet,
  textVariant,
  href,
  ...props
}: ButtonBase){

  const ref = React.useRef()
  const isLink = Boolean(href)
  const Tag = isLink? 'a' : 'button';
  useRipple(ref)

  return(
    <StyledButton 
    ref={ref} 
    tag={Tag} 
    href={href}
    styleSheet={{
      backgroundColor: 'transparent',
      borderRadius: '10px',
      color:'inherit',
      outline: '0',
      cursor: 'pointer',
      textDecoration: 'none',
      border:'0',
      ...styleSheet
    }}
    {...props}
    >
      {children}
    </StyledButton>
  )
}
