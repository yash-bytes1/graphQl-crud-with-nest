import { Injectable } from "@nestjs/common";
import { Pet } from "./pet.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Args } from "@nestjs/graphql";
import { CreatePetInput } from "./dto/create-pet.input";
import { OwnersService } from "../owners/owners.service";
import { Owner } from "../owners/owner.entity";

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>, private ownerService: OwnersService) {
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput);
    return this.petRepository.save(newPet);
  }

  async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOneOrFail(id);
  }

  async getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId)
  }
}
