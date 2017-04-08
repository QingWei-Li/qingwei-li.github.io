<template>
  <div class="project">
    <div
      @click="previewImage"
      class="project__image"
      :style="{ backgroundImage: `url(${data.image})` }">
    </div>
    <div class="project__info">
      <h5 class="project__name">{{ data.name }}</h5>
      <p class="project__desc">{{ data.desc }}</p>
      <ul class="project__links">
        <li>
          <a target="_blank" :href="'https://github.com/qingwei-li/' + data.name">GitHub</a>
        </li>
        <li v-for="link in data.links">
          <a target="_blank" :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'project',

    props: ['data'],

    methods: {
      previewImage () {
        window.open(this.data.image)
      }
    }
  }
</script>

<style>
  .project {
    display: flex;
    text-align: left;
  }

  .project__image {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    cursor: zoom-in;
  }

  @media screen and (max-width: 600px) {
    .project__image {
      width: 0;
    }
  }

  .project__info {
    flex: 1;
    margin-left: 20px;
  }

  .project__name {
    font-size: 20px;
    margin-bottom: .5rem;
  }

  .project__desc {
    color: #7f8c8d;
  }

  .project__links {
    margin-top: .5rem;
  }

  .project__links li {
    display: inline-block;
  }

 .project__links a {
    padding: 0 .4rem;
 }
</style>
