import { Observer } from "@entities/observer";
import type { Event, Callback } from "@entities/observer";

type ObserverMap = {
  [key: Event]: Callback;
};
type EventOf<T> = keyof T & Event;

export class ObserverFactory<K extends ObserverMap> {
  public CreateObserver<A extends EventOf<K>>(event: A, callback: K[A]) {
    const observer = new Observer<A, K[A]>(event, callback);

    return observer;
  }
}
