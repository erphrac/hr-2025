import React from 'react';
import { ClockIcon, UserPlusIcon, CalendarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const activities = [
  {
    id: 1,
    type: 'employee_joined',
    message: 'انضم موظف جديد: أحمد محمد علي',
    time: 'منذ ساعتين',
    icon: UserPlusIcon,
    color: 'text-green-600 bg-green-50'
  },
  {
    id: 2,
    type: 'leave_request',
    message: 'طلب إجازة جديد من سارة حسن',
    time: 'منذ 4 ساعات',
    icon: CalendarIcon,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    id: 3,
    type: 'payroll_processed',
    message: 'تم معالجة كشوف مرتبات شهر يناير',
    time: 'منذ يوم واحد',
    icon: CurrencyDollarIcon,
    color: 'text-purple-600 bg-purple-50'
  },
  {
    id: 4,
    type: 'attendance',
    message: 'تم تسجيل حضور 38 موظف اليوم',
    time: 'منذ يومين',
    icon: ClockIcon,
    color: 'text-indigo-600 bg-indigo-50'
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">النشاطات الأخيرة</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 space-x-reverse">
            <div className={`p-2 rounded-lg ${activity.color}`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="w-full text-center text-sm font-medium text-primary-600 hover:text-primary-700 py-2">
          عرض جميع النشاطات
        </button>
      </div>
    </div>
  );
}