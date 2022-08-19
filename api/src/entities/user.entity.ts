import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Ad } from "./ad.entity";
import { Lances } from "./lances.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
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

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  cep: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  complement: string;

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
