<template>
    <!-- This section shows the most viewed blogs. -->
    <section class="grid grid-cols-3 gap-x-[25px] my-[4rem]">
            <div v-for="(blog, i) in props.blogList.slice(0, 3)" :key="blog.id">
                <NuxtLink :to="`/blogs/${blog.id}`" class="flex  gap-x-5">
                    <div class="w-[110px] h-[150px] flex justify-end">
                        <img :src="`/images/blogs/${blog.image}.jpg`" :alt="blog.name" class="h-full w-full object-cover">
                        <!-- <div :style="backgroundImage: url(`/images/${blog.image}.jpg`)"  class="h-full w-auto"></div> -->
                    </div>
                    <!-- blog title and description -->
                    <div class="w-[250px] flex flex-col gap-y-[25px]">
                        <!-- rank -->
                        <h2 class="text-[24px] font-bold text-orange-400">0{{ i+1 }}</h2>
                        <!-- container for title and description -->
                        <div class="text-[#505050] text-regular flex flex-col gap-y-[10px]">
                            <h3 class="font-bold">{{ blog.name }}</h3>
                            <p class="text-regular line-clamp-1">
                                {{ blog.description }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </section>
</template>

<script setup lang="ts">
const props = defineProps(['blogList'])
</script>

<style scoped>

</style>