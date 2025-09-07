import { Employee, Department, Attendance, LeaveRequest, Payroll, DashboardStats } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    firstName: 'أحمد',
    lastName: 'محمد علي',
    email: 'ahmed.mohamed@company.com',
    phone: '01012345678',
    nationalId: '12345678901234',
    position: 'مطور برمجيات أول',
    department: 'تكنولوجيا المعلومات',
    salary: 15000,
    hireDate: '2022-01-15',
    status: 'active',
    address: 'القاهرة، مصر الجديدة',
    emergencyContact: {
      name: 'فاطمة أحمد',
      phone: '01098765432',
      relationship: 'زوجة'
    },
    bankAccount: {
      accountNumber: '1234567890',
      bankName: 'البنك الأهلي المصري'
    }
  },
  {
    id: '2',
    employeeId: 'EMP002',
    firstName: 'سارة',
    lastName: 'حسن محمود',
    email: 'sara.hassan@company.com',
    phone: '01123456789',
    nationalId: '23456789012345',
    position: 'محاسبة أولى',
    department: 'المحاسبة',
    salary: 12000,
    hireDate: '2021-03-20',
    status: 'active',
    address: 'الجيزة، المهندسين',
    emergencyContact: {
      name: 'محمود حسن',
      phone: '01087654321',
      relationship: 'والد'
    },
    bankAccount: {
      accountNumber: '2345678901',
      bankName: 'بنك مصر'
    }
  },
  {
    id: '3',
    employeeId: 'EMP003',
    firstName: 'محمد',
    lastName: 'عبد الرحمن',
    email: 'mohamed.abdelrahman@company.com',
    phone: '01234567890',
    nationalId: '34567890123456',
    position: 'مدير مبيعات',
    department: 'المبيعات',
    salary: 18000,
    hireDate: '2020-06-10',
    status: 'active',
    address: 'الإسكندرية، سموحة',
    emergencyContact: {
      name: 'نورا محمد',
      phone: '01076543210',
      relationship: 'زوجة'
    },
    bankAccount: {
      accountNumber: '3456789012',
      bankName: 'بنك القاهرة'
    }
  }
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'تكنولوجيا المعلومات',
    description: 'قسم تطوير وصيانة الأنظمة التقنية',
    managerId: '1',
    employeeCount: 15,
    budget: 500000,
    status: 'active'
  },
  {
    id: '2',
    name: 'المحاسبة',
    description: 'قسم الشؤون المالية والمحاسبية',
    managerId: '2',
    employeeCount: 8,
    budget: 200000,
    status: 'active'
  },
  {
    id: '3',
    name: 'المبيعات',
    description: 'قسم المبيعات وخدمة العملاء',
    managerId: '3',
    employeeCount: 12,
    budget: 300000,
    status: 'active'
  },
  {
    id: '4',
    name: 'الموارد البشرية',
    description: 'قسم إدارة الموارد البشرية والتوظيف',
    employeeCount: 5,
    budget: 150000,
    status: 'active'
  }
];

export const mockAttendance: Attendance[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2024-01-15',
    checkIn: '09:00',
    checkOut: '17:30',
    status: 'present'
  },
  {
    id: '2',
    employeeId: '2',
    date: '2024-01-15',
    checkIn: '09:15',
    checkOut: '17:45',
    status: 'late'
  },
  {
    id: '3',
    employeeId: '3',
    date: '2024-01-15',
    checkIn: '08:45',
    checkOut: '17:15',
    status: 'present'
  }
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    type: 'annual',
    startDate: '2024-02-01',
    endDate: '2024-02-05',
    days: 5,
    reason: 'إجازة سنوية',
    status: 'pending'
  },
  {
    id: '2',
    employeeId: '2',
    type: 'sick',
    startDate: '2024-01-20',
    endDate: '2024-01-22',
    days: 3,
    reason: 'إجازة مرضية',
    status: 'approved',
    approvedBy: 'مدير الموارد البشرية',
    approvedDate: '2024-01-18'
  }
];

export const mockPayroll: Payroll[] = [
  {
    id: '1',
    employeeId: '1',
    month: 'يناير',
    year: 2024,
    basicSalary: 15000,
    allowances: 2000,
    deductions: 1500,
    overtime: 500,
    netSalary: 16000,
    status: 'processed'
  },
  {
    id: '2',
    employeeId: '2',
    month: 'يناير',
    year: 2024,
    basicSalary: 12000,
    allowances: 1500,
    deductions: 1200,
    overtime: 300,
    netSalary: 12600,
    status: 'processed'
  }
];

export const mockDashboardStats: DashboardStats = {
  totalEmployees: 45,
  activeEmployees: 42,
  totalDepartments: 8,
  pendingLeaves: 12,
  todayAttendance: 38,
  monthlyPayroll: 650000
};