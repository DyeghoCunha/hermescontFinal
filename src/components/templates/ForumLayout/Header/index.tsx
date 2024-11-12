import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer, useDisclosure } from '@chakra-ui/react';

import logo from "@/assets/image/logo.png"
import HeaderTabForum from './HeaderTabs';


function HeaderForum() {

  return (
    <HStack as='header' py={2}zIndex={1000} backgroundColor="hermesBlue.400" h="100%" boxShadow="0px 5px 10px black" borderRadius="0px 0px 20% 20%">
      <Box ml="5%" w="100px"><Image h="30px" src={logo.src} alt='Logo' /></Box>
      <HStack w="100%" h="100%"  pr="10%" justifyContent="center" alignItems="center">
        <HeaderTabForum />
      </HStack>
    </HStack>
  );
}

export default HeaderForum;
