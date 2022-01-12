import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public baseURL: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.baseURL).then((response: AxiosResponse): void => {
      response.data.forEach((value: K) => {
        console.log(this.deserialize(value));
        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    });
  }
}
