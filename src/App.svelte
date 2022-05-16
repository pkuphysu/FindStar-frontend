<script>
  import { onMount } from 'svelte'
  // import PosterViewer from './lib/PosterViewer.svelte'
  import StarCard from './lib/StarCard.svelte'
  let date = '2000-05-21'
  let starDataPromise
  let prevDate

  onMount(() => {
    // @ts-ignore
    window.laydate.render({
      elem: '#date-input',
      min: '1930-01-01',
      max: '2022-05-16',
      value: date,
      done: (value) => {
        date = value
      }
    })
  })

  const queryStar = () => {
    prevDate = date
    starDataPromise = fetch('http://find-star.xgb.phy.pku.edu.cn/graphql/', {
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
    <input id="date-input" />
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
  input {
    background-color: #223;
    max-width: 100px;
    color: #ddd;
    border: none;
    padding: 5px;
  }
  .vert-center * {
    vertical-align: baseline;
  }
</style>
