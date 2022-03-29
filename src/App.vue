<template>
  <div>
    <Header />
      <router-view
        :memoId=memoId
        :memos=memos
        @emit-memo-id="addMemoId"
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

  const addMemoId = () => {
    memoId.value++
  }
</script>