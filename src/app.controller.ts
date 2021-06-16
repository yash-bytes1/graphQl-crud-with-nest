import { Controller, Post, Body, OnModuleInit } from "@nestjs/common";
import { AppService } from "./app.service";
import { MathService } from "./math.service";
import { ClientGrpc, Client, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { IGrpcService } from "./grpc.interface";
import { join } from "path";

@Controller()
export class AppController {
  //implements OnModuleInit

  // @Client({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: "app",
  //     protoPath: join(__dirname, "../src/app.proto")
  //   }
  // })
  // private client: ClientGrpc;
  // private grpcService: IGrpcService;

  constructor(private readonly appService: AppService,
              private readonly mathService: MathService
  ) {  }

  // onModuleInit() {
  //   this.grpcService = this.client.getService<IGrpcService>('AppController')
  // }

  @Post("add")
  async accumulate(@Body("data") data: number[]) {
    // return this.mathService.accumulate({ data });
    return this.mathService.accumulate(data);
  }
}
