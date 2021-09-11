import axios from 'axios'
import { FunctionComponent, useEffect, useState } from 'react'
import { SalesPage } from 'types/sale'
import { formatLocalDate } from 'utils/format'
import { BASE_URL } from 'utils/requests'

const DataTable: FunctionComponent = () => {

	const [page, setPage] = useState<SalesPage>({
		last: true,
		first: true,
		totalElements: 0,
		totalPages: 0,
		number: 0,
	})

	useEffect(() => {
		axios.get(`${BASE_URL}/sales/?page=0&size=20&sort=date,desc`)
		.then(response => setPage(response.data))
	})

	return (
		<div className="table-responsive">
			<table className="table table-striped table-sm">
				<thead>
					<tr>
						<th>Data</th>
						<th>Vendedor</th>
						<th>Clientes visitados</th>
						<th>Negócios fechados</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
					{
						page.content?.map(sale => (
							<tr key={sale.id}>
								<td>{formatLocalDate(sale.date, 'dd/MM/yyyy')}</td>
								<td>{sale.seller.name}</td>
								<td>{sale.visited}</td>
								<td>{sale.deals}</td>
								<td>{sale.amount.toFixed(2)}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export default DataTable