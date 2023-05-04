import Box from "@src/components/Box";
import theme from "@src/theme/theme";

export default function HomeScreen() {
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: "red",
          sm: "blue",
          lg: "yellow",
        },
        fontWeight: theme.typography.fontWeight,
      }}
      tag="main"
    >
      <p>oi</p>
    </Box>
  );
}
