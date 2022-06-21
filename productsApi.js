const { options } = require ("./db/mysql")
const knex = require ("knex")(options)

const add = async (product)=>{
    try{
        await knex("products").insert(product)
    }catch(err){
        console.log(err.message)
    }
}

const getAll= async ()=>{
    try{
        let data = await knex.select("*").from("products")
        let result = Object.values(JSON.parse(JSON.stringify(data)))
        return result
    }catch(err){
        console.error(err.message)        
    }
}

module.exports={
    add,
    getAll
}
