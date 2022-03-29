import { Subscriber, Unsubscriber, writable } from "svelte/store";

export interface TimerStore {
  subscribe: (this: void, run: Subscriber<number>) => Unsubscriber;
  reset: () => void;
}

const innerTimerStore = writable(0);

export const timerStore: TimerStore = {
  subscribe: innerTimerStore.subscribe,
  reset: () => innerTimerStore.set(0),
};

const tick = () => {
  innerTimerStore.update((n) => n + 1);
  setTimeout(tick, 1000);
};

tick();
