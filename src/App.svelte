<script>
import StarCard from './lib/StarCard.svelte'
let date = '1996-08-17'
let dateChanged = false
</script>

<main>
  <h1>寻找星星</h1>
  我的生日是
  <input type="date" bind:value={date} on:input={() => { dateChanged = true }}/>
  {#if dateChanged}
  <StarCard
    {date}
    name="狗星"
    description="一只柴犬"
    images={['https://avatars.githubusercontent.com/u/23495403']}
  />
  {/if}

</main>

<style>
main {
  text-align: center;
  margin: auto;
  max-width: 400px;
}
</style>
