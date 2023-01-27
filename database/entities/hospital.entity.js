const { EntitySchema } = require("typeorm");
const { RELATION_HOSPITAL } = require("../../constants");
module.exports = new EntitySchema({
  name: RELATION_HOSPITAL,
  tableName: RELATION_HOSPITAL,
  columns: {
    hospital_id: {
      primary: true,
      generated: true,
      type: "int",
    },
    name: {
      type: "varchar",
    },
    email:{
      type:"varchar",
      unique:true
    },
    password:{
      type:"varchar"
    },
    created_at: {
      type: "timestamp",
      createDate: true,
    },
    updated_at: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
