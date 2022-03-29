<script lang="ts">
  import { contractionStore } from "./stores/contraction.store";

  import { timerStore } from "./stores/timer.store";
  import Timer from "./ui-components/timer.svelte";

  export let name: string;

  $: contractions = $contractionStore;

  $: inContraction = contractions[contractions.length - 1]?.endTime === null;

  $: buttonText = inContraction ? "Stop contraction" : "New contraction";

  const handleClick = () => {
    timerStore.reset();
    if (inContraction) {
      contractionStore.stopContraction();
    } else {
      contractionStore.registerNewContraction();
    }
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <Timer elapsedSeconds={$timerStore} />

  <button on:click={handleClick}>{buttonText}</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
