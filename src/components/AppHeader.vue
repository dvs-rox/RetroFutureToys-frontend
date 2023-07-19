<template>
    <section class="app-header flex-center">
        <RouterLink :to="'/home'"><h1>Retro Future Toys</h1></RouterLink>
        <nav>
            <RouterLink :to="'/home'">Home</RouterLink>
            <RouterLink :to="'/toy'">Toys</RouterLink>
            <RouterLink :to="'/about'">About</RouterLink>
        </nav>
    </section>
</template>
<script>
    import { RouterLink } from 'vue-router';
    export default{
        name:'AppHeader'
    }
</script>