'use client'
import { ChakraProvider } from '@chakra-ui/react'

type ProvidersProps = {
	children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
	return <ChakraProvider>{children}</ChakraProvider>
}
