export interface Booking {
  id?: string;
  tripId: string;
  passengerName: string;
  passengers?: number;
  client?: string;
  date: string;
  luggageKilos: number;
  hasPremiumFoodPrice: boolean;
}
