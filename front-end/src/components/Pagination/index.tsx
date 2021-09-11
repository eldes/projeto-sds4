import { FunctionComponent } from 'react'
import { SalesPage } from 'types/sale'

type Props = {
	page: SalesPage
	onChangePage: (pageNumber: number) => void
}

const Pagination: FunctionComponent<Props> = ({page, onChangePage}) => {

	return (
		<div className="row d-flex justify-content-center">
			<nav>
				<ul className="pagination">
					<li className={`page-item ${page.first ? 'disabled' : ''} `}>
						<button className="page-link" onClick={() => onChangePage(Math.max(page.number - 1, 0))}>Anterior</button>
					</li>
					<li className="page-item disabled">
						<span className="page-link">{page.number + 1}</span>
					</li>
					<li className={`page-item ${page.last ? 'disabled' : ''} `}>
						<button className="page-link" onClick={() => onChangePage(Math.min(page.number + 1, page.totalPages - 1))}>Próxima</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Pagination