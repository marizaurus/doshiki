<template>
  <div>
    <q-card flat class="videoCard bg-deep-orange-2">
      <q-video :src='youtubeUrl'/>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    youtubeUrl: String
  },
  name: 'VideoCard'
}
</script>

<style scoped>
.videoCard{
  width: 100%;
  max-width: 700px;
}
</style>
