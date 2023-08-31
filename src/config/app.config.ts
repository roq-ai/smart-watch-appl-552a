interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member', 'Administrator'],
  tenantName: 'Manufacturer',
  applicationName: 'Smart Watch Application v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View all watches',
    'View health check details of a watch',
    'View Bluetooth connectivity details of a watch',
  ],
  ownerAbilities: ['Manage Manufacturers', 'Invite Team Members and Administrators'],
};
