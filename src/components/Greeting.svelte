<script>

  let value = 0;

  function handleClick() {
     value += 1
  }

</script>

<button on:click={handleClick} class="bg-green-500 text-white px-2 py-1 rounded-sm active:scale-[.98]">Astro Island: {value}</button>
