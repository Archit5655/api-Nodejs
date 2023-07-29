import { app } from "./app.js";
import {ConnecttoDB} from "./data/databse.js"

ConnecttoDB();



app.listen(process.env.PORT, () => {
    console.log(`server is working on port ${process.env.PORT} and is in ${process.env.NODE_ENV}  mode`);
  })