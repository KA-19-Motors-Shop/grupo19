import { MigrationInterface, QueryRunner } from "typeorm";

export class initialmigrations1661951819808 implements MigrationInterface {
    name = 'initialmigrations1661951819808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "auction" ("id" character varying NOT NULL, "time_created" character varying NOT NULL, "time_it_finished" integer NOT NULL, "total_time" character varying NOT NULL, "initial_value" integer NOT NULL, CONSTRAINT "PK_9dc876c629273e71646cf6dfa67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lances" ("id" character varying NOT NULL, "value" integer NOT NULL, "time_of_buy" TIMESTAMP NOT NULL, "userId" uuid, "auctionId" character varying, CONSTRAINT "PK_5acb5adabe7446fbd9555a73064" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cel" character varying NOT NULL, "birthDate" character varying NOT NULL, "description" character varying NOT NULL, "password" character varying NOT NULL, "isBuyer" boolean NOT NULL, "isAdvertiser" boolean NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "cep" integer NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ad" ("id" character varying NOT NULL, "title_car" character varying NOT NULL, "type" character varying, "year" character varying NOT NULL, "quilometer" character varying NOT NULL, "price" character varying NOT NULL, "details" character varying NOT NULL, "show_ad" boolean NOT NULL, "type_vehicule" character varying NOT NULL, "url" character varying array NOT NULL, "cover_img" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_0193d5ef09746e88e9ea92c634d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lances" ADD CONSTRAINT "FK_700666ff31b16ed9b420ba35fe1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lances" ADD CONSTRAINT "FK_6b894af6ed9d70eff89a40b8622" FOREIGN KEY ("auctionId") REFERENCES "auction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ad" ADD CONSTRAINT "FK_9ef75c41971255cd79702c9048a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad" DROP CONSTRAINT "FK_9ef75c41971255cd79702c9048a"`);
        await queryRunner.query(`ALTER TABLE "lances" DROP CONSTRAINT "FK_6b894af6ed9d70eff89a40b8622"`);
        await queryRunner.query(`ALTER TABLE "lances" DROP CONSTRAINT "FK_700666ff31b16ed9b420ba35fe1"`);
        await queryRunner.query(`DROP TABLE "ad"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "lances"`);
        await queryRunner.query(`DROP TABLE "auction"`);
    }

}
