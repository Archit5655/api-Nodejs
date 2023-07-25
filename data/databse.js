

import mongoose from "mongoose";

export const ConnecttoDB=()=>{

    mongoose
    .connect("mongodb://127.0.0.1:27017", { dbName: "backendapi" })
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e));
}
