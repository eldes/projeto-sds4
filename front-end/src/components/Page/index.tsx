import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
	title: string
	children?: ReactNode
}

const Page: FunctionComponent<Props> = ({title, children}) => {
	return (
		<>
			<NavBar />
			<main className="container">
				<h1 className="text-primary">{title}</h1>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Page