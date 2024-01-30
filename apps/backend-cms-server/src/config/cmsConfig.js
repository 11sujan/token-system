let config = {};
config.modules = {
  home: 'Dashboard',
  'user-management': 'User Management',
  'email-templates': 'Email Template',
  department: 'Department',
  'frontend-users': 'Frontend Users',
  configs: 'Configuration',
  'admin-logs': 'Logs'
};

config.modulePages = {
  home: {
    home: 'Home'
  },
  'payment-gateways': {
    'payment-gateways': 'Payment Gateway'
  },
  'user-management': {
    'admin-roles': 'Roles',
    admins: 'Admins'
  },
  'email-templates': { 'email-templates': 'Email Template' },
  department: { department: 'Department' },
  service: { service: 'Service' },
  'frontend-users': { 'frontend-users': 'Frontend Users' },
  configs: { configs: 'CMS Configuration' },
  'admin-logs': {
    'admin-logs': 'Admin Logs'
  }
};

config.modulePermissions = {
  home: {
    'home.analytics.view': 'View Analytics',
    'home.notification-logs.view': 'View Notification Logs'
  },
  'user-management': {
    'user-management.admin-roles.view': 'View Admin Roles',
    'user-management.admin-roles.create': 'Create Admin Roles',
    'user-management.admin-roles.edit': 'Edit Admin Roles',
    'user-management.admin-roles.delete': 'Delete Admin Roles',
    'user-management.admin-roles.add-users': 'Assign Admins',

    'user-management.admins.view': 'View Admins',
    'user-management.admins.create': 'Create Admin',
    'user-management.admins.edit': 'Edit Admin',
    'user-management.admins.delete': 'Delete Admin',
    'user-management.admins.password': 'Change Admin Password',
    'user-management.admin.update-profile': 'Edit Profile'
  },
  'email-templates': {
    'email-templates.email-templates.view': 'View Email Template',
    // "email-templates.email-templates.create": "Create Email Template",
    'email-templates.email-templates.edit': 'Edit Email Template',
    'email-templates.email-templates.delete': 'Delete Email Template'
  },
  department: {
    'department.department.view': 'View Departments',
    'department.department.create': 'Create Department',
    'department.department.edit': 'Edit Department',
    'department.department.delete': 'Delete Department'
  },
  service: {
    'service.service.view': 'View Services',
    'service.service.create': 'Create Service',
    'service.service.edit': 'Edit Service',
    'service.service.delete': 'Delete Service'
  },
  'frontend-users': {
    'frontendUser.frontendUser.view': 'View Frontend Users'
  },
  configs: {
    'configs.cms-configs.view': 'View CMS Config',
    'configs.cms-configs.edit': 'Edit CMS Config',
    'configs.app-configs.view': 'View App Config',
    'configs.app-configs.edit': 'Edit App Config',
    'configs.app-configs.sendSms': 'Resend Password SMS'
  },
  'admin-logs': {
    'admin-logs.admin-logs.view': 'View Admin Logs'
  }
};
config.moduleIcons = {
  home: 'icofont icofont-ui-home',
  'user-management': 'icofont icofont-ui-user',
  'email-templates': 'icofont icofont-ui-email',
  department: 'fa fa-building',
  'frontend-users': 'fa fa-users',
  'payment-gateways': 'fa fa-credit-card',
  merchants: 'fa fa-industry',
  transactions: 'fa fa-exchange',
  projects: 'fa fa-tasks',
  configs: 'icofont icofont-tools-alt-2',
  'admin-logs': 'fa fa-history'
};
module.exports = config;
