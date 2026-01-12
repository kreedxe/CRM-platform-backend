import express, {Request, Response, NextFunction} from 'express';

const app = express();

const port = 3000;

// test route
app.get("/", (req: Request, res: Response) => {
    res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

