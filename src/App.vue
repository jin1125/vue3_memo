<template>
  <div>
    <Header />
      <router-view
        :memoId=memoId
        :memos=memos
        @custom-event="testMethod"
      />
    <Footer />
  </div>
</template>

<script setup>
  import Header from './components/modules/Header.vue';
  import Footer from './components/modules/Footer.vue';
  import { ref } from "vue";

  let memoId = ref(0);
  let memos = [];

  const testMethod = (e) => {
    console.log(e);
  }
</script>