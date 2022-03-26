<template>
  <h1>New Memo</h1>
  <form @submit.prevent="addMemo">
    <label for="title"></label>
    <input type="text" name="title" id="title" v-model.trim="title">
    <button>Add</button>
  </form>

<div>
  {{memos}}
</div>

</template>

<script setup>
import { ref } from "vue";

let memos = [];
let title = ref('');

const addMemo = () => {
  if(!title.value) return

  const memo = {
    title: title.value,
    status: 'Incomplete'
  }
  memos.push(memo);
  console.log(memos);
  title.value = ''
}

</script>