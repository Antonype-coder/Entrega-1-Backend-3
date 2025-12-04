import express from "express";
import cors from "cors";

import mocksRouter from "./routes/mocks.router.js";
import usuariosRouter from "./routes/users.router.js";
import mascotasRouter from "./routes/pets.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/mocks", mocksRouter);
app.use("/api/users", usuariosRouter);
app.use("/api/pets", mascotasRouter);

export default app;
