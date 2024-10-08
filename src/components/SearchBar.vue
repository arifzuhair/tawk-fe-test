<template>
    <div class="search-wrapper">
        <input type="text" class="search-input" v-model="searchTerm" @input="search"
            placeholder="Search for your answers">
        <button class="search-button">
            <i class="fas fa-search"></i>
        </button>
    </div>
</template>

<script>
import { debounce } from '../utils';
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        search: debounce(function () {
            this.$router.push({ path: '/', query: { search: this.searchTerm } })
        }, 500)
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.search-wrapper {
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
}

.search-input {
    border: none;
    padding: 12px 16px;
    border: 1px solid #E5E5E5;
    border-radius: 5px 0 0 5px;
    width: 100%;
    padding: 21px 22px;
    font-family: $font-family;

    &:focus {
        border-color: $green;
        box-shadow: 0 0 5px #03A84E;
        outline: none;
    }

    ::placeholder {
        font-size: 16px;
        line-height: 19.2px;
        color: $text-gray;
    }

}

.search-button {
    height: 60px;
    width: 80px;
    background: $green;
    color: white;
    border: transparent;
    cursor: pointer;
    font-size: 20px;
    border-radius: 0 5px 5px 0;

    &:hover {
        opacity: 0.9;
    }
}
</style>