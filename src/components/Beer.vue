<template>
    <div class="col-md-4 col-sm-6">
        <div class="item-card">
            <div class="card-block">
                <img class="item-image" :src="item.image_url" :alt="item.name">
                <h3 class="card-title">{{item.name}}</h3>
                <hr>
                <p class="item-describtion">"{{item.tagline}}"</p>
                <!-- <p class="item-describtion">{{item.description}}</p> -->
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
