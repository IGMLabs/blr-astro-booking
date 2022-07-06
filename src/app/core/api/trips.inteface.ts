export interface Trips {
  id: string;
  agencyId: string;
  agencyTripCode?: string;
  destination: string;
  places: number;
  startDate: string;
  endDate: string;
  flightPrice: number;
  price?: number;
  stayingNightPrice?: number;
  kind?: string;
  status?: string;
  extraLuggagePricePerKilo?: number;
  premiumFoodPrice?: number;
}
