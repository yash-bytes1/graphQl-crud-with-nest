import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { join } from "path" ;

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    // this.client = ClientProxyFactory.create({
    //   transport: Transport.TCP,
    //   options:{
    //     host:'127.0.0.1',
    //     port: 8877
    //   }
    // })
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    })
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>("add", data);
  }
}

