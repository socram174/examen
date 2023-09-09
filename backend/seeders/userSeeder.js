import mongoose from "mongoose";
import User from "../models/User";

//mongoose connection

const add = async () =>{
    const user = User.create({"name":"MArcos"})
}

mongoose.connect("mongodb://localhost:27017/examen", {useNewUrlParser:true, useUnifiedTopology:true})
    .catch((error) => console.log(error.message));