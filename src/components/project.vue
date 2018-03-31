<template>
  <div class="project">
    <img ref="image" :src="data.image" class="project__image">
    <div class="project__info">
      <h5 class="project__name">{{ data.name }}</h5>
      <p class="project__desc">{{ data.desc }}</p>
      <div v-if="data.type" class="project__tag">{{ data.type }}</div>
      <ul class="project__links">
        <li>
          <a target="_blank" :href="data.name | repo">GitHub</a>
        </li>
        <li v-for="link in data.links" :key="link.name">
          <a target="_blank" :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import zoom from 'zoom-image';

export default {
  name: 'project',

  props: ['data'],

  filters: {
    repo(name) {
      return 'https://github.com/' + name.indexOf('/') === -1
        ? 'qingwei-li' + name
        : name;
    }
  },

  mounted() {
    this.destroyZoom = zoom(this.$refs.image);
  },

  beforeDestroy() {
    this.destroyZoom();
  },

  methods: {
    previewImage() {
      window.open(this.data.image);
    }
  }
};
</script>

<style src="zoom-image/css/zoom-image.css"></style>
<style>
.project {
  display: flex;
  text-align: left;
  align-items: center;
  position: relative;
}

.project__image {
  width: 100px;
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
  margin-bottom: 0.5rem;
}

.project__desc {
  color: #7f8c8d;
}

.project__links {
  margin-top: 0.5rem;
}

.project__links li {
  display: inline-block;
}

.project__links a {
  padding: 0 0.4rem;
}

.project__tag {
  position: absolute;
  right: 0;
  border-radius: 4px;
  background: #f0f0f0;
  padding: 2px 4px;
  top: 0;
}
</style>
