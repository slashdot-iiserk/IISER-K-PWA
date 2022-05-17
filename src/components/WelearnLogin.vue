<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

defineEmits(['login']);

const { username, password } = storeToRefs(useAuthStore());
</script>
<template>
  <span class="text-2xl">Login to WeLearn</span>
  <form
    class="form-control w-2/3 lg:w-1/2"
    @submit.prevent="$emit('login', username, password)"
  >
    <label class="label">
      <span class="label-text text-lg">Username</span>
    </label>
    <input
      v-model.lazy="username"
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full"
    />
    <label class="label">
      <span class="label-text text-lg">Password</span>
    </label>
    <input
      v-model="password"
      type="password"
      placeholder="Type here"
      class="input input-bordered w-full"
    />
    <button
      type="submit"
      class="btn btn-primary my-6"
      @click.prevent="$emit('login', username, password)"
    >
      Login
    </button>
  </form>
</template>
