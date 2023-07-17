<script>
export default {
    data() {
        return {
            toy: null
        }
    },
    created() {
        const { toyId } = this.$route.params
        this.$store
            .dispatch({ type: 'getById', toyId })
            .then(toy => this.toy = toy)
    }
}
</script>

<template>
    <span>
        toy id:
        <pre>
            {{ toy }}
        </pre>
    </span>
</template>