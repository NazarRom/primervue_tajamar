<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/musica">Musica</router-link>
                </li>
                <li>
                    <router-link to="/cine">Cine</router-link>
                </li>
                <li>
                    <router-link to="/hooks">Hooks</router-link>
                </li>
                <li>
                    <router-link to="/directivas">Directivas</router-link>
                </li>
                <li>
                    <router-link to="/conmutada">Conmutada</router-link>
                </li>
                <li>
                    <router-link to="/filter">Filtro</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"MenuComponent"
}
</script>

<style scoped>
ul#menu li {
    display: inline;
    margin-left:2%;
}
</style>