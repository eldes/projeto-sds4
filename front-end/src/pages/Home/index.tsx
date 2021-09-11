import Page from 'components/Page'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const HomePage: FunctionComponent = () => {
	return (
		<Page title="DSVendas">
			<div className="container">
				<div className="jumbotron">
					<p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
					<hr/>
					<p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
					<Link to="/dashboard" className="btn btn-primary btn-large">Acessar o Dashboard</Link>
				</div>
			</div>
		</Page>
	)
}

export default HomePage