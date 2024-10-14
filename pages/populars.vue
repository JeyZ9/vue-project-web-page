<template>
    <Header />
    <main>
        <div class="flex flex-col items-center gap-y-2">
            <h1 class="title-page">Populars</h1>
            <p class="text-regular text-[#808080]">
                This is The Popular Blogs
            </p>
        </div>
        <div class="mt-10">
            <h1 class="title-field">Software Engineering</h1>
            <CardNum :blogList="blogListSE" />
        </div>
        <div class="mt-10">
            <h1 class="title-field">Computer Science</h1>
            <CardNum :blogList="blogListCS" />
        </div>
    </main>
</template>

<script setup lang="ts">
    import blog from '@/assets/blogs-list/blog.json'

    const blogListSE = blog.blogs.filter(item => (item.field == "Software Engineering"));
    const blogListCS = blog.blogs.filter(item => (item.field == "Computer Science"));
</script>