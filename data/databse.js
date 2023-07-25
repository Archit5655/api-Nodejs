

import mongoose from "mongoose";

export const ConnecttoDB=()=>{

    mongoose
    .connect(process.env.MONGO_URL, { dbName: "backendapi" })
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e));
}
