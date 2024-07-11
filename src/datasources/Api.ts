import { RESTDataSource } from 'apollo-datasource-rest';
import { PersonAPIData } from "../types";

class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.info/api/'; // Replace with the base URL of your API
  }

  async getPerson(id: string): Promise<PersonAPIData> {
    return this.get(`people/${id}`); // Replace with the correct endpoint
  }

  async getDataFromURL(url: string): Promise<any> {
    // return this.get(url.replace(this.baseURL, ''));
    const baseURL = this.baseURL ?? '';
    const relativeUrl = url.startsWith(baseURL) ? url.slice(baseURL.length) : url;
    return this.get(relativeUrl);
  }
}

export default Api;
