<script>

import { RouterLink } from 'vue-router';
export default {
    name: "ToyPreview",
    props: ["toy"],
    components: { RouterLink }
}
</script>

<template>
    <article class="toy-preview">
        <h3> {{ toy.name }}</h3>
        <span>{{ toy.price }}</span>
        <RouterLink :to="'/details/' + toy._id">details</RouterLink>
        <RouterLink :to="'/edit/' +toy._id">edit</RouterLink>
        <div>
            <button @click="$emit('removed',toy._id)" class="btn">
                <span>
                    x
                </span>
            </button>
        </div>
    </article>
</template>