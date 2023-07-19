<script>
export default {
    name: 'ToyFilter',
    data() {
        return {
            filterBy: {
                txt: '',
                inStock: '',
                labels: [],
                sortBy: '',
                direction: 1,
                pageIdx: 0,
                pageSize: 5,
            }
        }
    },
    methods: {
        setFilterTxt() {
            this.$emit('filteredTxt', this.filterBy.txt)
        },
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}
</script>

<template>
    <section class="filter-container">
        <input class="input" type="text" v-model="filterBy.txt" placeholder="Search by name" @keyup="setFilterTxt">
        <select v-model="filterBy.inStock" @change="setFilter">
            <option value=''>all</option>
            <option value='inStock'>in stock</option>
            <option value='outOfStock'>out of stock</option>
        </select>
        <select multiple v-model="filterBy.labels" @change="setFilter">
            <option value="action">action</option>
            <option value="fantasy">fantasy</option>
            <option value="science fiction">science fiction</option>
        </select>
        <select v-model="filterBy.sortBy" @change="setFilter">
            <option value="name">name</option>
            <option value="price">price</option>
            <option value="created">created</option>
        </select>
    </section>
</template>