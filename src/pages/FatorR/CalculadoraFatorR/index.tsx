import PageContainer from '@/components/atoms/PageContainer/PageContainer'
import React, { useEffect, useState } from 'react'
import CalculaFatorR from '../components/CalculaFatorR/CalculaFatorR'
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader/Preloader';
import PreloaderComponent from '@/components/PreloaderComponent/PreloaderComponent';
import { ForumLayout } from '@/components/templates/ForumLayout';
import { Box } from '@chakra-ui/react';

export default function CalculadoraFatorR() {



  return (
    <>
      <PreloaderComponent />
      
      <PageContainer>
        <Box mt="150px">
        <CalculaFatorR />
        </Box>
      </PageContainer>
     
    </>
  )
}
CalculadoraFatorR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};