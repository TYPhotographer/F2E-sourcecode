<script setup lang="ts">
import { useStore } from '@/plugins/vuex'
import { reactive } from 'vue'

const initialState = {
  showSidebar: true,
}

const store = useStore()
store.dispatch('addTask', { title: '', time: 0 })
console.log(store.state.task.tasks)
// const path = (name: string) => new URL(`../assets/images/${name}.svg`, import.meta.url)

const state = reactive(initialState)

const toggleSidebar = () => {
  state.showSidebar = !state.showSidebar
}
</script>

<template>
  <section class="flex min-h-[100vh] max-w-full overflow-x-hidden">
    <section class="flex flex-col bg-gray-100 flex-1">
      <main class="flex flex-col items-center justify-center flex-1">
        <div class="w-[300px] h-[300px] relative flex justify-center items-center">
          <p class="text-white text-2xl font-light tracking-[3.6px] z-10">PODOMORO</p>
          <img
            src="@/assets/images/tomato_small_color.svg"
            class="absolute w-full w-full"
            width="300"
            height="300"
            alt=""
          />
        </div>
        <p class="mt-[50px] text-gray-600 text-center text-sm tracking-[1.4px]">
          You don’t have any task now,<br />
          please add task first!
        </p>
      </main>
      <footer class="py-[50px] text-gray-600 text-center">
        <p class="text-xs font-light">PODOMORO</p>
      </footer>
    </section>
    <aside class="flex bg-gray-600 w-20 transition-all" :class="{ 'w-150': state.showSidebar }">
      <ul class="relative min-w-20">
        <router-link to="/">
          <img src="@/assets/images/add_red.svg" width="80" height="80" />
        </router-link>
        <!-- <li>
          <img src="@/assets/images/add_red.svg" width="80" height="80" />
        </li> -->
        <router-link to="/list">
          <img src="@/assets/images/list_white.svg" width="80" height="80" />
        </router-link>
        <!-- <li>
          <img src="@/assets/images/list_white.svg" width="80" height="80" />
        </li> -->
        <router-link to="/list">
          <img src="@/assets/images/analysis_white.svg" width="80" height="80" />
        </router-link>
        <!-- <li>
          <img src="@/assets/images/analysis_white.svg" width="80" height="80" />
        </li> -->
        <router-link to="/list">
          <img src="@/assets/images/ringtone_white.svg" width="80" height="80" />
        </router-link>
        <!-- <li>
          <img src="@/assets/images/ringtone_white.svg" width="80" height="80" />
        </li> -->
        <!-- toggle button -->
        <div
          class="absolute bg-gray-50 w-90px h-50px flex justify-between items-center bottom-34px right-4 rounded-r-[5px] rounded-l-[25px] p-3"
          @click="toggleSidebar"
        >
          <img src="@/assets/images/tomato_small_color.svg" width="25" height="25" />
          <img
            class="transform"
            :class="{ 'rotate-180': !state.showSidebar }"
            src="@/assets/images/arrow.svg"
            width="20"
            height="14"
          />
        </div>
      </ul>
      <div class="flex-1 border-l-width-2 border-gray-500 px-[34px] py-[30px]">
        <!-- title -->
        <p class="text-gray-50 tracking-[2px] text-lg font-black border-b-1 border-b-gray-500 pb-[25px] mb-[25px]">
          ADD NEW TASK
        </p>
        <!-- main -->
        <router-view />
      </div>
    </aside>
  </section>
</template>
