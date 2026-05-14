import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Images', value: 45, color: '#fbbf24' },
  { name: 'Documents', value: 30, color: '#f59e0b' },
  { name: 'Conversations', value: 15, color: '#d97706' },
  { name: 'Others', value: 10, color: '#b45309' },
];

export default function StorageChart() {
  return (
    <div className="glass p-8 rounded-3xl">
      <h3 className="text-xl font-semibold mb-6">Storage Analytics</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={80} outerRadius={120} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <div className="w-4 h-4 rounded" style={{ background: item.color }}></div>
            <div>
              <p className="text-sm">{item.name}</p>
              <p className="font-medium">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}