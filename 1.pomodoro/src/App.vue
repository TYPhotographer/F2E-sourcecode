<script setup lang="ts">
import { reactive, ref } from "vue"

const path = (name: string) => new URL(`./assets/images/${name}.svg`, import.meta.url);
console.log(path('tomato_small_color'))
const tomato = ref(path('tomato_small_color').href)
const tomatoGray = ref(path('tomato_small_gray').href)
const initialState = {
  form: {
    title: '',
    tomoto: 1,
    mouseHover: false,
    mouseHoverTomoto: 1
  }
}

const state = reactive(initialState)

const handleTomotoAmount = (idx: number) => {
  state.form.tomoto = idx
}
const handleTomotoHoverAmount = (idx: number) => {
  state.form.mouseHoverTomoto = idx
}

const addTask = (e: MouseEvent) => {
  e.stopPropagation()
  console.log('addTask')
}
</script>

<template>
  <section
    class="flex"
    style="height: 100vh;"
  >
    <section class="flex flex-col h-full justify-between bg-gray-100 flex-1">
      <main class="flex flex-col items-center justify-center flex-1">
        <div class="w-[300px] h-[300px] relative flex justify-center items-center">
          <p class="text-white text-2xl font-light tracking-[3.6px] z-10">PODOMORO</p>
          <img
            src="@/assets/images/tomato_small_color.svg"
            class="absolute w-1/1 h-1/1"
            width="300"
            height="300"
            alt=""
          >
        </div>
        <p class="mt-[50px] text-gray-600 text-center text-sm tracking-[1.4px]">
          You don’t have any task now,<br> please add task first!
        </p>
      </main>
      <footer class="py-[50px] text-gray-600 text-center">
        <p class="text-xs font-light">PODOMORO</p>
      </footer>
    </section>
    <aside class="flex bg-gray-600 w-150">
      <ul>
        <li>
          <img
            src="@/assets/images/add_red.svg"
            width="80"
            height="80"
          >
        </li>
        <li>
          <img
            src="@/assets/images/list_white.svg"
            width="80"
            height="80"
          >
        </li>
        <li>
          <img
            src="@/assets/images/analysis_white.svg"
            width="80"
            height="80"
          >
        </li>
        <li>
          <img
            src="@/assets/images/ringtone_white.svg"
            width="80"
            height="80"
          >
        </li>
      </ul>
      <div class="flex-1 border-l-width-2 border-gray-500 px-[34px] py-[30px]">
        <!-- title -->
        <p class="text-gray-50 tracking-[2px] text-lg font-black border-b-1 border-b-gray-500 pb-[25px] mb-[25px]">
          ADD NEW TASK
        </p>
        <!-- main -->
        <div>
          <div class="mb-6">
            <label
              for="task-title"
              class=" rounded-md"
            >
              <p
                class="text-gray-200 text-sm font-bold tracking-[0.7px] pb-4"
              >TASK TITLE</p>
              <input
                id="task-title"
                v-model="state.form.title"
                type="text"
                class="w-full rounded-md bg-gray-50 p-4"
                placeholder="Please key in the task title..."
              >
            </label>
          </div>
          <div class="mb-[50px]">
            <label
              for="task-title"
              class=" rounded-md"
            >
              <p
                class="text-gray-200 text-sm font-bold tracking-[0.7px] pb-4"
              >ESTIMATED TOMOTO</p>
              <div
                class="flex"
                @mouseover="state.form.mouseHover = true"
                @mouseleave="state.form.mouseHover = false"
              >
                <img
                  v-for="i in 10"
                  :src="state.form.mouseHover && state.form.mouseHoverTomoto > state.form.tomoto ? (i <= state.form.mouseHoverTomoto ? tomato : tomatoGray ) : (i <= state.form.tomoto ? tomato : tomatoGray )"
                  class="mr-[22px] w-[25px] h-[25px] transition duration-150 transform hover:scale-110"
                  @click="handleTomotoAmount(i)"
                  @mouseover="handleTomotoHoverAmount(i)"
                >
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
      </div>
    </aside>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
#app {
  font-family: 'Lato', sans-serif;
}
</style>

