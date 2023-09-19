interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Chef',
    'Waiter',
    'Customer',
    'Wait Staff',
    'Restaurant Manager',
    'Restaurant Owner',
    'Back Office',
  ],
  tenantName: 'Organization',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View menus', 'View special offers', 'Give feedback', 'Make reservations'],
  ownerAbilities: [
    'Manage ingredient inventory',
    'Manage payment history',
    'Manage special offers',
    'Manage customer feedback',
    'Manage employees',
    'Manage menu items',
    'Manage users',
    'Manage organization',
    'Manage menus',
    'Manage tables',
    'Manage reservations',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b2773d14-e163-42e6-95a7-2ae4394697c4',
};
