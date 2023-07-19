
<template>
    <section class="main-layout">
        <h1>toys stuff go here</h1>
        <ToyFilter @filteredTxt="debounceHandler" @filtered="setFilter" />
        <ToyList :toys="toys" @removed="removeToy" />
    </section>
</template>


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
            const filterBy = JSON.parse(JSON.stringify(this.filterBy))
        },
        setFilterByTxt(txt) {
            this.filterBy.txt = txt
            this.filterToys()
        },
        setFilter(filterBy) {
            this.$store.dispatch({ type: 'loadToys', filterBy })
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

