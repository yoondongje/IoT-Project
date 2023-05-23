<template>
  <v-app>
    <Navibar></Navibar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navibar from '@/components/Navibar.vue';

export default {
  name: 'App',
  components : {
    Navibar
  },
  data: () => ({
    //
  }),
};
</script>
