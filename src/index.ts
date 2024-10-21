import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import { db } from "./db";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //app.set('db', db);
  }
}
