<template>
  <div
    class="border border-blue py-5 px-10 my-10
      w-2/5 min-w-80 mx-auto shadow-lg"
  >
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
        @click="sortMemos"
        class="text-blue text-xl font-bold border
          border-blue px-3 shadow-lg hover:shadow-none">
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
        v-model="filterStatus"
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="working">Working</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  </div>

  <ul class="space-y-5 my-20">
    <li
      v-for="(memo, index) in memos"
      :key="memo.memoId"
    >
      <div
        class="flex justify-between items-center mx-auto border
          border-blue shadow-lg py-2 px-3 w-2/5"
        v-if="filterStatus === 'all' || memo.status === filterStatus"
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
  import { ref } from "vue";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const props = defineProps({
    memoId: Number,
    memos: Array
  })

  let title = ref('');
  let detail = ref('');
  let limit = ref('');
  let sortStatus = ref(false);
  let filterStatus = ref('all');

  const emit =  defineEmits([
    'emit-memo-id', 'emit-memos'
  ])

  const sortMemos = () => {
    sortStatus.value = !sortStatus.value

    if(!sortStatus.value) {
      return props.memos.sort((a, b) => a.memoId - b.memoId)
    } else if(sortStatus.value) {
      return props.memos.sort((a, b) => b.memoId -  a.memoId)
    }
  }

  const addMemo = () => {
    if(!title.value || !detail.value || !limit.value) return

    const newMemoId = props.memoId + 1
    const newMemo = {
      memoId: newMemoId,
      title: title.value,
      detail: detail.value,
      limit: limit.value,
      status: 'incomplete'
    }
    props.memos.push(newMemo);

    emit('emit-memo-id')

    title.value = ''
    detail.value = ''
    limit.value = ''
  }

  const goEdit = (index) => {
    router.push(`/edit/${index}`)
  }
</script>