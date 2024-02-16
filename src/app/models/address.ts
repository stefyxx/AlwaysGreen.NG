export interface Address {
    id: number;
    streetName: string;
    streetNumber: string;
    apartment: string | null;
    unit: string | null;
    unitNumber: string | null;
    city: string;
    zipCode: string;
    country: string;
}
