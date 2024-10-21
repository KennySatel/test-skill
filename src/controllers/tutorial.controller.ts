import { Request, Response } from "express";
import add from "../lib/add";


export default class TutorialController {

  async findAll(res: Response, req: Request) {
    console.debug(`TutorialController-> findAll`)
    try {
      //TODO

      res.status(201).send({
        status: "OK",
        datas: tutorials
      });
    } catch (err) {
      res.status(500).send({
        status: "KO",
        message: `Internal Server Error! ${err}`
      });
    }
  }

  async create(res: Response, req: Request) {
    try {
      console.debug(`TutorialController-> create`)
      const tutorials = req.app.get('db').tutorials;
      //FIXME
      if (!tutorials) new Error(`Error database : La table tutorials n'exixte pas`);
      //TODO

      res.status(200).send({
        status: "OK",
        datas: tuto
      });
    } catch (err) {
      res.status(500).send({
        status: "KO",
        message: `Internal Server Error! ${err}`
      });
    }
  }

  async findById(res: Response, req: Request) {
    try {
      console.debug(`TutorialController-> findById`)
      const tutorials = req.app.get('db').tutorials;
      //FIXME
      if (!tutorials) new Error(`Error database : La table tutorials n'exixte pas`);

      //TODO
      if (result) {
        res.status(200).send({
          message: "OK",
          data: result
        });
      } else {
        //FIXME
        new Error(`Error tutorial : Internal Server Error! (${result}) `);
      }

    } catch (err) {
      res.status(500).send({
        status: "KO",
        message: `Internal Server Error! ${err}`
      });
    }
  }

  async addStock(res: Response, req: Request) {
    try {
      console.debug(`TutorialController-> AddColumn`)
      const tutorials = req.app.get('db').tutorials;
      //FIXME
      if (!tutorials) new Error(`Error database : La table tutorials n'exixte pas`);
      await Promise.all(
        tutorials.map((el: any) => add(el))
      );
      res.status(200).send({
        message: "OK",
        data: tutorials
      });

    } catch (err) {
      res.status(500).send({
        status: "KO",
        message: `Internal Server Error! ${err}`
      });
    }
  }

  async update(res: Response, req: Request) {
    try {
      //TODO

      res.status(200).send({
        message: "OK",
      });
    } catch (err) {
      res.status(500).send({
        status: "KO",
        message: `Internal Server Error! ${err}`
      });
    }
  }

  async delete(res: Response, req: Request) {
    try {
      //TODO

      res.status(200).send({
        message: "OK",
      });
    } catch (err) {
      res.status(500).send({
        status: "KO",
        message: `Internal Server Error! ${err}`
      });
    }
  }

}
