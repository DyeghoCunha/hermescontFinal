
'use client';
import CardParallax from "@/components/CardParallax/CardParallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import missao from "@/assets/image/missao.png"
import visao from "@/assets/image/visao.png"
import valores from "@/assets/image/valores.png"
import { Box, HStack, Text, VStack } from '@chakra-ui/react';


export default function ValoresV2() {
  const props = [
    {
      title: "nossa MISSÃO",
      description: "Nossa missão é atender às necessidades únicas de cada cliente, combinando a essência do atendimento humanizado com a precisão e agilidade proporcionadas pela tecnologia.",
      src: missao.src,
      color: "#131f45"
    },
    {
      title: "nossa VISÃO",
      description: "Ser um escritório contábil tecnológico renomado e reconhecido pela prestação de serviços de alta qualidade, por meio de um atendimento humanizado e único para cada cliente.",
      src: visao.src,
      color: "#F1AC19"
    },
    {
      title: "nossos VALORES",
      description: "RESPONSABILIDADE TRANSPARÊNCIA ÉTICA SERIEDADE RELAÇÕES GENUÍNAS",
      src: valores.src,
      color: "#ffffff"
    },

  ]

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (





    <Box ref={container} position="relative"  
   
    bgGradient="linear(180deg, rgba(242,242,243,1) 0%,rgba(242,242,243,1) 50% , rgba(241,226,194,1)100%)"
    >
      <HStack  h="100%" w="100vw" gap={0}>

        <CardParallax key={`p_${1}`} i={1} {...props[0]} progress={scrollYProgress} range={[1 * 1, 1]} targetScale={1} />
        <CardParallax key={`p_${2}`} i={1} {...props[1]} progress={scrollYProgress} range={[1 * 1, 1]} targetScale={1} />
        <CardParallax key={`p_${3}`} i={2} {...props[2]} progress={scrollYProgress} range={[1 * 1, 1]} targetScale={1} />
          
        
      </HStack>
    </Box>
  )
}