export interface User {
  id: string;
  accountGroupId?: number;
  accountGroupName: string;
  accountType: string;
  login: string;
  firstName: string;
  lastName: string;
  position: string;
  title: string;
  email: string;
  isAccountGroupAdmin: boolean;
  hasDashboardAccess: boolean;
  hasDetailReportingAccess: boolean;
  hasInvoiceAccess: boolean;
  isActive?: boolean;
  token: string;
  IsHospice: boolean;
  isSNF: boolean;
}
