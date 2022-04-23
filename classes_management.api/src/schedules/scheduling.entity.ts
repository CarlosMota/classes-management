import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class Scheduling {
  @PrimaryColumn({ name: 'id_student' })
  @Exclude({ toPlainOnly: true })
  @ManyToOne((_type) => User, (user) => user.id, {
    eager: false,
  })
  @JoinColumn({ name: 'id_student' })
  idStudent: string;
  @PrimaryColumn({ name: 'id_professor' })
  @Exclude({ toPlainOnly: true })
  @ManyToOne((_type) => User, (user) => user.id, {
    eager: false,
  })
  @JoinColumn({ name: 'id_professor' })
  idProfessor: string;
  @PrimaryColumn({ name: 'class_date' })
  classDate: Date;
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
  })
  createAt: Date;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;
}
