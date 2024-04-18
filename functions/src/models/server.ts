import express, { Application, Router } from "express";

export class Server {
  public app: Application;
  private apiPath = "/api/";
  private router: Router;

  constructor(router: Router) {
    this.app = express();
    this.router = router;

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  private middlewares(): void {
    // Lectura y parseo del body
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(this.apiPath, this.router);
  }
}
