import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, FileText, TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

const departmentData = [
  { name: 'تكنولوجيا المعلومات', employees: 15, budget: 500000 },
  { name: 'المحاسبة', employees: 8, budget: 200000 },
  { name: 'المبيعات', employees: 12, budget: 300000 },
  { name: 'الموارد البشرية', employees: 5, budget: 150000 },
  { name: 'التسويق', employees: 10, budget: 250000 }
];

const attendanceData = [
  { month: 'يناير', attendance: 92 },
  { month: 'فبراير', attendance: 88 },
  { month: 'مارس', attendance: 95 },
  { month: 'أبريل', attendance: 90 },
  { month: 'مايو', attendance: 93 },
  { month: 'يونيو', attendance: 87 }
];

const salaryData = [
  { department: 'تكنولوجيا المعلومات', value: 450000, color: '#3B82F6' },
  { department: 'المبيعات', value: 320000, color: '#10B981' },
  { department: 'التسويق', value: 280000, color: '#F59E0B' },
  { department: 'المحاسبة', value: 200000, color: '#EF4444' },
  { department: 'الموارد البشرية', value: 150000, color: '#8B5CF6' }
];

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('overview');
  const [dateRange, setDateRange] = useState('monthly');

  const reportTypes = [
    { id: 'overview', name: 'نظرة عامة', icon: TrendingUp },
    { id: 'employees', name: 'تقرير الموظفين', icon: Users },
    { id: 'attendance', name: 'تقرير الحضور', icon: Calendar },
    { id: 'payroll', name: 'تقرير المرتبات', icon: DollarSign }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">التقارير والإحصائيات</h1>
          <p className="text-gray-600 mt-1">تقارير شاملة عن أداء الموارد البشرية</p>
        </div>
        
        <div className="flex gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="weekly">أسبوعي</option>
            <option value="monthly">شهري</option>
            <option value="quarterly">ربع سنوي</option>
            <option value="yearly">سنوي</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            تصدير PDF
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.id)}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                selectedReport === type.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <type.icon className="w-5 h-5" />
              <span className="font-medium">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overview Report */}
      {selectedReport === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">إجمالي الموظفين</p>
                  <p className="text-2xl font-bold text-blue-600">45</p>
                  <p className="text-xs text-green-600 mt-1">+5% من الشهر الماضي</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">معدل الحضور</p>
                  <p className="text-2xl font-bold text-green-600">92%</p>
                  <p className="text-xs text-green-600 mt-1">+2% من الشهر الماضي</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">إجمالي المرتبات</p>
                  <p className="text-2xl font-bold text-purple-600">1.4M</p>
                  <p className="text-xs text-red-600 mt-1">+8% من الشهر الماضي</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">طلبات الإجازات</p>
                  <p className="text-2xl font-bold text-orange-600">12</p>
                  <p className="text-xs text-orange-600 mt-1">8 معلقة</p>
                </div>
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Department Distribution */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">توزيع الموظفين حسب القسم</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="employees" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Salary Distribution */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">توزيع المرتبات حسب القسم</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salaryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {salaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value.toLocaleString()} ج.م`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Attendance Trend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">اتجاه الحضور الشهري</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Employee Report */}
      {selectedReport === 'employees' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">تقرير الموظفين المفصل</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">الموظفين الجدد</h4>
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-sm text-blue-600">هذا الشهر</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900">معدل الاستبقاء</h4>
                <p className="text-2xl font-bold text-green-600">94%</p>
                <p className="text-sm text-green-600">السنة الحالية</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-900">الموظفين المغادرين</h4>
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-sm text-red-600">هذا الشهر</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Report */}
      {selectedReport === 'attendance' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">تقرير الحضور والانصراف</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-medium text-green-900">الحضور المنتظم</h4>
              <p className="text-3xl font-bold text-green-600">85%</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center">
              <h4 className="font-medium text-yellow-900">التأخير</h4>
              <p className="text-3xl font-bold text-yellow-600">8%</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <h4 className="font-medium text-red-900">الغياب</h4>
              <p className="text-3xl font-bold text-red-600">7%</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <h4 className="font-medium text-blue-900">متوسط ساعات العمل</h4>
              <p className="text-3xl font-bold text-blue-600">8.2</p>
            </div>
          </div>
        </div>
      )}

      {/* Payroll Report */}
      {selectedReport === 'payroll' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">تقرير المرتبات</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <h4 className="font-medium text-blue-900">إجمالي المرتبات</h4>
                <p className="text-2xl font-bold text-blue-600">1.4M ج.م</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <h4 className="font-medium text-green-900">متوسط الراتب</h4>
                <p className="text-2xl font-bold text-green-600">31K ج.م</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <h4 className="font-medium text-purple-900">إجمالي البدلات</h4>
                <p className="text-2xl font-bold text-purple-600">280K ج.م</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg text-center">
                <h4 className="font-medium text-orange-900">إجمالي الخصومات</h4>
                <p className="text-2xl font-bold text-orange-600">150K ج.م</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}