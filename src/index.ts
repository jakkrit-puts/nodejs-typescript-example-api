import express, { Request, Response, Application } from "express";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript");
});

app.listen(PORT, (): void => {
  console.log(`Server Running : https://localhost:${PORT}`);
});
