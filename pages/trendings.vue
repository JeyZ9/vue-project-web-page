<template>
    <Header />
    <main>
        <div class="flex flex-col items-center justify-center pb-10">
            <h1 class="title-page">Trendings</h1>
            <p class="text-regular text-[#808080]">
                This is The Trendings Blogs Page
            </p>
        </div>
        <div class="flex flex-col gap-4" v-if="Array.isArray(data) && data.length > 0">
            <div v-for="(blog, i) in data" :key="blog.id" class="grid grid-cols-7 h-[150px] bg-white shadow-lg overflow-hidden">
                <!-- number -->
                <div class="flex items-center justify-center">
                    <p class="text-[15px] text-[#505050]">{{ i+1 }}</p>
                </div>
                <!-- title and description -->
                <div class="col-span-3 flex flex-col items-start gap-y-2 justify-center">
                    <h2 class="text-[20px] font-bold text-[#505050]">
                        {{ blog.name }}
                    </h2>
                    <p class="text-[15px] text-orange-400">
                        {{ blog.description }}
                    </p>
                </div>
                <!-- Total reading -->
                <div class="flex flex-col items-center justify-center text-[#505050]">
                    <h2 class="text-[20px] font-bold">50K+</h2>
                    <p class="text-[15px]">Reading</p>
                </div>
                <!-- image -->
                <div class="w-[155px] overflow-hidden flex items-center justify-center">
                    <img :src="`${config.public.urlImage}/${blog.image}`" :alt="blog.name" class="object-cover">
                </div>
                <!-- button -->
                <div class="flex items-center justify-center">
                    <NuxtLink class="text-[15px] text-[#505050]" :to="`/blogs/${blog.id}`">Read Now</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import blog from '@/assets/blogs-list/blog.json';

    // const blogList = blog.blogs.filter(item => (item.id));
    const { data, error, loading, fetchData } = useApi();
    const config = useRuntimeConfig();
    fetchData("/blogs")

</script>