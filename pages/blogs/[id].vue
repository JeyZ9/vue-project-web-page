<template>
    <Header />
    <main>
        <div v-for="item in blog">
            <!-- Title -->
            <div class="border-b border-[#808080] mt-10">
                <h1 class="text-[48px] font-bold text-black mb-5">{{ item.name }}</h1>
            </div>
            
            <!-- major and date -->
            <div class="border-b border-[#808080] text-[#808080] flex justify-between py-5 items-center">
                <p>{{ item.field }}</p>
                <p>4 min read · {{ formattedDate }}</p>
            </div>
            <!-- Image -->
            <div class="h-[369px] w-full overflow-hidden my-10">
                <img :src="`/images/blogs/${item.image}.jpg`" :alt="item.name" class="w-full h-full object-cover">
            </div>
            
            <!-- description -->
            <div class="pb-10 border-b border-[#808080]">
                <p>{{ item.description }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, rerum. Sequi aut mollitia, facere vel laboriosam nisi maxime fuga numquam, facilis velit explicabo consectetur totam ut consequuntur ipsa nulla, asperiores natus dolorum officiis voluptatibus sed repellat. Officiis culpa aperiam officia quos, voluptate aliquam alias, perferendis, odio earum recusandae qui deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci non odit itaque ipsum maxime delectus assumenda nihil fuga, aliquid consequuntur libero eum incidunt officiis veniam atque consequatur recusandae officia. Deserunt nemo labore quis fugit provident officia atque unde explicabo dolorum quam, optio doloribus ratione aperiam commodi est, eligendi delectus ex. Deleniti, minima repudiandae. Error voluptates sapiente magni dignissimos non. Nemo at accusantium quos doloremque in. Odio magnam ratione veritatis eos quia fuga laborum, quam modi, dolores, repudiandae a harum ab minus. Cum blanditiis nostrum minus, velit hic veritatis voluptatibus sit enim. Quo natus totam odio quibusdam, veritatis aliquid dolor? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse vel minus eveniet neque autem? Laudantium, corporis dolorem nisi accusantium ducimus commodi atque numquam, consequatur molestias fugiat, temporibus modi. Voluptatem dolores adipisci commodi id iste et fugit eligendi numquam nisi quisquam quod eos architecto corporis obcaecati praesentium, sunt fuga culpa maiores illo nulla, dolorum possimus? Deserunt eum, accusamus harum natus architecto ut eius, cumque tempore possimus voluptates facere sapiente porro neque aliquam doloribus itaque? Pariatur nemo tempore, placeat fugit eligendi esse sed velit doloremque quas eaque tempora, veritatis magni. Non accusantium cumque quibusdam quisquam libero in fugiat inventore minus alias aut at vitae, vero, distinctio eaque consectetur, delectus placeat quidem praesentium neque? Inventore vel veritatis debitis quasi? Aperiam dolorum molestias facere tempora, numquam deserunt eius inventore ex natus velit delectus, cum alias odit tempore ad magni sapiente a? Dignissimos mollitia ut eius adipisci architecto possimus est, quam atque soluta, necessitatibus eligendi eaque commodi animi dolor quod expedita deleniti sunt voluptatibus? Nihil natus delectus in explicabo accusamus nulla facere minus, magni et? Modi minima voluptatibus dolorum totam quaerat excepturi perferendis? A, officiis atque reiciendis quidem asperiores fugit veritatis laboriosam voluptates quos nemo distinctio expedita illum dolorum esse harum vitae ducimus facere quo voluptatem aut vel voluptatibus doloremque! Blanditiis eum sapiente asperiores adipisci nisi nobis impedit perspiciatis sint? Neque, facilis alias dolores commodi in provident tempore vitae possimus ipsum autem illo corporis. Id pariatur harum maiores beatae consectetur, deserunt aliquam quaerat assumenda perspiciatis tempora officia fugiat. Mollitia, provident quis! Repellendus adipisci eum distinctio nam laudantium dolore quisquam aut pariatur delectus excepturi ad doloribus, eveniet ullam aliquid quibusdam sit assumenda, iusto eos provident laboriosam et sint voluptatibus minima. Recusandae exercitationem ipsum nobis incidunt blanditiis ea facilis aspernatur totam consequuntur repellendus excepturi similique rerum, aliquid tempora mollitia, eveniet commodi impedit saepe distinctio? Consequatur, libero?</p>
            </div>
            
            <!-- blog and button -->
            <div class="mt-10 flex flex-col items-center justify-center gap-y-10">
                <Card :blogList="blogInterview.slice(0, 4)" />
                <button class="border border-[#808080] rounded-full px-10 py-1">See all</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import blogList from '@/assets/blogs-list/blog.json';
    const route = useRoute();

    const id = route.params.id;
    // console.log(route.params.id);

    const blog = blogList.blogs.filter(item => (item.id == Number(id)));

    const blogInterview = blogList.blogs.filter(item => (item.id % 2 == 0 && item.id != Number(id)));

    // format date
    const date = new Date();
    const formattedDate:string = date.toDateString();

    // console.log(blog);


</script>