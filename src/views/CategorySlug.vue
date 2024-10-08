<template>
    <div id="main-container">
        <div id="container2">
            <div class="breadcrumbs">
                <router-link to="/" class="breadcrumb-link">All categories</router-link>
                <i class="fa fa-chevron-right"></i>
                <p>{{ category.title }}</p>
            </div>
            <div style="display: flex; flex-direction: row; max-width: 1280px; gap: 60px;">
                <div class="side-category">
                    <div class="category-content">
                        <i :class="`fa fa-${category.icon} category-icon`" />
                        <h1 class="title">{{ category.title }}</h1>
                        <p class="timestamp">{{ lastUpdated }}</p>
                    </div>
                    <div class="info-wrapper">
                        <i class="fa fa-info-circle" />
                        <p class="description">{{ category.description }}</p>
                    </div>
                </div>
                <div class="articles-wrapper">
                    <ArticleCard v-for="{ id, title, createdOn } in listArticles" :key="id" :title="title"
                        :date="createdOn" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { clientApi } from '../api';
import { dateDiff } from '../utils';
import ArticleCard from '../components/ArticleCard.vue';

export default {
    name: 'CategorySlug',
    props: ['slug'],
    components: {
        ArticleCard
    },
    data() {
        return {
            articles: [],
            category: {},
        }
    },
    computed: {
        listArticles() {
            return this.articles.filter(({ status }) => status == 'published')
        },
        lastUpdated() {
            const { diff, label } = dateDiff(new Date(), new Date(this.category.updatedOn), 'years');
            return `Last updated ${diff} ${label} ago`
        }
    },
    methods: {
        async init() {
            this.category = await clientApi.getCategoryById(this.slug)
            this.articles = await clientApi.getArticles(this.slug)
        },
    },
    created() {
        this.init();
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#main-container {
    width: 100%;
    height: auto;
    background-color: #FAFAFA;
    font-family: $font-family;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#container2 {
    display: flex;
    max-width: $container-width;
    width: 100%;
    flex-direction: column;
    padding: 20px 60px;
}

.breadcrumbs {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    font-size: 12px;
    line-height: 14.4px;

    i {
        color: $text-gray;
    }

    .breadcrumb-link {
        text-decoration: none;
        color: $green;
    }

    p {
        color: $text-gray;
    }
}

.category-content {
    padding: 40px 20px 20px 20px;
    background-color: white;
    max-width: 280px;
    width: 100%;
    border-radius: 4px 4px 0 0;
    border: 1px solid #E5E5E5;
    border-bottom: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    i {
        color: $green;
    }

    i.category-icon {
        font-size: 43px;
        margin-bottom: 20px;
    }

    h1.title {
        margin: 0;
        font-size: 23px;
        font-weight: 700;
        line-height: 27.6px
    }

    p.timestamp {
        font-size: 11px;
        line-height: 22px;
        font-weight: 400;
        color: $text-gray;
    }


}

.info-wrapper {
    background-color: white;
    max-width: 280px;
    width: 100%;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    padding: 20px 20px 50px 20px;
    display: flex;
    gap: 14px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    i {
        font-size: 20px;
        color: $green;
    }

    p.description {
        color: $text-gray;
        margin: 0;
        font-size: 13px;
    }
}

.articles-wrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>