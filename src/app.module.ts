import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PetsModule } from "./pets/pets.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OwnersModule } from './owners/owners.module';
import { MathService } from "./math.service";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql")
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "pets",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    PetsModule,
    OwnersModule],
  controllers: [AppController],
  providers: [AppService,MathService]
})
export class AppModule {
}
