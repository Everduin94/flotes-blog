<script lang="ts">
  export let tabs: { key: string; value: string }[] = [];
  export let pathname = '';
</script>

<div>
  <div class="grid auto-cols-max grid-flow-col gap-4 sm:gap-6 mt-8 justify-start text-md sm:text-xl">
    {#each tabs as tab}
      <a
        href={tab.key}
        class={`tab-border cursor-pointer hover:border-b-2  transition-colors ${
          pathname == tab.key ? "tab-border-active" : ""
        }`}
      >
        {tab.value}
      </a>
    {/each}
  </div>
  <slot name="content" />
</div>


<style>
.tab-border-active {
    border-color: #cba6f7 !important;
}
.tab-border {
    border-bottom: 2px solid;
    border-color: transparent;
  }
.tab-border:hover {
    border-color: #cdd6f4;
  }

</style>
