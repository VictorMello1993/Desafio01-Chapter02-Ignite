import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id.toString());

    if (!user) {
      throw new Error("User does not exist.");
    }

    if (!user.admin) {
      throw new Error(
        "It's not allowed to get all users list when the user is non admin"
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
