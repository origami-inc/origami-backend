import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Service } from "typedi";
import { CreateUserInput, UpdateUserInput, User } from "../schema/user";
import { UserService } from "../service/userService";

@Service()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Arg("id") id: string) {
    return await this.userService.getOne(id);
  }

  @Query(() => [User])
  async users() {
    return await this.userService.getAll();
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    return await this.userService.create(data);
  }

  @Mutation(() => User)
  async updateUser(@Arg("id") id: string, @Arg("data") data: UpdateUserInput) {
    return await this.userService.update(id, data);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string) {
    return await this.userService.delete(id);
  }
}
