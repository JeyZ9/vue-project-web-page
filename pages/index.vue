<template>
    <Header />
    <main>
        <!-- Section for the main blog content -->
        <section class="grid grid-cols-3 gap-x-[25px] my-6">
            <div class="col-span-2 flex flex-col justify-between gap-x-[25px]">
                <div class="mb-[25px]">
                    <div class="h-[45vh] w-full bg-image bg-cover bg-center"></div>
                </div>
                <div class="grid grid-cols-2 gap-x-[25px]">
                    <div class="font-bold text-[48px]">
                        <h1>The Bright</h1>
                        <h1>Future of</h1>
                        <h1>Web 3.0?</h1>
                    </div>
                    <div class="flex flex-col justify-between items-start">
                        <p class="text-regular">
                            Web 3.0 promises a decentralized internet with enhanced privacy and user control. This post explores how blockchain and smart contracts are driving the future of the web and the potential impact on industries like finance and social media.
                        </p>
                        <NuxtLink to="/blogs/1" class="tracking-[.2em] bg-orange-400 text-white px-7 py-4 hover:bg-orange-600 ease-in-out duration-200 delay-200">READ MORE</NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Container for new blogs -->
            <div class="bg-black h-full w-full px-[20px] py-[35px] flex flex-col justify-between"  v-if="Array.isArray(data) && data.length > 0">
                <h1 class="text-[36px] text-yellow-500 font-bold">New</h1>
                <!-- <div v-if="loading">Loading...</div>
                <div v-if="error">Error: {{ error.message }}</div> -->
                <!-- <div> -->
                    <div v-for="(item, index) in data.slice(0, 3)" :key="item.id" class="flex flex-col justify-between border-b border-[#808080]">
                        <NuxtLink :to="`/blogs/${item.id}`" class="flex flex-col gap-y-3 pb-7 group">
                            <h2 class="text-white font-bold group-hover:text-orange-400 duration-200 delay-200 ease-in-out">
                                {{ item.name }}
                            </h2>
                            <p class="text-[#808080] line-clamp-2">{{ item.description }}</p>
                        </NuxtLink>
                    </div>
                <!-- </div> -->
            </div>
            <div v-else>
                <p class="text-white">No new blogs available.</p>
            </div>
        </section>

        <!-- Section for most viewed blogs -->
        <section>
            <CardNum :blogList="data" />
        </section>
    </main>
</template>

<script setup>
import blogList from '../assets/blogs-list/blog.json';
import { useApi } from '@/composables/useApi';
// import { useRuntimeConfig } from '#app';

// const config = useRuntimeConfig();
const { data, error, loading, fetchData } = useApi();

// Fetch data from API
fetchData('/blogs');

// Prepare static blog list
// const blog = blogList.blogs.filter(item => item.id);
</script>

<style lang="css">
.bg-image {
    background-image: url('../public/images/hello.gif');
    object-fit: cover;
}
</style>
