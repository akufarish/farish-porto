<template>
  <div class="hidden fixed lg:flex justify-center items-center">
    <div
      class="flex flex-col gap-[45px] text-primary bg-secondary p-6 rounded-lg"
    >
      <div
        class="flex items-center justify-center group"
        v-for="item in props.icon"
      >
        <component
          :is="item.icon"
          class="w-[35px] h-[35px] cursor-pointer"
        ></component>
        <h3
          class="absolute left-24 bg-secondary group-hover:opacity-100 p-2 px-4 w-28 text-center mt-2 opacity-0 rounded-md shadow-md duration-150 font-semibold"
        >
          {{ item.tooltip }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["icon"]);

console.log(props.icon);
</script>
