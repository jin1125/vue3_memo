<template setup>
  <div  class="bg-blue p-3">
    <span class="cursor-pointer text-white text-3xl" @click="goTop">
      Vue3 Memo
    </span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goTop = () => {
  router.push('/');
}
</script>