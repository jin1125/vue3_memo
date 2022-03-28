<template>
  <div
    class="border border-blue py-5 px-10 my-10
      w-2/5 min-w-80 mx-auto shadow-lg"
  >
    {{ memos }}
    <h1 class="text-blue text-2xl font-bold text-center mt-5 mb-10">
      New Memo
    </h1>
    <form @submit.prevent="addMemo" class="space-y-3">
      <div class="grid grid-cols-3">
        <label for="title" class="text-blue text-xl font-bold col-span-1">
          title
        </label>
        <input
          type="text"
          class="border border-blue text-blue
            font-bold col-span-2 py-1 px-2"
          placeholder="write me ..."
          maxlength="20"
          name="title"
          id="title"
          v-model.trim="title"
        >
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
          name="detail"
          id="detail"
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
      <div class="text-center pt-5 pb-2">
        <button
          class="bg-blue shadow-lg hover:shadow-none
            text-white font-bold py-1 px-5"
        >
          Add
        </button>
      </div>
    </form>
  </div>

  <div class="w-2/5 flex justify-between mx-auto">
    <div class="flex gap-5">
      <p class="text-blue text-xl font-bold">
        sort
      </p>
      <button
        type="submit"
        class="text-xl border border-blue px-3 shadow-lg hover:shadow-none">
        ↓↑
      </button>
    </div>
    <div class="flex gap-5">
      <p class="text-blue text-xl font-bold">
        filter
      </p>
      <select
        class="border border-blue text-blue
          font-bold col-span-2 py-1 px-2"
      >
        <option disabled value="">---</option>
        <option value="incomplete">Incomplete</option>
        <option value="working">Working</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  </div>

  <ul class="space-y-5 my-20">
    <li v-for="(memo, index) in memos" :key="memo.memoId">
      <div
        class="flex justify-between items-center mx-auto border
          border-blue shadow-lg py-2 px-3 w-2/5"
      >
        <span class="text-blue font-bold text-lg">
          {{ memo.title }}
        </span>
        <button
          @click="goEdit(index)"
          class="bg-blue shadow-lg hover:shadow-none
            text-white font-bold py-1 px-4"
        >
          →
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup>
  import { ref, computed } from "vue";
  import router from "../../router";

  let memos = [];
  let memoId = ref(0);
  let title = ref('');
  let detail = ref('');
  let limit = ref('');

  const addMemo = () => {
    if(!title.value || !detail.value || !limit.value) return

    const newMemo = {
      memoId: memoId.value++,
      title: title.value,
      detail: detail.value,
      limit: limit.value,
      status: 'incomplete'
    }
    memos.push(newMemo);

    title.value = ''
    detail.value = ''
    limit.value = ''
  }

  const goEdit = (index) => {
    router.push({
      name: 'Edit',
      params:
      {
        index: index,
        id: memos[index].memoId,
        memos: memos,
        // title: memos[index].title,
        // detail: memos[index].detail,
        // limit: memos[index].limit,
        // status: memos[index].status
      }
    })
  }

</script>