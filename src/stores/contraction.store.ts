import { Subscriber, Unsubscriber, Writable, writable } from "svelte/store";

export interface Contraction {
  startTime: Date;
  endTime: Date | null;
}

export type ContractionState = readonly Contraction[];

export interface ContractionStore {
  subscribe: (this: void, run: Subscriber<ContractionState>) => Unsubscriber;
  stopContraction: () => void;
  registerNewContraction: () => void;
}

const innerContractionStore: Writable<ContractionState> = writable([]);

export const contractionStore: ContractionStore = {
  subscribe: innerContractionStore.subscribe,
  stopContraction: () =>
    innerContractionStore.update((currentState) => {
      const toto = [...currentState];
      toto[toto.length - 1].endTime = new Date();
      const newState: ContractionState = toto;
      console.log(`stopContraction - newState ${JSON.stringify(newState)}`);
      return newState;
    }),
  registerNewContraction: () =>
    innerContractionStore.update((currentState) => {
      const newContraction: Contraction = {
        startTime: new Date(),
        endTime: null,
      };
      const newState: ContractionState = [...currentState, newContraction];
      console.log(
        `registerNewContraction - newState ${JSON.stringify(newState)}`
      );
      return newState;
    }),
};
