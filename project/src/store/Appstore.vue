<template>
    <div>
{{getCount}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'Appstore',
        components:{

        },
        computed:{
            ...mapGetters(['getCount']),

        },

    }
</script>

<style lang="scss" scoped>

</style>