<script lang="ts">
  import type { ContractionDataTableUiModel } from "./contraction-data-table-ui.model";

  export let columns: readonly string[] = [];
  export let data: readonly ContractionDataTableUiModel[] = [];
</script>

<table>
  <thead>
    <tr>
      {#each columns as column}
        <th>
          {column}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as datum}
      <tr>
        <td>{datum.length}</td>
        <td>{datum.timeApart}</td>
        <td>{datum.startTime} {datum.endTime}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table,
  td {
    border: 1px solid #333;
  }

  thead,
  tfoot {
    background-color: #333;
    color: #fff;
  }
</style>
