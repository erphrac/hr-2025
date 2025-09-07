import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'السبت', present: 42, absent: 3 },
  { day: 'الأحد', present: 40, absent: 5 },
  { day: 'الاثنين', present: 45, absent: 0 },
  { day: 'الثلاثاء', present: 43, absent: 2 },
  { day: 'الأربعاء', present: 44, absent: 1 },
  { day: 'الخميس', present: 41, absent: 4 },
  { day: 'الجمعة', present: 38, absent: 7 }
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">إحصائيات الحضور الأسبوعية</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar dataKey="present" fill="#10b981" name="حاضر" radius={[4, 4, 0, 0]} />
            <Bar dataKey="absent" fill="#ef4444" name="غائب" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}