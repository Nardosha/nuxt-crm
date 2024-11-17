<template>
  <NuxtLink
      v-for="item in MENU_DATA" :key="item.name" :to="item.url"
      class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5"
  >
    <Icon :name="item.icon" class="mr-3" />
    <span>{{item.name}}</span>
  </NuxtLink>
</template>

<script setup lang="ts">

import {MENU_DATA} from '~/layouts/menu.data';
</script>

