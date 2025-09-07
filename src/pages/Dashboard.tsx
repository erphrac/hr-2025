import React from 'react';
import { Users, Building2, Clock, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import RecentActivity from '../components/Dashboard/RecentActivity';
import AttendanceChart from '../components/Dashboard/AttendanceChart';
import QuickActions from '../components/Dashboard/QuickActions';
import { mockDashboardStats } from '../data/mockData';

export default function Dashboard() {
  const stats = mockDashboardStats;

  return (
    <div className="space-y-6 fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-600 mt-1">مرحباً بك في نظام إدارة الموارد البشرية</p>
        </div>
        <div className="text-sm text-gray-500">
          آخر تحديث: {new Date().toLocaleTimeString('ar-EG')}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <StatsCard
          title="إجمالي الموظفين"
          value={stats.totalEmployees}
          icon={Users}
          color="blue"
          change={{ value: 5.2, type: 'increase' }}
        />
        <StatsCard
          title="الموظفين النشطين"
          value={stats.activeEmployees}
          icon={TrendingUp}
          color="green"
          change={{ value: 2.1, type: 'increase' }}
        />
        <StatsCard
          title="الأقسام"
          value={stats.totalDepartments}
          icon={Building2}
          color="purple"
        />
        <StatsCard
          title="طلبات الإجازات المعلقة"
          value={stats.pendingLeaves}
          icon={Calendar}
          color="yellow"
          change={{ value: 1.5, type: 'decrease' }}
        />
        <StatsCard
          title="حضور اليوم"
          value={stats.todayAttendance}
          icon={Clock}
          color="indigo"
          change={{ value: 3.2, type: 'increase' }}
        />
        <StatsCard
          title="مرتبات الشهر (جنيه)"
          value={stats.monthlyPayroll}
          icon={DollarSign}
          color="red"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">إجراءات سريعة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="btn-primary text-center">
            إضافة موظف جديد
          </button>
          <button className="btn-secondary text-center">
            تسجيل حضور
          </button>
          <button className="btn-secondary text-center">
            معالجة طلب إجازة
          </button>
          <button className="btn-secondary text-center">
            إنشاء تقرير
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
}