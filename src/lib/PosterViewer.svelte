<script>
  export let src
  let showPost = false
</script>

<button on:click={() => { showPost = true }}>显示星空海报</button>

{#if showPost}
  <div class="fullscreen" on:click={() => { showPost = false }}>
    <img src={'http://find-star.xgb.phy.pku.edu.cn' + src} alt="poster" />
  </div>
{/if}

<style>
  .fullscreen {
    height: 100vh;
    width: 100vw;
    background-color: #0007;
    position: fixed;
    top: 0;
    left: 0;
  }
  .fullscreen img {
    max-width: 100%;
    max-height: 100%;
  }
  button {
    background-color: #024d5a;
    color: #ddd;
    padding: 10px 15px;
    margin: 10px;
    border: none;
    border-radius: 5px;
  }
</style>
