<template>
    <div class="item">
        <i class="fa fa-file-alt article-icon" />
        <div class="content">
            <h3>{{ title }}</h3>
            <p>{{ updatedSince }}</p>
        </div>
        <i class="fa fa-chevron-right chevron-extend" />
    </div>
</template>

<script>

export default {
    name: 'ArticleCard',
    props: {
        id: String,
        icon: String,
        title: String,
        date: String,
    },
    computed: {
        renderIcon() {
            return `fa fa-${this.icon}`
        },
        updatedSince() {
            if (!this.date) return 'Recently'
            const date = new Date(this.date)
            const formatted = new Intl.DateTimeFormat('en-US', { day: 'numeric', year: 'numeric', month: 'long', weekday: 'long' }).format(date)
            return `Updated ${formatted}`
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.item {
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 22px 40px;
    align-items: center;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    cursor: pointer;
}

.article-icon {
    color: $green;
    font-size: 22px;
}

.chevron-extend {
    font-size: 18px;
    color: $green;
}

.content {
    margin-left: 24px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: $font-family;
    color: $text-black;

    h3 {
        margin: 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }

    p {
        margin: 0;
        color: $text-gray;
        font-weight: 400;
        font-size: 11px;
        line-height: 22px;
    }
}
</style>
