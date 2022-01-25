import { InjectionKey } from 'vue'

import { createStore, useStore as baseUseStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

import { module as taskModule, TaskStore, State as TaskState } from './modules/task'

export type RootState = {
  task: TaskState
}

// define injection key
export const key: InjectionKey<Store> = Symbol()

const modules = {
  task: taskModule,
}

type Store = TaskStore<Pick<RootState, 'task'>>

const store = createStore<RootState>({
  modules,
  plugins: [createPersistedState()]
})

export function useStore(): Store {
  return baseUseStore(key)
}

export default store
