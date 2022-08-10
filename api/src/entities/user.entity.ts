import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Ad } from "./ad.entity";
import { Lances } from "./lances.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column()
  cpf: string;

  @Column()
  cel: string;

  @Column()
  birthDate: string;

  @Column()
  description: string;

  @Column()
  password: string;

  @Column()
  isBuyer: boolean;

  @Column()
  isAdvertiser: boolean;

  @OneToMany(() => Ad, (ad) => ad.id)
  ad: Ad;

  @OneToMany(() => Lances, (lances) => lances.id)
  lances: Lances;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
