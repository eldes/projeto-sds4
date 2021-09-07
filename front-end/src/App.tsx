import BarChart from 'components/BarChart'
import DataTable from 'components/DataTable'
import DonutChart from 'components/DonutChart'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { FunctionComponent } from 'react'

const App: FunctionComponent = () => {
	return (
		<>
			<NavBar />
			<main className="container">
				<h1 className="text-primary">Dashboard de Vendas</h1>
				<div className="row px-3">
					<div className="col-md-6 col-sm-12">
						<h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
						<BarChart />
					</div>
					<div className="col-md-6 col-sm-12">
						<h5 className="text-center text-secondary">Todas vendas</h5>
						<DonutChart />
					</div>
				</div>

				<div className="py-3">
					<h2 className="text-primary">Todas as vendas</h2>
				</div>
				<DataTable />
			</main>
			<Footer />
		</>
	)
}

export default App