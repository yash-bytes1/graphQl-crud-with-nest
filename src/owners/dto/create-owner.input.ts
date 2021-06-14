import { InputType, Int, Field } from '@nestjs/graphql';
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "../../pets/pet.entity";

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string;
}
