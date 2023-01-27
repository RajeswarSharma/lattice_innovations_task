const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1674800318794 {
    name = 'migration1674800318794'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`hospital\` ADD \`password\` varchar(255) NOT NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`hospital\` DROP COLUMN \`password\``);
    }
}
