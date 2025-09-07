import React, { useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { mockEmployees } from '../data/mockData';
import { Employee } from '../types';
import EmployeeModal from '../components/EmployeeModal';

export default function Employees() {
  const [employees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'view'>('add');

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === '' || employee.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(employees.map(emp => emp.department))];

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setModalMode('add');
    setModalOpen(true);
  };

  const handleViewEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setModalMode('view');
    setModalOpen(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setModalMode('edit');
    setModalOpen(true);
  };

  const handleDeleteEmployee = (employee: Employee) => {
    if (confirm(`هل أنت متأكد من حذف الموظف ${employee.firstName} ${employee.lastName}؟`)) {
      // Handle delete logic here
      console.log('Delete employee:', employee.id);
    }
  };

  return (
    <div className="space-y-6 fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة الموظفين</h1>
          <p className="text-gray-600 mt-1">عرض وإدارة بيانات الموظفين</p>
        </div>
        <button className="btn-primary flex items-center">
          <PlusIcon className="h-5 w-5 ml-2" />
          <span onClick={handleAddEmployee}>إضافة موظف جديد</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="البحث بالاسم أو رقم الموظف..."
              className="form-input pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <select
              className="form-input"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">جميع الأقسام</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Filter Button */}
          <button className="btn-secondary flex items-center justify-center">
            <FunnelIcon className="h-5 w-5 ml-2" />
            فلاتر متقدمة
          </button>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            قائمة الموظفين ({filteredEmployees.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">رقم الموظف</th>
                <th className="table-header">الاسم</th>
                <th className="table-header">البريد الإلكتروني</th>
                <th className="table-header">المنصب</th>
                <th className="table-header">القسم</th>
                <th className="table-header">المرتب</th>
                <th className="table-header">الحالة</th>
                <th className="table-header">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium text-primary-600">
                    {employee.employeeId}
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center ml-3">
                        <span className="text-sm font-medium text-primary-600">
                          {employee.firstName.charAt(0)}{employee.lastName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {employee.firstName} {employee.lastName}
                        </div>
                        <div className="text-sm text-gray-500">{employee.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell text-sm text-gray-500">
                    {employee.email}
                  </td>
                  <td className="table-cell">
                    <div className="text-sm text-gray-900">{employee.position}</div>
                  </td>
                  <td className="table-cell">
                    <div className="text-sm text-gray-900">{employee.department}</div>
                  </td>
                  <td className="table-cell">
                    <div className="text-sm font-medium text-gray-900">
                      {employee.salary.toLocaleString('ar-EG')} جنيه
                    </div>
                  </td>
                  <td className="table-cell">
                    <span className={`status-${employee.status}`}>
                      {employee.status === 'active' ? 'نشط' : 
                       employee.status === 'inactive' ? 'غير نشط' : 'منتهي الخدمة'}
                    </span>
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <button 
                        onClick={() => handleViewEmployee(employee)}
                        className="p-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditEmployee(employee)}
                        className="p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteEmployee(employee)}
                        className="p-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">لا توجد نتائج مطابقة للبحث</div>
          </div>
        )}
      </div>

      <EmployeeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        employee={selectedEmployee}
        mode={modalMode}
      />
    </div>
  );
}