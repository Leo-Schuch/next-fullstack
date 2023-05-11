import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvides";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps{
  children: React.ReactNode
  styleSheet?: StyleSheet
  fullWidth?: boolean
  colorVariant?: ColorVariant
  variant?: Variant
  size?: ButtonSize
}
export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  size
  }: ButtonProps){
    const theme = useTheme()
  return(
    <ButtonBase styleSheet={{
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      ...colorVariantBy(theme, colorVariant, variant),
      ...buttonSize[size],
      ...(fullWidth && {
        alignSelf: 'initial',
      }),
      ...styleSheet
    }}>
      {children}
    </ButtonBase>
  )
}

Button.defaultProps = {
  fullWidth: false,
  size: 'xs',
  variant: 'contained',
  colorVariant: 'primary'
}

Button.Base = ButtonBase;
