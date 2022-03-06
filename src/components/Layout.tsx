import {
  Content,
  Flex,
  Grid,
  Heading,
  View,
} from "@adobe/react-spectrum";
import { DeskripsiView } from "./DeskripsiView";
import { PlanetList } from "./PlanetList";


export const UserInterface = () => (

    <Grid
      areas={["header  header", "sidebar content", "footer  footer"]}
      columns={["1fr", "3fr"]}
      rows={["size-1000", "1fr", "size-1000"]}
      gap="size-100"
      minHeight="100vh"
      maxHeight="100vh"
    >
      <View gridArea="header" marginTop="size-250" marginStart="size-500">
        <Flex gap="size-500">
  
        </Flex>
      </View>
      <View gridArea="sidebar" overflow="hidden" marginStart="size-500">
        <Flex direction="column" height="100%">
          <Heading>List Planet</Heading>
           <PlanetList />
        </Flex>
      </View>
      <Content gridArea="content" marginEnd="size-500">
        <Flex direction="column" height="100%">
          <DeskripsiView />
        </Flex>
      </Content>
    </Grid>

);