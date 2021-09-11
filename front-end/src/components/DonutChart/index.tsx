import axios from 'axios'
import { FunctionComponent, useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale'
import { BASE_URL } from 'utils/requests'

type ChartData = {
	labels: string[]
	series: number[]
}

const DonutChart: FunctionComponent = () => {

	const [chartData, setChartData] = useState<ChartData>({
		labels: [],
		series: []
	})

	useEffect(() => {
		axios.get(`${BASE_URL}/sales/amount-by-seller`)
		.then( response => {
			const saleSums = response.data as SaleSum[]
			setChartData({
				labels: saleSums.map(saleSum => saleSum.sellerName),
				series: saleSums.map(saleSum => saleSum.sum)
			})
		})
		.catch(error => {
			console.log(error)
		})
	}, [])
	
	const options = {
		legend: {
			show: true
		}
	}

	return (
		<Chart options={{...options, labels: chartData.labels}} series={chartData.series} type="donut" height="240" />
	)
}

export default DonutChart