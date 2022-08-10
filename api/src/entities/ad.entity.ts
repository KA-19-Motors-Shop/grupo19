import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity()
export class Ad {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title_car: string;

  @Column({ nullable: true })
  type: string;

  @Column()
  year: string;

  @Column()
  quilometer: number;

  @Column()
  price: number;

  @Column()
  details: string;

  @Column()
  show_ad: boolean;

  @Column()
  type_vehicule: string;

  @Column()
  cover_img: string;

  @ManyToOne(() => User, (user) => user.id, { eager: true })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
