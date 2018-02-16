<template>
  <main>
    <section class="profile">
      <div class="profile__container">
        <img
          class="profile__avatar"
          src="https://github.com/qingwei-li.png"
          alt="qingwei-li">
        <h1 class="profile__name">Qingwei Li</h1>
        <blockquote class="profile__description">A Web developer who loves to create amazing things</blockquote>
        <ul class="links">
          <li class="links__item"><a href="http://weibo.com/ihermit">Weibo</a></li>
          <li class="links__item"><a href="http://twitter.com/cinwell_li">Twitter</a></li>
          <li class="links__item"><a href="https://github.com/qingwei-li">GitHub</a></li>
          <li class="links__item"><a href="https://github.com/qingwei-li/donate">Donate</a></li>
        </ul>
        <div class="button-group">
          <heart class="heart-button"></heart>
        </div>
      </div>
    </section>

    <section class="list">
      <h4 class="list__title">⬇️ My projects ⬇️</h4>
      <ul class="projects">
        <li class="projects__item" v-for="p in projects" :key="p.name">
          <project :data="p" />
        </li>
      </ul>
      <a target="_blank" href="https://github.com/QingWei-Li?utf8=%E2%9C%93&tab=repositories&q=&type=source">More projects</a>
    </section>
  </main>
</template>

<script>
import Project from '../components/project.vue';
import Heart from '../components/heart.vue';

export default {
  name: 'home',

  components: { Project, Heart },

  head: {
    title: 'Qingwei Li(cinwell)',
    link: [{ rel: 'favicon', href: 'https://github.com/qingwei-li.png' }]
  },

  created() {
    this.projects = require('../projects.json');
  }
};
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600);

body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  color: #2c3e50;
  max-width: 600px;
  margin: auto;
}

* {
  margin: 0;
  padding: 0;
}

a {
  color: #42b983;
}

ul {
  list-style-type: none;
}

.profile {
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
}

.profile__container {
  flex: 1;
}

.profile__avatar {
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
}

.profile__name {
  margin: 1rem 0;
}

.profile__description {
  color: #7f8c8d;
  margin: 1rem 4rem;
}

.links {
  text-align: center;
}

.links__item {
  display: inline-block;
  padding: 0 0.4rem;
}

.list {
  text-align: center;
  margin-bottom: 5rem;
  padding: 0 20px;
  box-sizing: border-box;
}

.list__title {
  margin-bottom: 3rem;
}

.projects__item {
  border-bottom: 1px dashed #f0f0f0;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}

.projects__item:last-child {
  border-bottom: 0;
}

.button-group {
  position: relative;
}

.heart-button {
  margin-top: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -47.5%);
  position: absolute;
}
</style>
