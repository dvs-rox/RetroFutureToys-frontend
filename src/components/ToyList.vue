<script>
import ToyPreview from '../components/ToyPreview.vue'
export default {
    name: 'ToyList',
    props: ['toys'],
    components: {
        ToyPreview
    }
}
</script>

<template>
    <section>
        <ul>
            <li v-for="toy in toys">
                <ToyPreview 
                :toy="toy" 
                :key="toy._id"
                @removed="$emit('removed',toy._id)" />
            </li>
        </ul>
    </section>
</template>