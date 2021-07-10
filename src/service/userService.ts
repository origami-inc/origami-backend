import { Service } from "typedi";
import { User } from "../entity/User";
import { CreateUserInput, UpdateUserInput } from "../schema/user";

@Service()
export class UserService {
  getOne = async (id: string): Promise<User | undefined> => {
    return await User.findOne({ where: { id } });
  };

  getAll = async (): Promise<User[]> => {
    return await User.find();
  };

  create = async (createUserInput: CreateUserInput): Promise<User> => {
    return await User.create(createUserInput).save();
  };

  update = async (
    id: string,
    updateUserInput: UpdateUserInput
  ): Promise<User> => {
    const userFound = await User.findOne({ where: { id } });

    if (!userFound) {
      throw new Error(`The user with id: ${id} does not exist!`);
    }

    Object.assign(userFound, updateUserInput);
    const updatedUser = await userFound.save();

    return updatedUser;
  };

  delete = async (id: string): Promise<boolean> => {
    const userFound = await User.findOne({ where: { id } });

    if (!userFound) {
      throw new Error(`The user with id: ${id} does not exist!`);
    }

    await userFound.remove();

    return true;
  };
}
