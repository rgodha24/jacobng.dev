<script lang="ts">
  import { viewport } from "../lib/viewportAction";
  let show = false;
  export let className = "";
  $: console.log("show", show);
</script>

<div
  use:viewport={{ onEnter: () => (show = true), onExit: () => (show = false) }}
  class={className}
>
  {#if show}
    <slot />
  {/if}
</div>
