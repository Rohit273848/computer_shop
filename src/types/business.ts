export interface BusinessLocation {
  landmark: string;
  street: string;
  area: string;
  city: string;
  state: string;
  pincode?: string;
  fullAddress: string;
  googleMapsUrl: string;
}

export interface BusinessContact {
  phonePrimary: string;
  phoneSecondary?: string;
  whatsappNumber: string;
  email: string;
}

export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  location: BusinessLocation;
  contact: BusinessContact;
  hours: BusinessHours;
  servicesList: string[];
}
