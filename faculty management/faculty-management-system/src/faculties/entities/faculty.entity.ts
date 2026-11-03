import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn()
  Id: string; // string, because the sample is "23898-2880-203"

  @Column()
  Name: string;

  @Column()
  expertise: string;

  @Column({ type: 'int' })
  noOfPublication: number;
}