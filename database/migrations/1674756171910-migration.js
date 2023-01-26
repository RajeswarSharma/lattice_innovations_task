const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1674756171910 {
    name = 'migration1674756171910'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`hospital\` (\`hospital_id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`hospital_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`patient\` (\`patient_id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NULL, \`photo\` varchar(255) NOT NULL, \`password\` varchar(255) NULL, \`psychiatrist_id\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_03fd66c0ad9c7b29e11e307ec5\` (\`mobile\`), PRIMARY KEY (\`patient_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`psychiatrist\` (\`psychiatrist_id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NULL, \`photo\` varchar(255) NOT NULL, \`password\` varchar(255) NULL, \`hospital_id\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_b903138789bbc08ccb5bb47a74\` (\`mobile\`), PRIMARY KEY (\`psychiatrist_id\`)) ENGINE=InnoDB`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_b903138789bbc08ccb5bb47a74\` ON \`psychiatrist\``);
        await queryRunner.query(`DROP TABLE \`psychiatrist\``);
        await queryRunner.query(`DROP INDEX \`IDX_03fd66c0ad9c7b29e11e307ec5\` ON \`patient\``);
        await queryRunner.query(`DROP TABLE \`patient\``);
        await queryRunner.query(`DROP TABLE \`hospital\``);
    }
}
