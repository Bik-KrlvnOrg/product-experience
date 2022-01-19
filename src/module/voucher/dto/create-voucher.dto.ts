import { IsNotEmpty, IsOptional } from 'class-validator';

interface Customer {
  name: string;
  address: string;
}
interface Appointment {
  experienceID: string;
  locationID: string;
  timeslot: { id: string };
}
export class CreateVoucherDto {
  @IsNotEmpty()
  totalAmount: number;
  @IsNotEmpty()
  customer: Customer;
  @IsOptional()
  appointment: Appointment;
}
