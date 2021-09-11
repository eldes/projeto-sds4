import DashboardPage from 'pages/Dashboard'
import HomePage from 'pages/Home'
import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={HomePage} />
				<Route path="/dashboard" exact={true} component={DashboardPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes