<script lang="ts">

</script>

<template>
    <div class="flex justify-between items-end py-1">
        <h1 class="text-[64px] font-semibold text-end inria-serif-bold">J.</h1>
        <div class="py-[18px]">
            <ul class="flex text-regular">
                <li class="mx-[20px] hover:text-orange-400 ease-in-out duration-200 delay-200">
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                </li>
                <li class="ml-[40px] hover:text-orange-400 ease-in-out duration-200 delay-200">
                    <NuxtLink to="/blogs">
                        Blog
                    </NuxtLink>
                </li>
                <li class="ml-[40px] hover:text-orange-400 ease-in-out duration-200 delay-200">
                    <NuxtLink to="/populars">
                        Popular
                    </NuxtLink>
                </li>
                <li class="ml-[40px] hover:text-orange-400 ease-in-out duration-200 delay-200">
                    <NuxtLink to="/trendings">
                        Trending
                    </NuxtLink>
                </li>
                <li class="ml-[40px] hover:text-orange-400 ease-in-out duration-200 delay-200">
                    <NuxtLink to="/categories">
                        Categories
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

.inria-serif-bold {
  font-family: "Inria Serif", serif;
  font-weight: 700;
  font-style: normal;
}
</style>