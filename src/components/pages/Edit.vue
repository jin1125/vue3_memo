<template>
  <div
    class="border border-blue p-10 my-20
      w-2/5 min-w-80 mx-auto shadow-lg"
  >
    <form @submit.prevent="editMemo" class="space-y-5">
      <div class="text-center ">
        <input
          type="text"
          class="border border-blue text-blue text-center
            font-bold text-2xl py-1 px-2"
          placeholder="write me ..."
          maxlength="20"
          name="title"
          id="title"
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
        @click="deleteMemo"
        class="border border-blue shadow-lg hover:shadow-none
          text-blue text-xs font-bold py-1 px-3"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const props = defineProps({
    memoId: Number,
    memos: Array
  })
  const currentId = route.params.id;
  const memoValues = props.memos[currentId];

  if(!memoValues) {
    router.push('/');
  }

  let title = ref(memoValues.title);
  let status = ref(memoValues.status);
  let detail = ref(memoValues.detail);
  let limit = ref(memoValues.limit);

  const editMemo = () => {
    const editValues = {
      memoId: props.memos[currentId].memoId,
      title: title.value,
      detail: detail.value,
      limit: limit.value,
      status: status.value,
    }

    props.memos.splice(currentId, 1, editValues)
    alert('Chenged!')
  }

  const goTop = () => {
    router.push('/');
  }

  const deleteMemo = () => {
    if(confirm('Delete?')) {
      props.memos.splice(currentId, 1)
      alert('Deleted!')
      router.push('/');
    } else {
      alert('Canceled delete')
    }
  }
</script>