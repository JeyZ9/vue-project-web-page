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
            <CardNum :blogList="seData" />
        </div>
        <div class="mt-10">
            <h1 class="title-field">Cybersecurity</h1>
            <CardNum :blogList="csData" />
        </div>
    </main>
</template>

<script setup lang="ts">
    // import blog from '@/assets/blogs-list/blog.json'

    // const blogListSE = blog.blogs.filter(item => (item.field == "Software Engineering"));
    // const blogListCS = blog.blogs.filter(item => (item.field == "Computer Science"));
    const { data:seData, error, loading, fetchData:seFetch } = useApi();
    const { data:csData, fetchData:csFetch } = useApi();
    const config = useRequestEvent();
    seFetch("/blogs/field/Software%20Engineering")
    csFetch("/blogs/field/Cybersecurity")
</script>