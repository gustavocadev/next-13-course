import Navbar from '~/components/Navbar'
import Providers from './providers'

type RootLayoutProps = {
	children: React.ReactNode
}
export const metadata = {
	title: 'Globomantics',
	description: 'Welcome to Globomantics',
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			{/* <head /> */}
			<body>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	)
}
