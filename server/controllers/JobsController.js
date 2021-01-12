import BaseController from "../utils/BaseController"
import {jobsService} from "../services/JobsService"


export class JobsController extends BaseController{
  constructor(){
    super('api/jobs')
    this.router
      .get("", this.getAll)
      .get("/:jobsId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      
  }

  
  async getAll(req, res, next) {
    try {
      res.send(await jobsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  
  async getOne(req,res,next) {
    try {
      res.send(await jobsService.getOne(req.params.carId))
    } catch (error) {
      next(error)
    }
  }

  async create(req,res,next) {
  try {
    res.send(await jobsService.create(req.body))
  } catch (error) {
    next(error)
  }
  }
  
  async edit(req,res,next) {
    try {
      res.send(await jobsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req,res,next) {
    try {
      res.send(await jobsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}
