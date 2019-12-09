<template>
  <div class="row">
    <div class="column col-sm-8 col-xs-12 q-gutter-y-lg">
      <video-card v-for="video in videos" v-bind:youtubeUrl="video" :key="video"/>
    </div>
  </div>
</template>

<script>

import videoCard from '../../components/VideoCard'

export default {
  components: {
    videoCard
  },
  data () {
    return {
      videos: [
        'https://www.youtube.com/embed/I_skXNAqibo?rel=0',
        'https://www.youtube.com/embed/y9o0Th3F7IA?rel=0',
        'https://www.youtube.com/embed/a-gLHGtzTI8?rel=0',
        'https://www.youtube.com/embed/6-WQlIMw3-E?rel=0',
        'https://www.youtube.com/embed/x57taOnwIp0?rel=0',
        'https://www.youtube.com/embed/gFwz-SvcBV4?rel=0'
      ]
    }
  }
}
</script>
