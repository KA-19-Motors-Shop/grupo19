import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Gallery {
  @PrimaryColumn()
  readonly id: string;

  // @OnetoMany((type) => Ad)
  // ad_id: Ad;

  @Column()
  img_url: string;

  @Column({ nullable: true })
  type: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
