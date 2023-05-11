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
      backgroundColor: theme.colors.neutral.x050,
      flex: 1,
      alignItems: 'center',
      
    }}
     >
      
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
      </Feed>
      <Footer/>
     
      {/* 
      
        
        <Text tag="li" variant='heading1'>
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>
       */}
       
    </Box>
  );
}
