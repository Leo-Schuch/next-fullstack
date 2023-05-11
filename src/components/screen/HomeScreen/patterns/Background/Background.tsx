import Box from "@src/components/Box/Box";
import Menu from "../Menu/Menu";
import Text from "@src/components/Text/Text";

export default function Background() {
  const imageUrl = 'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80'
  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
  );
}
