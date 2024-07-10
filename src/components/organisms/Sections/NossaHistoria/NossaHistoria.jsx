import {
  Box,
  Card,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GradientText from "@/components/atoms/GradientText/GradientText";
import img1 from "@/assets/image/row1/1.jpeg";
import img2 from "@/assets/image/row1/2.jpeg";
import img3 from "@/assets/image/row1/3.jpeg";
import img4 from "@/assets/image/row1/4.jpeg";
import img5 from "@/assets/image/row1/5.jpeg";
import img6 from "@/assets/image/row1/6.jpeg";
import img7 from "@/assets/image/row1/7.jpeg";
import img8 from "@/assets/image/row1/8.jpeg";
import img9 from "@/assets/image/row1/9.jpeg";
import img10 from "@/assets/image/row1/10.jpeg";
import img11 from "@/assets/image/row1/11.jpeg";
import img12 from "@/assets/image/row1/12.jpeg";
//import img13 from "@/assets/image/row2/13.jpeg";
import img14 from "@/assets/image/row2/14.jpeg";
import img15 from "@/assets/image/row2/15.jpeg";
import img16 from "@/assets/image/row2/16.jpeg";
//import img17 from "@/assets/image/row2/17.jpeg";
import img18 from "@/assets/image/row2/18.jpeg";
import img19 from "@/assets/image/row2/19.jpeg";
import img20 from "@/assets/image/row2/20.jpeg";
import img21 from "@/assets/image/row2/21.jpeg";
//import img22 from "@/assets/image/row2/22.jpeg";
import img23 from "@/assets/image/row2/23.jpeg";
import img24 from "@/assets/image/row2/24.jpeg";
import tringulo from "@/assets/image/triangulo.png";

const row1 = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];
const row2 = [
  img12,
  img14,
  img15,
  img16,
  img16,
  img18,
  img19,
  img20,
  img21,
  img21,
  img23,
  img24,
];

export default function NossaHistoria() {
  return (
    <VStack
      h="100%"
      w="100vw"
      position="relative"
      bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, rgba(242,242,243,0.8) 40%, rgba(242,242,243,1) 100%)"
    >
      <SimpleGrid
        columns={6}
        m={0}
        p={0}
        gap={0}
        w="100vw"
        justifyContent="start"
        alignItems="start"
        bgColor="white"
      >
        {row1.map((img, index) => (
          <GridItem key={index} h="300px">
            <Image
              alt=""
              opacity="0.8"
              m={0}
              p={0}
              objectFit="cover"
              objectPosition="center"
              w="100%"
              h="100%"
              src={img.src}
            />
          </GridItem>
        ))}
      </SimpleGrid>

      <Box
        mt={0}
        fontSize={{ base: "10px", md: "32px" }}
        color="hermesBlue.400"
        p={{ base: 2, md: 4 }}
        textAlign="justify"
        bgColor="transparent"
        backdropFilter="blur(10px)"
        //boxShadow="4px 4px 8px black"
        //bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, rgba(242,242,243,0.8) 40%, rgba(242,242,243,1) 100%)"
        // mx={{ base: 0, md: 10 }}
        zIndex={10}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          my={10}
        >
          <Box w={{ base: "100%", md: "50%" }} p={{ base: 0, md: 5 }}>
            <Heading
              mb={{ base: 2, md: 10 }}
              fontSize={{ base: "10px", md: "32px" }}
            >
              Começamos da mesma forma que muitas empresas, que hoje são
              sólidas, iniciaram no passado: com o sonho de mudar o status quo
              da nossa área fazendo pelos clientes algo de valor, realmente
              significativo para os seus negócios.
            </Heading>
            <Text fontSize={{ base: "10px", md: "32px" }}>
              Em 2020, em um cenário de pandemia, extremamente desafiador para
              pessoas e empresas, nosso sócio fundador, Emir Muse, havia recém
              saído de uma sociedade que não estava alinhada com seus valores e
              o seu desejo por entregar resultados que causassem impactos reais
              para as empresas.
            </Text>
          </Box>

          <Card
            w={{ base: "100%", md: "40%" }}
            bgColor="transparent"
            p={{ base: 2, md: 5 }}
            color="hermesBlue.400"
            boxShadow="inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(0,0,0,0.2)"
          >
            <Text fontSize={{ base: "10px", md: "32px" }}>
              Em busca de autonomia total para ir em busca do seu propósito, ele
              decidiu abrir a <GradientText style={""}>Hermès</GradientText> com
              seu amigo e sócio Valmor. Em{" "}
              <strong>26 de novembro de 2020</strong> começaram as obras para a
              montagem do nosso escritório, paralelamente aos primeiros serviços
              prestados para clientes fidelizados que queriam continuar
              recebendo o padrão de atendimento superior que temos até hoje.
            </Text>
          </Card>
        </Stack>
      </Box>
      <SimpleGrid
        columns={6}
        m={0}
        p={0}
        gap={0}
        w="100vw"
        justifyContent="start"
        alignItems="start"
        bgColor="white"
      >
        {row2.map((img, index) => (
          <GridItem key={index} h="300px">
            <Image
              alt=""
              opacity="0.8"
              m={0}
              p={0}
              objectFit="cover"
              objectPosition="center"
              w="100%"
              h="100%"
              src={img.src}
            />
          </GridItem>
        ))}
      </SimpleGrid>

      <HStack
        position="absolute"
        right={0}
        top="564px"
        justify="center"
        align="center"
        zIndex={10}
      >
        <VStack justify="center" align="center">
          <Image alt="" src={tringulo.src} w="80px" />
        </VStack>
        <Box border="6px solid yellow" w="40vw" h="2px"></Box>
      </HStack>

      <Text
        fontSize="6vw"
        color="hermesBlue.400"
        textAlign="justify"
        zIndex={0}
        position="absolute"
        top="175px"
      >
        <GradientText style={""}>Nossa História</GradientText>
      </Text>

      <Text
        fontSize={{ base: "20vw", md: "10vw" }}
        color="hermesBlue.400"
        textAlign="justify"
        zIndex={10}
      >
        <GradientText style={""}>O Início</GradientText>
      </Text>
    </VStack>
  );
}
