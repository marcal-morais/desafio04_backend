import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const userExists = this.usersRepository.findByEmail(email);
    if (userExists) throw new Error("Mensagem do erro");
    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
