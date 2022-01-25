<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import { object, string, number } from 'yup'

import tomato_small_color from '@/assets/images/tomato_small_color.svg'
import tomato_small_gray from '@/assets/images/tomato_small_gray.svg'

// const path = (name: string) => new URL(`../assets/images/${name}.svg`, import.meta.url).href

// function getModuleByNamespace(namespace: string) {
//   const modules = import.meta.glob('../../../plugins/vuex/modules/*.ts')
//   return modules[`../../../plugins/vuex/modules/${namespace}.ts`]
// }

// const tomato = ref(path('tomato_small_color'))
// const tomatoGray = ref(path('tomato_small_gray'))

const schema = object({
  title: string().required(),
  tomoto: number().required(),
})

const { handleSubmit, setFieldValue } = useForm({ validationSchema: schema, initialValues: { tomoto: 1, title: '' } })
const initialState = {
  form: {
    title: '',
    tomoto: 1,
  },
  mouseHover: false,
  mouseHoverTomoto: 1,
}

const state = reactive(initialState)

const handleTomotoAmount = (idx: number) => {
  state.form.tomoto = idx
}
const handleTomotoHoverAmount = (idx: number) => {
  state.mouseHoverTomoto = idx
}

const addTask = (e: MouseEvent) => {
  e.stopPropagation()
  console.log('addTask')
}
</script>

<template>
  <div>
    <!-- <form-input name="title" title="TASK TITLE" /> -->
    <div class="mb-6">
      <label for="task-title" class="rounded-md">
        <p class="text-gray-200 text-sm font-bold tracking-[0.7px] pb-4">TASK TITLE</p>
        <input
          id="task-title"
          v-model="state.form.title"
          type="text"
          class="w-full rounded-md bg-gray-50 p-4"
          placeholder="Please key in the task title..."
        />
      </label>
    </div>
    <div class="mb-[50px]">
      <label for="task-title" class="rounded-md">
        <p class="text-gray-200 text-sm font-bold tracking-[0.7px] pb-4">ESTIMATED TOMOTO</p>
        <div class="flex" @mouseleave="state.mouseHoverTomoto = -1">
          <img
            v-for="i in 10"
            :key="i"
            :src="i <= state.mouseHoverTomoto || i <= state.form.tomoto ? tomato_small_color : tomato_small_gray"
            class="mr-[22px] w-[25px] h-[25px] transition duration-150 transform hover:scale-110 active:scale-110"
            @click="handleTomotoAmount(i)"
            @mouseover="handleTomotoHoverAmount(i)"
          />
        </div>
      </label>
    </div>
    <button
      class="block w-full rounded-md bg-primary text-gray-50 text-sm text-body-sm font-black tracking-[1.4px] py-3 focus:outline-none"
      :class="{ 'bg-gray-200': false, 'text-gray-300': false }"
      @click="addTask"
    >
      ADD TASK
    </button>
  </div>
</template>
