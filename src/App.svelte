<script lang="ts">
  import { Contraction, contractionStore } from "./stores/contraction.store";

  import { timerStore } from "./stores/timer.store";
  import type { ContractionDataTableUiModel } from "./ui-components/contraction-data-table/contraction-data-table-ui.model";
  import DataTable from "./ui-components/contraction-data-table/data-table.svelte";
  import Timer from "./ui-components/timer.svelte";

  export let name: string;

  $: contractions = $contractionStore;

  $: inContraction = contractions[contractions.length - 1]?.endTime === null;

  $: buttonText = inContraction ? "Stop contraction" : "New contraction";

  $: contractionData = contractions.map((contraction: Contraction) => ({
    startTime: contraction.startTime,
    endTime: contraction.endTime,
    length: 10,
    timeApart: 10,
  }));

  const columns = ["Length", "Time apart", "Start & end time"];

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
  <DataTable {columns} data={contractionData} />
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
