import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";
import { Auction } from "./auction.entity";

@Entity()
export class Lances {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  value: number;

  @Column()
  time_of_buy: Date;

  @ManyToOne(() => User, (user) => user.id, { eager: true })
  user: User;

  @ManyToOne(() => Auction, (auction) => auction.id, { eager: true })
  auction: Auction;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
