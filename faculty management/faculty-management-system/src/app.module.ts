import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Pastabasta@12345',
      database: 'faculty_management_system',
      autoLoadEntities: true,
      synchronize: true, // auto-creates the table (development only)
    }),
    FacultiesModule,
  ],
})
export class AppModule {}