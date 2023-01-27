const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1674850214161 {
    name = 'migration1674850214161'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`patient\` ADD UNIQUE INDEX \`IDX_2c56e61f9e1afb07f28882fceb\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`psychiatrist\` ADD UNIQUE INDEX \`IDX_8478ecbeddc5b04862e99de291\` (\`email\`)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`psychiatrist\` DROP INDEX \`IDX_8478ecbeddc5b04862e99de291\``);
        await queryRunner.query(`ALTER TABLE \`patient\` DROP INDEX \`IDX_2c56e61f9e1afb07f28882fceb\``);
    }
}
