import { Entity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity()
export class Adress {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  street: string;

  @Column({ nullable: true })
  number: number;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  complement: string;

  @OneToOne(() => User, (user) => user.id)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
