import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Ad } from "./ad.entity";
import { Lances } from "./lances.entity";

@Entity()
export class Auction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  time_created: string;

  @Column()
  time_it_finished: number;

  @Column()
  total_time: string;

  @Column()
  initial_value: number;

  @OneToOne(() => Ad, (ad) => ad.id)
  ad: Ad;

  @OneToMany(() => Lances, (lances) => lances.id)
  lances: Lances;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
