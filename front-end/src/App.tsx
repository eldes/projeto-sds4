import DataTable from 'components/DataTable'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { FunctionComponent } from 'react'

const App: FunctionComponent = () => {
	return (
		<>
			<NavBar />
			<main className="container">
				<h1>DSVendas</h1>
				<DataTable />
			</main>
			<Footer />
		</>
	)
}

export default App