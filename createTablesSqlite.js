const { options } = require("./db/sqlite3")
const knex = require("knex")(options)

knex.schema.createTable("chats",(table) => {
    table.increments("id"),
    table.string("usuario"),
    table.string("mensaje"),
    table.string("fecha")
})
    .then(() => console.log("table created"))
    .catch((err) => { console.log(err.message) })
    .finally(() => knex.destroy())