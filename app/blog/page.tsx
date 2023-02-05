import Link from 'next/link'

export const metadata = {
	title: 'Blog',
	description: 'Welcome to Globomantics',
}

export default function Blog() {
	return (
		<section>
			<h3>Blog</h3>
			<Link href="/">Home</Link>
		</section>
	)
}
