<template>
  <div class="main">
    <a class="download" href="//pdfcrowd.com/url_to_pdf/?width=1030pt&height=1332pt&use_print_media=1&pdf_name=qingwei-li">下载 PDF</a>
    <article class='cssume' v-html="content"></article>
  </div>
</template>

<script>
import marked from 'marked';
import resumeRaw from 'raw-loader!@/assets/resume.md';

export default {
  name: 'resume',

  created() {
    this.content = marked(resumeRaw);
  }
};
</script>

<style src="cssume"></style>
<style scoped>
.main {
  margin: 30px;
  position: relative;
}

.download {
  text-decoration: none;
  color: black;
  position: absolute;
  right: 0;
  top: 9px;
  z-index: 1;
}

.download:hover {
  opacity: 0.6;
}

.cssume {
  font-weight: normal;
}

@media print {
  .download {
    display: none;
  }
}
</style>
