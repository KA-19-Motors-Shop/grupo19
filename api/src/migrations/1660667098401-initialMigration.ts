import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1660667098401 implements MigrationInterface {
    name = 'initialMigration1660667098401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad" ADD "url" character varying array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ad" DROP COLUMN "quilometer"`);
        await queryRunner.query(`ALTER TABLE "ad" ADD "quilometer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ad" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "ad" ADD "price" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "ad" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ad" DROP COLUMN "quilometer"`);
        await queryRunner.query(`ALTER TABLE "ad" ADD "quilometer" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ad" DROP COLUMN "url"`);
    }

}
