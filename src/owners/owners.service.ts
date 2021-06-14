import { Injectable } from "@nestjs/common";
import { CreateOwnerInput } from "./dto/create-owner.input";
import { UpdateOwnerInput } from "./dto/update-owner.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Owner } from "./owner.entity";
import { Repository } from "typeorm";

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private ownerRepository: Repository<Owner>) {
  }

  create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const newPet = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newPet);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }

  findOne(id: number): Promise<Owner> {
    return this.ownerRepository.findOneOrFail(id);
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput): Promise<any> {
    await this.ownerRepository.save(updateOwnerInput);
    return true;
  }

  async remove(id: number): Promise<boolean> {
    await this.ownerRepository.delete({ id });
    return true;
  }
}
