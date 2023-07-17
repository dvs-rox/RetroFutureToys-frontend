<script>

import { RouterView } from 'vue-router';
import ToyList from '../components/ToyList.vue';
import ToyFilter from '../components/ToyFilter.vue'
import { utilService } from '../services/util.service';

export default {
    name: 'ToyIndex',
    components:
    {
        ToyList,
        ToyFilter
    },
    data() {
        return {
            filterBy: {
                txt: '',
                inStock: '',
                labels: [],
                sortBy: '',
                direction: 1,
            }
        }
    },
    methods: {
        removeToy(toyId) {
            this.$store
                .dispatch({ type: 'removeToy', toyId })
                .then(() => {
                    //TODO: replace with userMessage
                    console.log('removed toy')
                })
        },
        filterToys() {
            console.log(this.filterBy)
            const filterBy = {...this.filterBy}
            console.log(filterBy)
            this.$store.commit({ type: 'setFilterBy', filterBy })
        },
        setFilterByTxt(txt) {
            this.filterBy.txt = txt
            this.filterToys()
        },
        setFilter(filterBy) {
            console.log(filterBy)
            this.filterBy = filterBy
            this.filterToys()
        }
    },
    created() {
        this.debounceHandler = utilService.debounce(this.setFilterByTxt, 500)
    },
    computed: {
        toys() {
            return this.$store.getters.toysToDisplay
        }
    }
}
</script>

<template>
    <h1>toys stuff go here</h1>
    <ToyFilter @filteredTxt="debounceHandler" @filtered="setFilter" />
    <ToyList :toys="toys" @removed="removeToy" />
</template>