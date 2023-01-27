const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1674800137086 {
    name = 'migration1674800137086'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`hospital\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hospital\` ADD UNIQUE INDEX \`IDX_4644586801989134e9a0939f63\` (\`email\`)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`hospital\` DROP INDEX \`IDX_4644586801989134e9a0939f63\``);
        await queryRunner.query(`ALTER TABLE \`hospital\` DROP COLUMN \`email\``);
    }
}
