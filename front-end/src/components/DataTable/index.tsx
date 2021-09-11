import axios from 'axios'
import Pagination from 'components/Pagination'
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

	const [activePageNumer, setActivePageNumber] = useState<number>(0)

	const handleChangePage = (pageNumber: number) => {
		setActivePageNumber(pageNumber)
	}

	useEffect(() => {
		axios.get(`${BASE_URL}/sales/?page=${activePageNumer}&size=20&sort=date,desc`)
		.then(response => setPage(response.data))
	}, [activePageNumer])

	return (
		<>
			<Pagination page={page} onChangePage={handleChangePage} />
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
		</>
	)
}

export default DataTable