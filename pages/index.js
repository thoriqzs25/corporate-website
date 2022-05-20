import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/navigation/Layout'
import Slider from '../components/slider/slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Company Name</title>
      </Head>
      <video autoPlay loop muted className={styles.background}>
        <source src="https://res.cloudinary.com/thoriqzs/video/upload/v1652838877/realbg_a6tct2.mp4" type='video/mp4' />
        <source src="https://res.cloudinary.com/thoriqzs/video/upload/v1652835495/backgroundvid_m7rhov.mp4" type='video/mp4' />
        <source src="https://res.cloudinary.com/thoriqzs/video/upload/v1652835526/backgroundvid_taksvl.webm" type='video/webm' />
      </video>
      <Flex
        alignItems="end"
        // opacity="0.6"
        // bg="green.200"
        // harus di set manual sesuai tinggi backgroundnya!
        h="38.5rem"
        w="27rem"
        color="white"
        fontWeight="bold"
        fontSize="3em"
        ml="5rem"
        pb="8rem"
      >
        LOREM IPSUM DOLOR SIT
      </Flex>
      <Box bg={{ph: "green",ds: "red"}} h={"70rem"} w="full">
        <Slider />
      </Box>
    </Layout>
  )
}
