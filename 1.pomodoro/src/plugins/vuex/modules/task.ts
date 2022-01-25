import { GetterTree, Module, Store as VuexStore, ActionContext, CommitOptions, DispatchOptions, ActionTree } from 'vuex'
import { RootState } from '@/plugins/vuex/index'

type Task = {
  title: string
  time: number
}
export type State = {
  tasks: Task[]
}

const state: State = {
  tasks: [],
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export type TaskStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

type Actions = {
  addTask({ commit }: AugmentedActionContext, task: Task): void
}

const actions: ActionTree<State, RootState> & Actions = {
  addTask({ commit }, payload) {
    commit(MutationTypes.addTask, payload)
  },
}

enum MutationTypes {
  addTask = 'ADD_TASK',
}

type Mutations<S = State> = {
  [MutationTypes.addTask](state: S, payload: Task): void
}

const mutations: Mutations = {
  ADD_TASK(state, payload) {
    state.tasks.push(payload)
  },
}

type Getters = {
  getTaskLength(state: State): number
}

const getters: GetterTree<State, RootState> & Getters = {
  getTaskLength: (state) => state.tasks.length,
}

export const module: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
}
