export enum DeviceType {
  Phone = 'phone',
  Tablet = 'tablet',
  Laptop = 'laptop',
  Desktop = 'desktop',
}

export enum DeviceBreakpoint {
  Phone = 425,
  Tablet = 768,
  Laptop = 1024,
  LaptopL = 1440,
  Desktop = 1920,
}

export enum DeviceTypeBreakpoint {
  Phone = 'phone',
  Tablet = 'tablet',
  Laptop = 'laptop',
  LaptopL = 'laptopL',
  Desktop = 'desktop',
}

export const DeviceTypeSize: Record<DeviceType, number> = {
  [DeviceType.Phone]: DeviceBreakpoint.Phone,
  [DeviceType.Tablet]: DeviceBreakpoint.Tablet,
  [DeviceType.Laptop]: DeviceBreakpoint.LaptopL,
  [DeviceType.Desktop]: DeviceBreakpoint.Desktop,
};
