import React, { useState } from 'react';
import { PlusIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { mockDepartments } from '../data/mockData';
import { Department } from '../types';

export default function Departments() {
  const [departments] = useState<Department[]>(mockDepartments);

  return (
    <div className="space-y-6 fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة الأقسام</h1>
          <p className="text-gray-600 mt-1">عرض وإدارة أقسام الشركة</p>
        </div>
        <button className="btn-primary flex items-center">
          <PlusIcon className="h-5 w-5 ml-2" />
          إضافة قسم جديد
        </button>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div key={department.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary-50 rounded-lg">
                <BuildingOfficeIcon className="h-8 w-8 text-primary-600" />
              </div>
              <span className={`status-${department.status}`}>
                {department.status === 'active' ? 'نشط' : 'غير نشط'}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {department.name}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              {department.description}
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">عدد الموظفين:</span>
                <span className="font-medium text-gray-900">{department.employeeCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">الميزانية:</span>
                <span className="font-medium text-gray-900">
                  {department.budget.toLocaleString('ar-EG')} جنيه
                </span>
              </div>
              {department.managerId && (
                <div className="flex justify-between">
                  <span className="text-gray-500">المدير:</span>
                  <span className="font-medium text-gray-900">أحمد محمد</span>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex items-center space-x-3 space-x-reverse">
              <button className="flex-1 btn-primary text-sm">
                عرض التفاصيل
              </button>
              <button className="flex-1 btn-secondary text-sm">
                تعديل
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Department Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">إحصائيات الأقسام</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">
              {departments.length}
            </div>
            <div className="text-sm text-gray-500">إجمالي الأقسام</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {departments.filter(d => d.status === 'active').length}
            </div>
            <div className="text-sm text-gray-500">أقسام نشطة</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {departments.reduce((sum, d) => sum + d.employeeCount, 0)}
            </div>
            <div className="text-sm text-gray-500">إجمالي الموظفين</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {departments.reduce((sum, d) => sum + d.budget, 0).toLocaleString('ar-EG')}
            </div>
            <div className="text-sm text-gray-500">إجمالي الميزانيات</div>
          </div>
        </div>
      </div>
    </div>
  );
}