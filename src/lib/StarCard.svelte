<script>
  export let description
  export let images
</script>

<div class="star-card">
  <p class="description">{description}</p>
  {#each images as image}
  <img src={image.url} alt="星星的图片" />
  {/each}
  <div class="footnote">
    <img class="qrcode" width="100" src="qrcode.jpg" alt="QR Code">
    <p>扫描二维码，后台回复“521”，寻找属于你的星星吧！</p>
    <p>数据来源：北京大学青年天文学会（学生社团）</p>
    <p>图片来源：cseligman.com</p>
    <div class="float-clear"></div>
  </div>
</div>

<style>
img {
  max-width: 100%;
  border-radius: 10px;
  display: block;
  margin: 10px 0;
}
.star-card {
  border-style: dashed;
  border-color: slategray;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
}
.description {
  text-align: left;
  white-space: pre-wrap;
  padding-left: 10px;
  line-height: 1.5;
}
.footnote {
  font-size: small;
  text-align: left;
}
.qrcode {
  float: right;
}
.float-clear {
  clear: both;
}
</style>
