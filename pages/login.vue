<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar min-w-[350px] w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

    <form>
      <ui-input :model-value="email" placeholder="Email" name="email" type="email" class="mb-3"/>
      <ui-input :model-value="password" placeholder="Password" name="password" type="password" class="mb-3"/>
      <ui-input :model-value="name" placeholder="Name" name="name" type="name" class="mb-3"/>

      <div class="flex items-center justify-center gap-5">
          <ui-button type="button">Login</ui-button><ui-button type="button">Register</ui-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
  title: 'Login | CRM system',
})

const email = ref<string>('')
const password = ref<string>('')
const name = ref<string>('')
</script>
