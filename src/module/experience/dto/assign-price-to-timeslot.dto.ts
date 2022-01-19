import { IsNotEmpty } from 'class-validator';

export class AssignPriceToTimeslotDto {
  @IsNotEmpty()
  readonly name: string;
}
