import axios from 'axios'
import { FunctionComponent, useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale'
import { round } from 'utils/format'
import { BASE_URL } from 'utils/requests'

const BarChart: FunctionComponent = () => {

	type SeriesData = {
		name: string
		data: number[]
	}

	type ChartData = {
		labels: {
			categories: string[]
		},
		series: SeriesData[]
	}

	const [chartData, setChartData] = useState<ChartData>({
		labels: {
			categories: []
		},
		series: [
			{
				name: '',
				data: []
			}
		]
	})

	useEffect(() => {
		axios.get(`${BASE_URL}/sales/success-by-seller`)
		.then(response => {
			const saleSuccesses = response.data as SaleSuccess[]
			setChartData({
				labels: {
					categories: saleSuccesses.map(saleSuccess => saleSuccess.sellerName)
				},
				series: [
				{		
					name: '% sucesso',
					data: saleSuccesses.map(saleSuccess => round(100.0 * saleSuccess.deals / saleSuccess.visited, 1))
				}
			]
			})
		})
	})

	const options = {
		plotOptions: {
			bar: {
				horizontal: true,
			}
		},
	}
	
	return (
		<Chart options={{...options, xaxis: chartData.labels}} series={chartData.series} type="bar" height="240" />
	)
}

export default BarChart