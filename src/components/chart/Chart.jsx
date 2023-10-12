import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Tháng 1', total: 1200 },
  { name: 'Tháng 2', total: 3000 },
  { name: 'Tháng 3', total: 1002 },
  { name: 'Tháng 4', total: 900 },
  { name: 'Tháng 5', total: 500 },
  { name: 'Tháng 6', total: 3200 },
  { name: 'Tháng 7', total: 1200 },
 
];

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Chi tiêu 6 tháng qua</div>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={'100%'} height={250} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />     
        </AreaChart>                 
      </ResponsiveContainer>
    </div>
  )
}

export default Chart