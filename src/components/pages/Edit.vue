<template>
  <div
    class="border border-blue p-10 my-20
      w-2/5 min-w-80 mx-auto shadow-lg"
  >
    <form @submit.prevent="addMemo" class="space-y-5">
      <div class="text-center ">
        <input
          type="text"
          class="border border-blue text-blue text-center
            font-bold text-2xl py-1 px-2"
          placeholder="write me ..."
          maxlength="20"
          name="title" id="title"
          v-model.trim="title"
        >
      </div>
      <div class="grid grid-cols-3">
        <label for="status" class="text-blue text-xl font-bold col-span-1">
          status
        </label>
        <select
          v-model="status"
          class="border border-blue text-blue
            font-bold col-span-2 py-1 px-2"
          name="status"
          id="status"
        >
          <option value="incomplete">Incomplete</option>
          <option value="working">Working</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <div class="grid grid-cols-3">
        <label for="detail" class="text-blue text-xl font-bold col-span-1">
          detail
        </label>
        <textarea
          class="border border-blue text-blue
            font-bold col-span-2 py-1 px-2"
          placeholder="write me ..."
          maxlength="100"
          name="detail" id="detail"
          v-model.trim="detail"
        ></textarea>
      </div>
      <div class="grid grid-cols-3">
        <label for="limit" class="text-blue text-xl font-bold col-span-1">
          limit
        </label>
        <input
          type="date"
          class="border border-blue col-span-2 text-blue
            text-sm font-bold py-1 px-2"
          v-model="limit"
          :min="new Date().toISOString().split('T')[0]"
        >
      </div>
      <div class="text-center">
        <button
          class="bg-blue shadow-lg hover:shadow-none
            text-white font-bold py-1 px-5"
        >
          Edit
        </button>
      </div>
    </form>

    <div class="grid grid-cols-2 justify-items-center mt-8">
      <button
        @click="goTop"
        class="border border-blue shadow-lg hover:shadow-none
          text-blue text-xs font-bold py-1 px-3"
      >
        ← Back
      </button>
      <button
        class="border border-blue shadow-lg hover:shadow-none
          text-blue text-xs font-bold py-1 px-3"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
  import {defineProps} from "vue"
  import { useRouter } from 'vue-router';

  defineProps({
    id: String,
    title: String,
    detail: String,
    limit: String,
    status: String
  })

  const router = useRouter();

  const goTop = () => {
    router.push('/');
  }
</script>