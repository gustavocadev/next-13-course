'use client'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const metadata = {
	title: 'Home',
	description: 'Welcome to Globomantics',
}

export default function Home() {
	return (
		<Box as="section">
			<Box position="fixed" h="100vh" w="100vw" overflow="hidden" zIndex={-1}>
				<Image
					src={'/images/home-image-1.jpg'}
					alt="Out Epic story"
					quality={100}
					placeholder="blur"
					blurDataURL={'/images/home-image-1.jpg'}
					sizes={'100vw'}
					fill
					style={{
						objectFit: 'cover',
					}}
				/>
			</Box>
			<Text fontSize="5xl" textAlign="center">
				Humble Beginnings a story of life
			</Text>
		</Box>
	)
}
