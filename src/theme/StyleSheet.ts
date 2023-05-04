import { Breakpoints } from '@displaykit/responsive_styles'

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet{
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  fontWeight?: ResponsiveProperty<string> | string;
  [key: string]: any; //utilizado para aceitar qualquer string, ou seja, consigo além de criar auto complete, consigo tb criar estilos que não estão no styleSheet.. 
  //ex: {{text: 'white'}}
}
