<template>
    <div class="card-wrapper" @click="goTo">
        <div class="icon-wrapper">
            <i :class="renderIcon" />
        </div>
        <p id="title">{{ title }}</p>
        <p id="article-count">{{ articleCount }} articles</p>
        <p id="last-update">{{ lastUpdated }}</p>
    </div>
</template>
<script>
import { dateDiff } from '../utils';
export default {
    name: 'CategoryCard',
    props: {
        id: String,
        title: String,
        icon: String,
        articleCount: [Number, String],
        updatedAt: String,
    },
    computed: {
        renderIcon() {
            return `fa fa-${this.icon}`
        },
        lastUpdated() {
            const { diff, label } = dateDiff(new Date(), new Date(this.updatedAt), 'days');
            return `Last updated ${diff} ${label} ago`
        }
    },
    methods: {
        goTo() {
            this.$router.push({
                name: 'CategorySlug',
                params: {
                    slug: this.id
                }
            })
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.card-wrapper {
    cursor: pointer;
    font-family: $font-family;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 315px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    padding: 35px 32px;
    gap: 20px;

    #title {
        margin: 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: $text-black;
    }

    #article-count {
        margin: 0;
        font-weight: 400;
        font-size: 13px;
        line-height: 15.6px;
        color: $green;
    }

    #last-update {
        margin: 0;
        font-weight: 400;
        font-size: 11px;
        line-height: 13.2px;
        color: $text-black;
    }
}

.icon-wrapper {
    font-size: 55px;
    color: $green;
}
</style>
