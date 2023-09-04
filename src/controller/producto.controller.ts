import { Request, Response, Router } from "express";
import { AppDataSource } from "../db/data-source";
import { Producto } from "../entity";
import { DeleteResult, UpdateResult } from "typeorm";

const router: Router = Router();

AppDataSource.initialize();

router.get("/", async (req: Request, res: Response) => {
  const products: Producto[] = await AppDataSource.manager.find(Producto);
  res.send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const product: Producto = await AppDataSource.manager.findOne(Producto, {
    where: { id },
  });
  res.send(product);
});

router.post("/", async (req: Request, res: Response) => {
  const product: Producto = await AppDataSource.manager.create(
    Producto,
    req.body
  );

  AppDataSource.manager.save(product);

  res.send(product);
});

router.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  console.log(id);
  const product: UpdateResult = await AppDataSource.manager.update(
    Producto,
    id,
    req.body
  );
  //
  res.send(product);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const product: DeleteResult = await AppDataSource.manager.delete(
    Producto,
    id
  );
  //
  res.send(product);
});

export default router;
