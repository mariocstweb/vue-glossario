<script>

export default {
    name: 'WordCard',
    props: { word: Object },
    data: () => ({ 
    }),
    computed: {
        abstract() {
            const abstract = this.word.description.slice(0, 150);

            return abstract + '...';
        },

        pubblicationDate() {
            const date = new Date(this.word.created_at);
            console.log(this.word.links)
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
}
</script>

<template>

    <li class="w-100 card">

        <!-- Sezione titolo e descrizione CON COLLEGAMENTO alla pagina SHOW-->
        <RouterLink :to="{ name: 'ShowPage', params: { slug: word.slug } }" class="nav-link"> 
            <h3 class="text-center" v-text="word.title"></h3>
            <p class="text-center my-3 mt-5">{{ abstract }}</p>
        </RouterLink>
        
        <div class="d-flex justify-content-around"> <!-- Sezione link e tags -->

            <div class="d-flex">
                <strong>Links: </strong>
                <span v-for="link in word.links" class="px-3">
                    {{ link.title }}
                </span>
            </div>

            <div v-if="word.tags" class="d-flex">
                <strong>Tags: </strong>      
                <span v-for="tag in word.tags" :style="{ color: tag.color }" class="px-3">
                    {{ tag.title }}
                </span>
            </div>

        </div>

        <div class="p-3">
                Creato il: {{ pubblicationDate }}
        </div>
    </li>

</template>

<style lang="scss" scoped>
li {
    list-style: none;
    margin: 25px 0;
}

</style>