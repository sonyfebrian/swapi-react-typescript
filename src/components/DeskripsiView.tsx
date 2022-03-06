import {
    Flex,
    View,
  } from "@adobe/react-spectrum";
 import Image from '../images'
 import P from '../images/planet.webp'




  export const DeskripsiView = () => {
  
    return (
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        padding="size-250"
        flex="1 1 auto"
      >
        <Flex
          direction="column"
          flex={1}
          height="100%"
        >
        <Image src={P} style={{ width: 1200, height: 500 }}/>
        </Flex>
      </View>
    );
  };
  