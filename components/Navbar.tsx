'use client'
import { Box, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Navbar() {
	return (
		<Box as="header" bgColor="blackAlpha.500">
			<Box as="nav">
				<Box
					as="ul"
					display="flex"
					justifyContent="center"
					p={4}
					listStyleType="none"
					flexDir="column"
					alignItems="center"
					gap={4}>
					<Box as="li">
						<NextLink href="/home">
							<Link as="span" fontSize="3xl">
								Globomantics
							</Link>
						</NextLink>
					</Box>
					<Box as="li">
						<NextLink href="/blog">
							<Link as="span">Blog</Link>
						</NextLink>
					</Box>
					<Box as="li">
						<NextLink href="/settings">
							<Link as="span">Settings</Link>
						</NextLink>
					</Box>
					<Box as="li">
						<NextLink href="/conference">
							<Link as="span">Conference</Link>
						</NextLink>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
