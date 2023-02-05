type LayoutConferenceProps = {
	children: React.ReactNode
}

export default function LayoutConference({ children }: LayoutConferenceProps) {
	return (
		<section>
			<h2>Welcome to Globomantics</h2>
			<section>{children}</section>
		</section>
	)
}
