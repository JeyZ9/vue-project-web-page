<template>
    <Header />
    <main>
        <div class="flex flex-col items-center gap-y-2">
            <h1 class="title-page">Categoies</h1>
            <p class="text-regular text-[#808080]">
                This is The Categories Blogs Page
            </p>
        </div>
        <div class="flex flex-col gap-y-[4rem]">
            <div class="gap-y-[25px] flex flex-col">
                <h1 class="title-field">Software Engineering</h1>
                <Card :blogList="seData" />
            </div>
            <div class="gap-y-[25px] flex flex-col">
                <h1 class="title-field">Cybersecurity</h1>
                <Card :blogList="csData" />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import blog from "@/assets/blogs-list/blog.json";
    // const blogListSE = blog.blogs.filter(item => (item.field == "Software Engineering"));
    // const blogListCS = blog.blogs.filter(item => (item.field == "Computer Science"));

    const { data:seData, error, loading, fetchData:seFetch } = useApi();
    const { data:csData, fetchData:csFetch } = useApi();
    const config = useRequestEvent();
    seFetch("/blogs/field/Software%20Engineering")
    csFetch("/blogs/field/Cybersecurity")
    // fetchData("/blogs/field/Software%20Engineering")
    // fetchField("/DevOps")
</script>