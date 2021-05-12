<script>
import StarCard from './lib/StarCard.svelte'
let date = '1996-08-17'
let starData
</script>

<main>
  <h1>寻找星星</h1>
  <div class="vert-center">
    <span>您的生日是</span>
    <input type="date" bind:value={date}/>
  </div>
  <button on:click={() => {
    starData = {
      description: `属于您的深空天体是NGC2266，它是位于双子座的疏散星团,视星等为9.5。
适合观测这一天体的纬度范围是南纬28.0°~北纬82.0°
在您出生的那一天，这个天体与太阳的赤经差距最大，在午夜前后升上中天，观测条件最好。`,
      images: ['https://avatars.githubusercontent.com/u/23495403']
    }
  }}>查看</button>
  {#if starData}
  <StarCard {...starData} />
  {/if}

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
