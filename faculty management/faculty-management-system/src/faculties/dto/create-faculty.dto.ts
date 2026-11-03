import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  Id: string;

  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  expertise: string;

  @IsInt()
  noOfPublication: number;
}