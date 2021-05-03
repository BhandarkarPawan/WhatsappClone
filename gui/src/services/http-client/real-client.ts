import { getJsonFromApi } from "./http-functions";
import { IService } from "../entities";
import { IHTTPClient } from "../entities";

interface IDependencies {
  /** No dependence */
}

export default class RealHTTPClient
  implements IHTTPClient, IService<IDependencies> {
  inject(services: IDependencies) {
    /** */
  }

  async ping() {
    const endpoint = `ping`;
    return await getJsonFromApi<{}>(endpoint);
  }

  async test() {
    const endpoint = ``;
    return await getJsonFromApi<string>(endpoint);
  }
}
