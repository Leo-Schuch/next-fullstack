import Box from "@src/components/Box";
import theme from "@src/theme/theme";
import styled from "styled-components";



export default function HomeScreen() {
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: 'red',
          sm: 'blue',
          lg: 'yellow'
        }
      }}
      tag="main"
    >  
    </Box>
  );
}
