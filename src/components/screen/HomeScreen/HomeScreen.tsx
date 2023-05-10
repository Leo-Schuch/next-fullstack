import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvides";
import Link from "@src/components/Link/Link";


export default function HomeScreen() {

  const theme = useTheme();

  return (
    <Box 
     tag="main"
     styleSheet={{
      backgroundColor: theme.colors.positive.x400,
      flex: 1,
      alignItems: 'center',
      
    }}
     >
      <Link colorVariant="negative" href='/sobre'>
        Vá para a página Sobre
      </Link>
      <Link href='https://google.com'>
        Ir para o Google
      </Link>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="li" variant='heading1'>
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>
      <Footer/>
    </Box>
  );
}
