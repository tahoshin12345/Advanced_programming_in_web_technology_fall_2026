import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  createFaculty(@Body() dto: CreateFacultyDto) {
    return this.facultiesService.createFaculty(dto);
  }
}