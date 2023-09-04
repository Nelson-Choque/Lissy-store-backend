import routerController from "./controller/producto.controller";
import express, { Express, Request, Response } from "express";

(async () => {
  try {
    const app: Express = express();

    const PORT: number = 8080;

    app.listen(PORT, () => {
      console.log(
        "the port is initialited in the port: http://localhost:" + PORT
      );
    });

    app.use(express.json());

    app.use("/producto/", routerController);

    app.get("/", (req: Request, res: Response) => {
      res.send("<h2>Hello world</h2>");
    });
  } catch (error) {
    console.log("error", error);
  }
})();
