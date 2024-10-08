<template>
    <div id="container">
        <div id="category-wrapper">
            <CategoryCard v-if="listCategories.length > 0"
                v-for="{ id, title, icon, totalArticle, updatedOn } in listCategories" :key="id" :title="title"
                :icon="icon" :articleCount="totalArticle" :updatedAt="updatedOn" :id="id" />
        </div>
    </div>
</template>
<script>
import { clientApi } from '../api';
import CategoryCard from '../components/CategoryCard.vue';

export default {
    name: 'Category',
    components: {
        CategoryCard
    },
    data() {
        return {
            categories: []
        }
    },
    computed: {
        listCategories() {
            return this.categories.filter(({ enabled }) => enabled)
        }
    },
    watch: {

    },
    methods: {
        async callCategoryApi() {
            this.categories = await clientApi.getCategories()
        },
        async searchCategory() {
            const res = await clientApi.getCategoryById(this.$route.query.search)
        }
    },
    async created() {
        this.callCategoryApi()
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #FAFAFA;
    padding: 60px 0;
}

#category-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    max-width: $container-width;
}
</style>