import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  days: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedDate: Date;
}

const mockLeaveData: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'أحمد محمد علي',
    department: 'تكنولوجيا المعلومات',
    leaveType: 'إجازة سنوية',
    startDate: new Date('2024-02-15'),
    endDate: new Date('2024-02-20'),
    days: 5,
    reason: 'إجازة عائلية',
    status: 'pending',
    appliedDate: new Date('2024-02-01')
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'فاطمة أحمد حسن',
    department: 'الموارد البشرية',
    leaveType: 'إجازة مرضية',
    startDate: new Date('2024-02-10'),
    endDate: new Date('2024-02-12'),
    days: 3,
    reason: 'إجازة مرضية',
    status: 'approved',
    appliedDate: new Date('2024-02-08')
  },
  {
    id: '3',
    employeeId: '3',
    employeeName: 'محمد عبد الله',
    department: 'المالية',
    leaveType: 'إجازة طارئة',
    startDate: new Date('2024-02-05'),
    endDate: new Date('2024-02-05'),
    days: 1,
    reason: 'ظروف طارئة',
    status: 'rejected',
    appliedDate: new Date('2024-02-04')
  }
];

export default function Leaves() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [showNewLeaveModal, setShowNewLeaveModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'موافق عليها';
      case 'rejected': return 'مرفوضة';
      case 'pending': return 'في الانتظار';
      default: return 'غير محدد';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredLeaves = filter === 'all' 
    ? mockLeaveData 
    : mockLeaveData.filter(leave => leave.status === filter);

  const pendingCount = mockLeaveData.filter(leave => leave.status === 'pending').length;
  const approvedCount = mockLeaveData.filter(leave => leave.status === 'approved').length;
  const rejectedCount = mockLeaveData.filter(leave => leave.status === 'rejected').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">طلبات الإجازات</h1>
          <p className="text-gray-600 mt-1">إدارة ومتابعة طلبات إجازات الموظفين</p>
        </div>
        
        <button 
          onClick={() => setShowNewLeaveModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          طلب إجازة جديد
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">إجمالي الطلبات</p>
              <p className="text-2xl font-bold text-blue-600">{mockLeaveData.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">في الانتظار</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">موافق عليها</p>
              <p className="text-2xl font-bold text-green-600">{approvedCount}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">مرفوضة</p>
              <p className="text-2xl font-bold text-red-600">{rejectedCount}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            جميع الطلبات
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            في الانتظار ({pendingCount})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'approved'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            موافق عليها ({approvedCount})
          </button>
          <button
            onClick={() => setFilter('rejected')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'rejected'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            مرفوضة ({rejectedCount})
          </button>
        </div>
      </div>

      {/* Leave Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLeaves.map((leave) => (
          <div key={leave.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{leave.employeeName}</h3>
                <p className="text-sm text-gray-600">{leave.department}</p>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(leave.status)}`}>
                {getStatusIcon(leave.status)}
                {getStatusText(leave.status)}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">نوع الإجازة:</span>
                <span>{leave.leaveType}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">المدة:</span>
                <span>
                  {format(leave.startDate, 'dd/MM/yyyy')} - {format(leave.endDate, 'dd/MM/yyyy')}
                  ({leave.days} أيام)
                </span>
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-medium">السبب:</span>
                <p className="mt-1">{leave.reason}</p>
              </div>

              <div className="text-xs text-gray-500">
                تم التقديم في: {format(leave.appliedDate, 'dd/MM/yyyy')}
              </div>
            </div>

            {leave.status === 'pending' && (
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                  موافقة
                </button>
                <button className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                  رفض
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredLeaves.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد طلبات إجازات</h3>
          <p className="text-gray-600">لم يتم العثور على طلبات إجازات بالفلتر المحدد</p>
        </div>
      )}
    </div>
  );
}