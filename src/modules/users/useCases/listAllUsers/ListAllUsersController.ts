import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;
    try {
      const id = <string>user_id;
      const user = this.listAllUsersUseCase.execute({ user_id: id });
      return response.status(200).json(user);
    } catch (e) {
      return response.status(400).json({ error: "Error" });
    }
  }
}

export { ListAllUsersController };
