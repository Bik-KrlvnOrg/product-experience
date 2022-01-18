import { IsNotEmpty } from 'class-validator';

export class CreateExperienceDto {
  @IsNotEmpty()
  readonly name: string;
}
