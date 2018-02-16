<template>
        <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3" @click="passItem()">
            <router-link :to="{ path: `/discover/details`}" >
                <div class="item-card">
                    <div class="card-block">
                        <div class="card-title-container">
                            <h3 class="card-title">{{item.name}}</h3>
                        </div>
                        <img class="item-image" :src="item.image_url" :alt="item.name">
                        <hr>
                        <p class="item-describtion">"{{item.tagline}}"</p>
                    </div>
                </div>
            </router-link>
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
        methods: {
            passItem(){
                this.$store.state.item = this.passedItem;
                console.log(this.item);
                console.log(this.passedItem)
            }
        },
        created(){
            this.item = this.passedItem
        }
    }
</script>
