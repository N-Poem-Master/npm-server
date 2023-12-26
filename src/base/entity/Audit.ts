import { Column, Entity } from 'typeorm';

@Entity()
export class Audit {
  @Column()
  createdBy;

  @Column
  createdDate;
}
