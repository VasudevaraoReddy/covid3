import {Component} from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  BarChart,
  Bar,
} from 'recharts'
import './index.css'

const data = [
  {date: '23-02-2017', count: 200},
  {date: '24-02-2017', count: 400},
  {date: '23-02-2017', count: 100},
  {date: '23-02-2017', count: 200},
  {date: '24-02-2017', count: 300},
  {date: '23-02-2017', count: 200},
  {date: '24-02-2017', count: 400},
  {date: '23-02-2017', count: 600},
]

class LineChartItem extends Component {
  componentDidMount() {
    this.getCovidTimeLineDetails()
  }

  getCovidTimeLineDetails = async () => {
    const {sName} = this.props
    const response = await fetch(
      `https://apis.ccbp.in/covid19-timelines-data/${sName}`,
    )
    const data1 = await response.json()
    console.log(data1[`${sName}`].dates)
  }

  render() {
    return (
      <div>
        <h1>Line Chart</h1>
        <div className="App">
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
            className="t"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    )
  }
}

export default LineChartItem
