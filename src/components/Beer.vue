<template>
    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3">
        <div class="item-card">
            <div class="card-block">
                <h3 class="card-title">{{item.name}}</h3>
                <img class="item-image" :src="item.image_url" :alt="item.name">
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
