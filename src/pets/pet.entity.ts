import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "../owners/owner.entity";

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type: string;

  @Column()
  @Field()
  ownerId: number;

  @ManyToMany(() => Owner, owner => owner.pets)
  @Field(type => Owner)
  owner: Owner;
}
