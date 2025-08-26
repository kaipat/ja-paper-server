import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

@Injectable()
export class AlsService extends AsyncLocalStorage<{
  headers: Record<string, any>;
  requestId: string;
}> {}
