<script lang="ts" setup>
import { defineProps } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const { value: inputValue, errorMessage, handleBlur, handleChange, meta } = useField(props.name, undefined)

const onInput = (e: Event) => {
  handleChange(e)
}
</script>
<template>
  <label for="task-title" class="rounded-md mb-6">
    <p class="text-gray-200 text-sm font-bold tracking-[0.7px] pb-4">{{ props.title }}</p>
    <input
      id="task-title"
      v-model="inputValue"
      type="text"
      class="w-full rounded-md bg-gray-50 p-4"
      placeholder="Please key in the task title..."
      @input="onInput"
      @blur="handleBlur"
    />
  </label>
  <p>{{ errorMessage }}</p>
</template>
