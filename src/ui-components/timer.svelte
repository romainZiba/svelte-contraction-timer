<script lang="ts">
  export let elapsedSeconds: number;

  $: date = new Date(elapsedSeconds * 1000).toISOString().substr(11, 8);
</script>

<div class="timer">
  {date}
</div>

<style>
  .timer {
    font-size: 3em;
  }
</style>
