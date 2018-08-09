import {MigrationInterface, QueryRunner} from "typeorm";

export class listingCategory1533792625134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "category" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "category"`);
    }

}
