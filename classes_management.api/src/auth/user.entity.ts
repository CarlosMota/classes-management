import { Scheduling } from 'src/schedules/scheduling.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserType } from './user-type.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 16, nullable: false })
  username: string;

  @Column({ name: 'first_name', length: 16, nullable: false })
  first_name: string;

  @Column({ name: 'last_name', length: 16, nullable: false })
  lastName: string;

  @Column({ name: 'user_type', length: 16, nullable: false })
  userType: UserType;

  @Column({ length: 255, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
  })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;

  @OneToMany((_type) => Scheduling, (scheduling) => scheduling.idProfessor, {
    eager: true,
  })
  professors: Scheduling[];

  @OneToMany((_type) => Scheduling, (scheduling) => scheduling.idStudent, {
    eager: true,
  })
  students: Scheduling[];
}
