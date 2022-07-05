export interface Booking {
  id: string;
  tripId: string;
  passengerName: string;
  client?: string;
  date: string;
  luggageKilos: number;
  hasPremiumFoodPrice: boolean;
}
