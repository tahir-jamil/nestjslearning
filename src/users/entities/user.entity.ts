import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, BaseEntity, BeforeInsert } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  resetCounters() {
    this.firstName = 'tahir name updated from after insert';
  }

  constructor(props) {
    super();
    Object.assign(this, props);
  }
}



