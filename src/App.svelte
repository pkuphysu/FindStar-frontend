<script>
import StarCard from './lib/StarCard.svelte'
let date = '1996-08-17'
let starDataPromise
let prevDate
const queryStar = () => {
  prevDate = date
  starDataPromise = fetch('https://find-star.xgb.phy.pku.edu.cn/graphql/', {
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
  }).then((resp) => resp.json())
}
</script>

<main>
  <h1>寻找星星</h1>
  <div class="vert-center">
    <span>您的生日是</span>
    <input type="date" bind:value={date} min="1930-01-01" max="2020-12-31" />
  </div>
  <button
    on:click={queryStar}
    disabled={prevDate === date}
  >
    查看
  </button>
  <div>
    {#await starDataPromise}
      Loading...
    {:then starData}
      {#if starData?.data?.birth}
        <StarCard
          description={starData.data.birth.word}
          images={starData.data.birth.imageSet}
        />
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
  color: #dbdbdb;
}
button {
  background-color: #0b4b0f;
  color: #dbdbdb;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: large;
}
button:disabled {
  background-color: #161f27;
  color: #929191;
}
.vert-center * {
  vertical-align: baseline;
}
</style>
