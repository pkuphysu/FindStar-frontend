<script>
import StarCard from './lib/StarCard.svelte'
let date = '1996-08-17'
let starDataPromise
const queryStar = () => {
  starDataPromise = fetch('https://xgb.phy.pku.edu.cn/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query {
      birth (date:"${date}") {
        word
        imageSet {
          url
        }
      }
    }`
    })
  }).then(resp => resp.json())
}
</script>

<main>
  <h1>寻找星星</h1>
  <div class="vert-center">
    <span>您的生日是</span>
    <input type="date" bind:value={date}/>
  </div>
  <button on:click={queryStar}>查看</button>
  <div>
    {#await starDataPromise}
      Loading...
    {:then starData}
      {#if starData?.data?.birth}
        <StarCard description={starData.data.birth.word} images={starData.data.birth.imageSet} />
      {:else if starData}
        出了点问题，无法获取信息
      {/if}
    {:catch}
      出了点问题，无法获取信息
    {/await}
  </div>
</main>

<style>
main {
  text-align: center;
  margin: auto;
  max-width: 400px;
}
input[type=date] {
  display: inline;
}
.vert-center * {
  vertical-align: baseline;
}
</style>
