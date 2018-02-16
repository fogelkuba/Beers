<template>
    <div class="">
        <div class="container">
            <h2>Discover</h2>
        </div>
        <div class="col-md-12">
            <div class="row">
                <Item
                    v-for="(item, index) in items[0]"
                    :key="index"
                    :passed-item="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Item from './Item.vue';

    export default {
        data(){
            return {
                items: []
            };
        },
        watch:{

        },
        methods: {
            fetchItems(){
                this.items = [];
                fetch('https://api.punkapi.com/v2/beers', {method: 'GET'})
                .then(response => response.json())
                .then(json => this.items.push(json));
                // console.log(this.items);
            }
        },
        created(){
            this.fetchItems();
        },
        components: {
            Item
        }
    }
</script>
