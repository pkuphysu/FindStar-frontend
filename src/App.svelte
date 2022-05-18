<script>
  import { DateInput } from 'date-picker-svelte'
  // import PosterViewer from './lib/PosterViewer.svelte'
  import StarCard from './lib/StarCard.svelte'
  let date = new Date('2000-05-21')
  let starDataPromise
  let prevDate

  const queryStar = () => {
    prevDate = date
    starDataPromise = fetch('http://find-star.xgb.phy.pku.edu.cn/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query {
          birth (date:"${date.toISOString().split('T')[0]}") {
            word
            imageSet {
              url
            }
            post {
              post
            }
          }
        }`
      })
    }).then((resp) => resp.json())
  }
</script>

<main>
  <h1>寻找属于你的星光</h1>
  <div class="vert-center">
    <span>您的生日是</span>
    <DateInput 
      bind:value={date}
      closeOnSelection={true}
      format="yyyy-MM-dd"
      min={new Date('1930-01-01')}
      max={new Date('2022-05-16')}
      locale={{
        weekdays: [...'日一二三四五六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        weekStartsOn: 1
      }} />
    <!-- <input id="date-input" /> -->
  </div>
  <button on:click={queryStar} disabled={prevDate === date}> 收下礼物 </button>
  <div>
    {#await starDataPromise}
      Loading...
    {:then starData}
      {#if starData?.data?.birth}
        <StarCard
          description={starData.data.birth.word}
          images={starData.data.birth.imageSet}
        />
        <!-- <PosterViewer src={starData.data.birth.post.post} /> -->
      {:else if starData}
        出了点问题，无法获取信息
      {/if}
    {:catch}
      出了点问题，无法获取信息
    {/await}
  </div>
</main>

<style>
  :global(html) {
    background-image: url('/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    background-attachment: fixed;
  }
  :global(:root) {
    --date-picker-background: #1b1e27;
    --date-picker-foreground: #f7f7f7;
  }
  :global(.date-time-field) {
    display: inline-block;
  }
  main {
    text-align: center;
    margin: auto;
    max-width: 400px;
    color: #ddd;
  }
  h1 {
    color: #ccc;
  }
  button {
    background-color: #0b4b0f;
    color: #ddd;
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
