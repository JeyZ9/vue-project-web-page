<script setup>
import blogList from '../assets/blogs-list/blog.json'

const blog = blogList.blogs.filter(item => item.id);


</script>

<template>
    <Header />
    <main>
        <!-- this is a section one, it cover content show header, description and show container new blog -->
        <section class="grid grid-cols-3 gap-x-[25px] my-6">

            <!-- this div keep image, header, text content and button -->
            <div class="col-span-2 flex flex-col justify-between gap-x-[25px]">
                <!-- image content -->
                <div class="mb-[25px]">
                     <div class="h-[45vh] w-full bg-image bg-cover bg-center"></div>
                </div>

                <!-- title, text content and button -->
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

            <!-- container show new blog -->
            <div class="bg-black h-full w-full px-[20px] py-[35px] flex flex-col justify-between">
                <h1 class="text-[36px] text-yellow-500 font-bold">New</h1>
                <div v-for="(text, i) in blog.slice(0,3)" :key="i" class="flex flex-col justify-between border-b border-[#808080]">
                    <NuxtLink :to="`/blogs/${i + 1}`" class="flex flex-col gap-y-3 pb-7 group">
                        <h2 class="text-white font-bold group-hover:text-orange-400 duration-200 delay-200 ease-in-out">
                            {{ text.name }}
                        </h2>
                        <p class="text-[#808080] line-clamp-2">{{ text.description }}</p>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- This section shows the most viewed blogs. -->
        <section>
            <CardNum :blogList="blog" />
        </section>

        <!-- This section shows the most viewed blogs. -->
        <!-- <section class="grid grid-cols-3 gap-x-[25px] my-[4rem]"> -->
            <!-- <div v-for="(blog, i) in popularBlog" :key="i"> -->
                <!-- <NuxtLink :to="`/blogs/${i + 1}`" class="flex  gap-x-5"> -->
                    <!-- <div class="w-[110px] h-[150px] flex justify-end"> -->
                        <!-- <img :src="`/images/${blog.image}.jpg`" :alt="blog.name" class="h-full w-full object-cover"> -->
                        <!-- <div :style="backgroundImage: url(`/images/${blog.image}.jpg`)"  class="h-full w-auto"></div> -->
                    <!-- </div> -->
                    <!-- blog title and description -->
                    <!-- <div class="w-[250px] flex flex-col gap-y-[25px]"> -->
                        <!-- rank -->
                        <!-- <h2 class="text-[24px] font-bold text-orange-400">{{ blog.rank }}</h2> -->
                        <!-- container for title and description -->
                        <!-- <div class="text-[#505050] text-regular flex flex-col gap-y-[10px]"> -->
                            <!-- <h3 class="font-bold">{{ blog.name }}</h3> -->
                            <!-- <p class="text-regular line-clamp-2"> -->
                                <!-- {{ blog.description }} -->
                            <!-- </p> -->
                        <!-- </div> -->
                    <!-- </div> -->
                <!-- </NuxtLink> -->
            <!-- </div> -->
        <!-- </section> -->
    </main>
</template>

<style lang="css">
    .bg-image{
        background-image: url('../public/images/hello.gif');
        object-fit: cover;
    }
</style>