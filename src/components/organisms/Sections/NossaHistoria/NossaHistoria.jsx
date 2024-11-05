import {
  Box,
  Card,
  GridItem,
  Heading,
  HStack,
  Image,
  position,
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
import GradientBox from "@/components/atoms/GradientBox/GradientBox";

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
      <Box>
        <SimpleGrid
          columns={{ base: 3, md: 6 }}
          m={0}
          p={0}
          gap={0}
          w="100vw"
          justifyContent="start"
          alignItems="start"
          bgColor="white"
        >
          {row1.map((img, index) => (
            <GridItem key={index} h={{ base: "100px", md: "300px" }}>
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
          // fontSize={{ base: "40px", md: "32px" }}
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
            <Box
              fontSize={{ base: "20px", md: "32px" }}
              lineHeight={{ base: "30px", md: "59px" }}
              w={{ base: "100%", md: "50%" }}
              p={{ base: 0, md: 5 }}
            >
              <Heading
                
                fontSize={{ base: "20px", md: "32px" }}
                lineHeight={{ base: "30px", md: "59px" }} mb={{base:"50px",md:"0px"}}
              >
                Começamos da mesma forma que muitas empresas, que hoje são
                sólidas, iniciaram no passado: com o sonho de mudar o status quo
                da nossa área fazendo pelos clientes algo de valor, realmente
                significativo para os seus negócios.
              </Heading>
              <Text mb={{base:"50px",md:"0px"}}>
                Em 2020, em um cenário de pandemia, extremamente desafiador para
                pessoas e empresas, nosso sócio fundador, Emir Muse, havia recém
                saído de uma sociedade que não estava alinhada com seus valores
                e o seu desejo por entregar resultados que causassem impactos
                reais para as empresas.
              </Text>
            </Box>

            <Card
              w={{ base: "100%", md: "40%" }}
              bgColor="transparent"
              p={{ base: 2, md: 5 }}
              color="hermesBlue.400"
              // boxShadow="inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(0,0,0,0.2)"
              justify="center"
              fontSize={{ base: "20px", md: "32px" }}
              lineHeight={{ base: "30px", md: "59px" }}
            >
              <Text >
                Em busca de autonomia total para ir em busca do seu propósito,
                ele decidiu abrir a{" "}
                <GradientText style={""}>Hermès</GradientText> com seu amigo e
                sócio Valmor. Em <strong>26 de novembro de 2020</strong>{" "}
                começaram as obras para a montagem do nosso escritório,
                paralelamente aos primeiros serviços prestados para clientes
                fidelizados que queriam continuar recebendo o padrão de
                atendimento superior que temos até hoje.
              </Text>
            </Card>
          </Stack>
        </Box>
        <HStack
          position="absolute"
          right={0}
          top="550px"
          justify="center"
          align="center"
          zIndex={10}
          gap={0}
        >
          <VStack justify="center" align={{base:"center",md:"end"}} position="relative" w="100vw">
            <Image
              alt=""
              display={{ base: "none", md: "block" }}
              src={tringulo.src}
              w="100px"
            />

            <Box
              position="absolute"
              top={{ base: "-160px", md: "-80px" }}
              boxShadow="4px 4px 8px white"
            >
              <GradientBox style={{ px: "5px" }}>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  color="white"
                  w="200px"
                  fontSize={{ base: "6vw", md: "2vw" }}
                >
                  O Inicio
                </Text>
              </GradientBox>
            </Box>
          </VStack>
          <Box
            display={{ base: "none", md: "block" }}
            w="40vw"
            h="10px"
                    >
            <GradientBox
              style={{ whidth: "100%", height: "100%" }}
            ></GradientBox>
          </Box>
        </HStack>
      </Box>

      <Box position="relative" w="100%" h="100%">
        <SimpleGrid
          columns={{ base: 3, md: 6 }}
          m={0}
          p={0}
          gap={0}
          w="100vw"
          justifyContent="start"
          alignItems="start"
          bgColor="white"
        >
          {row2.map((img, index) => (
            <GridItem key={index} h={{ base: "100px", md: "300px" }}>
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
          top="550px"
          justify="center"
          align="center"
          zIndex={10}
          gap={0}display={{ base: "none", md: "flex" }}
        >
          <Box w="48vw" h="10px" gap={0}>
            <GradientBox
              style={{ whidth: "100%", height: "100%" }}
            ></GradientBox>
          </Box>
          <VStack justify="center" align="center" position="relative">
            <Image alt="" src={tringulo.src} w="100px" />
            <Box position="absolute" top="-80px" boxShadow="4px 4px 8px white" display={{ base: "none", md: "block" }}>
              <GradientBox style={{ px: "5px" }}>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  color="white"
                  w="200px"
                  fontSize="2vw"
                >
                  OS 100
                </Text>
              </GradientBox>
            </Box>
          </VStack>
          <Box w="28vw" h="10px">
            <GradientBox
              style={{ whidth: "100%", height: "100%" }}
            ></GradientBox>
          </Box>

          <VStack justify="center" align="center" position="relative" display={{ base: "none", md: "block" }}>
            <Image alt="" src={tringulo.src} w="100px" />
            <Box position="absolute" top="-80px" boxShadow="4px 4px 8px white">
              <GradientBox style={{ px: "5px" }}>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  color="white"
                  w="200px"
                  fontSize="2vw"
                >
                  Hoje
                </Text>
              </GradientBox>
            </Box>
          </VStack>
          <Box w="16vw" h="10px">
            <GradientBox
              style={{ whidth: "100%", height: "100%" }}
            ></GradientBox>
          </Box>
        </HStack>
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
            my={{base:"50px",md:"100px"}}
            mx="10px"
            gap="10px"
          >
            <Box w={{ base: "100%", md: "100%" }} p={{ base: 0, md: 5 }}mb={{base:"50px",md:"0px"}}>
              <Text fontSize={{ base: "20px", md: "32px" }}
              lineHeight={{ base: "30px", md: "59px" }}>
                Como muitos empresários brasileiros – talvez você conheça ou até
                seja um deles – tínhamos o objetivo de ter um escritório moderno
                e tecnológico em que desde o primeiro dia contasse com o melhor
                sistema disponível. Começamos essa busca de forma singela, com
                dois computadores, cadeiras simples, uma impressora, duas
                pessoas e muito trabalho.
              </Text>
            </Box>
            <Box w={{ base: "100%", md: "100%" }} p={{ base: 0, md: 5 }} mb={{base:"50px",md:"0px"}}>
              <Text fontSize={{ base: "20px", md: "32px" }}
              lineHeight={{ base: "30px", md: "59px" }}>
                Dois meses depois o Gabriel se uniu à causa, e no dia 01/01/2021
                abrimos oficialmente a Hermès. Ainda no primeiro ano o
                comprometimento com o atendimento personalizado e humanizado
                para cada cliente proporcionou o marco de 100 clientes – o que
                foi muito celebrado na época e provou que estávamos no caminho
                certo.
              </Text>
            </Box>
            <Box w={{ base: "100%", md: "100%" }} p={{ base: 0, md: 5 }}>
              <Text fontSize={{ base: "20px", md: "32px" }}
              lineHeight={{ base: "30px", md: "59px" }}>
                Hoje somos formados pelos mesmos 3 sócios e por um time de
                profissionais excepcionais que representam nossos valores e
                compartilham o nosso propósito de fazer o melhor pelos clientes
                usando as melhores ferramentas tecnológicas sem perder nosso
                traço fundamental, o contato individualizado e humano.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Text
        fontSize={{base:"10vw",md:"6vw"}}
        color="hermesBlue.400"
        textAlign="justify"
        zIndex={0}
        position="absolute"
        top="175px"
      >
        <GradientText style={""}>Nossa História</GradientText>
      </Text>
    </VStack>
  );
}
