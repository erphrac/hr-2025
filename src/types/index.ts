export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationalId: string;
  position: string;
  department: string;
  salary: number;
  hireDate: string;
  status: 'active' | 'inactive' | 'terminated';
  avatar?: string;
  address: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  bankAccount: {
    accountNumber: string;
    bankName: string;
  };
}

export interface Department {
  id: string;
  name: string;
  description: string;
  managerId?: string;
  employeeCount: number;
  budget: number;
  status: 'active' | 'inactive';
}

export interface Attendance {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: 'present' | 'absent' | 'late' | 'half-day';
  notes?: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  type: 'annual' | 'sick' | 'emergency' | 'maternity' | 'paternity';
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approvedDate?: string;
  notes?: string;
}

export interface Payroll {
  id: string;
  employeeId: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  overtime: number;
  netSalary: number;
  status: 'draft' | 'processed' | 'paid';
  payDate?: string;
}

export interface Performance {
  id: string;
  employeeId: string;
  reviewPeriod: string;
  goals: string[];
  achievements: string[];
  rating: number;
  feedback: string;
  reviewerId: string;
  reviewDate: string;
  status: 'draft' | 'completed';
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'hr' | 'manager' | 'employee';
  permissions: string[];
  lastLogin?: string;
}

export interface DashboardStats {
  totalEmployees: number;
  activeEmployees: number;
  totalDepartments: number;
  pendingLeaves: number;
  todayAttendance: number;
  monthlyPayroll: number;
}