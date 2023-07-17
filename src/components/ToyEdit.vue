        <!-- _id:
        name: '',
        price: 0,
        labels: [],
        createdAt: Date.now(),
        inStock: false, -->

<template >
    <form @submit.prevent="saveToy" v-if="toy">
        <input type="text" v-model="toy.name">
        <input type="number" v-model="toy.price">
        <input type="checkbox" v-model="toy.inStock">
        <select multiple v-model="toy.labels">
            <option value="action">action</option>
            <option value="fantasy">fantasy</option>
            <option value="science fiction">science fiction</option>
        </select>
        <pre>
        {{ toy }}
        </pre>
        <button type="submit">Apply</button>
    </form>
</template>

<script>
export default {
    created() {
        const { toyId } = this.$route.params
        if (toyId) {
            this.$store
                .dispatch({ type: 'getById', toyId })
                .then(toy => this.toy = { ...toy })
        }
        else {
            this.toy = this.$store.getters.getEmptyToy
        }
    },
    data() {
        return {
            toy: null
        }
    },
    methods: {
        saveToy() {
            this.$store
                .dispatch({ type: 'saveToy', toy: this.toy })
                .then(() => {
                    this.$router.push('/toy/')
                })
                .catch(err => {
                    console.log('cannot add/update toy')
                })
        }
    }
}
</script>