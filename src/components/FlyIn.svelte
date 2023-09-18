<script lang="ts">
  import { onMount } from "svelte";
  import { viewport } from "../lib/viewportAction";
  let show = true;
  export let className = "";
  $: console.log("show", show);
  // basically just gives better seo by making it visible by default
  onMount(() => (show = false));
</script>

<div use:viewport={{ onEnter: () => (show = true) }} class={className}>
  {#if show}
    <slot />
  {/if}
</div>
