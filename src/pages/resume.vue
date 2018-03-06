<template>
  <article class='cssume' v-html="content"></article>
</template>

<script>
import marked from 'marked'
import resumeRaw from 'raw-loader!@/assets/resume.md'

export default {
  name: 'resume',

  created() {
    this.content = marked(resumeRaw)
  }
}
</script>

<style src="cssume"></style>
