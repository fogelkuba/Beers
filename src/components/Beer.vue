<template>
    <div class="col-md-4">
        <div class="item-card">
            <div class="card-block">
                <h3 class="card-title">{{item.name}}</h3>
                <p>details</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['passedItem'],
        data(){
            return {
                item: {}
            }
        },
        created(){
            this.item = this.passedItem
        }
    }
</script>
