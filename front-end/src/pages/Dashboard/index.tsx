import BarChart from 'components/BarChart'
import DataTable from 'components/DataTable'
import DonutChart from 'components/DonutChart'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Page from 'components/Page'
import { FunctionComponent } from 'react'

const DashboardPage: FunctionComponent = () => {
	return (
		<Page title="Dashboard">
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
		</Page>
	)
}

export default DashboardPage