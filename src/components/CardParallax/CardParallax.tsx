'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Box, Card, Flex, Heading, HStack, Text, Image as ClientImg, UnorderedList, ListItem, VStack } from '@chakra-ui/react';
import Triangulo from "@/assets/image/triangulo.png"
import HermesCharacter from '../TextOpacityScroll/HermesCharacter/HermesCharacter';

const MotionCard = motion(Box)
const MotionBox = motion(Box)

interface ICardParallax {
  i: any;
  title: any;
  description: string;
  src: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
}



const CardParallax = ({ i, title, description, src, color }: ICardParallax) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })



  const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1])
  //const scale = useTransform(progress, range, [1.3, targetScale]);

  return (
    <Box
      h="100vh"
      w={{ base: "100%", md: "100%" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      ref={container} >
      <MotionCard
        bgImage={src}
        backgroundSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        height={{ base: "100%", md: "100%" }}
        width={{ base: "100%", md: "100%" }}

      >
        <HStack color="white" position="relative" w="100%" mt={{ base: "50px", md: "200px" }} pl={{base:"0px",md:"100px"}} >
          <ClientImg h={{ base: "30px", md: "120px" }} m={{ base: "8px", md: "0" }} src={Triangulo.src} />
          <Box position="absolute" top={{ base: "-10px", md: "2.5vh", lg: "20px" }} left={{ base: 10, md: "230px" }} >
            <HermesCharacter colorProp={"white"} fontSize={{ base: "35px", md: "45px", xxl: "50px" }} paragraph={title} />
          </Box>
        </HStack>

        <Box px={{ base: "5%", xl: "20%", xxl: "25%" }} mt="100px" color="white">

          <Text fontSize={{ base: "25px", md: "30px" }} display={i === 2 ? "none" : "block"}>
            <Box as="span" fontSize={{ base: "50px", md: "48px" }} fontFamily="Title" >
              {description.charAt(0)}
            </Box>
            {description.slice(1)}
          </Text>

          <VStack color="white" display={i === 2 ? "block" : "none"} fontSize={{ base: "25px", md: "30px" }} mt={{ base: "5px", md: "50px", xxl: "55px" }} >
            <Text color="white">● RESPONSABILIDADE </Text>
            <Text color="white">● TRANSPARÊNCIA</Text>
            <Text color="white">● ÉTICA</Text>
            <Text color="white">● SERIEDADE</Text>
            <Text color="white">● RELAÇÕES GENUÍNAS</Text>
          </VStack>

        </Box>
      </MotionCard>
    </Box>
  )
}

export default CardParallax