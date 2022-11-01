<template>
    <div>
        <div>
            <label>
                Title 
                <input type="text" v-model = "title">
            </label>
            <label>
                Priority
                <input type="numder" v-model.number = "priority">
            </label>
            <label>
                Budget
                <input type="numder" v-model.number = "budget">
            </label>
        </div>
    </div>
</template>

<script>
     import {mapActions} from 'vuex'
    export default {
        name: 'AddTaskForm',


        methods: {
            ...mapActions(['addTask']),
            onAdd(){
                this.addTask({
                    title: this.title,
                    priority: this.priority,
                    budget: this.budget
                })
            }
        }
        
        
    }
</script>

<style lang="scss" scoped>

</style>