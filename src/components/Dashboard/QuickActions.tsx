import React from 'react';
import { Plus, UserPlus, Calendar, FileText, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      name: 'إضافة موظف جديد',
      description: 'تسجيل موظف جديد في النظام',
      icon: UserPlus,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => navigate('/employees')
    },
    {
      name: 'طلب إجازة',
      description: 'تقديم طلب إجازة جديد',
      icon: Calendar,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => navigate('/leaves')
    },
    {
      name: 'تسجيل الحضور',
      description: 'تسجيل حضور وانصراف الموظفين',
      icon: Clock,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => navigate('/attendance')
    },
    {
      name: 'كشف مرتب',
      description: 'عرض وإدارة كشوف المرتبات',
      icon: DollarSign,
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => navigate('/payroll')
    },
    {
      name: 'تقرير جديد',
      description: 'إنشاء تقرير مخصص',
      icon: FileText,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      onClick: () => {}
    },
    {
      name: 'إضافة قسم',
      description: 'إنشاء قسم جديد',
      icon: Plus,
      color: 'bg-teal-500 hover:bg-teal-600',
      onClick: () => navigate('/departments')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">الإجراءات السريعة</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={action.onClick}
            className={`${action.color} text-white p-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg group`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                <action.icon className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h3 className="font-medium text-sm">{action.name}</h3>
                <p className="text-xs opacity-90 mt-1">{action.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}