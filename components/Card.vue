<template>
    <div class="grid grid-cols-4 gap-y-[25px] gap-x-[25px]">
        <NuxtLink :to="`/blogs/${blog.id}`" v-for="blog in props.blogList" :key="blog.id" class="hover:scale-105 flex items-center justify-center">
            <div class="bg-white shadow-lg w-[235px] h-[300px] rounded-lg p-[10px] flex flex-col justify-between">
                <!-- image -->
                <div class="w-full h-[120px] rounded-md overflow-hidden">
                    <img :src="`/images/blogs/${blog.image}.jpg`" :alt="blog.name" class="h-auto w-full object-cover">
                </div>
                <!-- Title and descrption -->
                <div class="text-regular-sm flex flex-col gap-y-2">
                    <h2 class="text-regular font-bold text-orange-400 line-clamp-1">{{ blog.name }}</h2>
                    <p class="line-clamp-2 text-[#909090]">{{ blog.description }}</p>
                </div>
                <!-- button and major -->
                <div class="flex justify-between text-regular-sm items-end">
                    <button class="bg-orange-400 px-4 rounded-md text-white">Read</button>
                    <p class="text-[#909090] text-[10px]">{{ blog.field }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['blogList']);
</script>

<style scoped>

</style>