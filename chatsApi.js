const { options } = require ("./db/sqlite3")
const knex = require ("knex")(options)

const addChat = async (chat)=>{
    try{
        await knex("chats").insert(chat)
    }catch(err){
        console.log(err)
    }
}

const getAllChats= async ()=>{
    try{
        return await knex.select("*").from("chats")
    }catch(err){
        console.log(err)        
    }
}

module.exports={
    addChat,
    getAllChats
}