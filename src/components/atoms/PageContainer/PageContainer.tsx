import { Center, VStack } from '@chakra-ui/react'
import React from 'react'
interface IPageContainer {
  children: React.ReactNode;
}
export default function PageContainer({ children }: IPageContainer) {
  return (
    <Center w="100vw" minH={{base:"100vh", md:"130vh", xxl:"100vh"}} maxH={{base:"100%", md:"130vh", xxl:"100vh"}}  bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" 
    //mt="80px"
    >
      <VStack align="center"   justify="start" h="100%" w="100vw" 
      
      //overflow="hidden"
      >
        {children}
      </VStack>
    </Center>
  )
}
