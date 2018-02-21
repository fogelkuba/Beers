<template>
    <div class="">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img :src="item.image_url" alt="">
                </div>
                <div class="col-md-9">
                    <h2>{{item.name}}</h2>
                    <h4>{{item.tagline}}</h4>
                    <p>Since: {{item.first_brewed}}</p>
                    <span><strong>IBU:</strong>{{item.ibu}}</span>
                    <span><strong>ABV:</strong>{{item.abv}}%</span>
                    <span><strong>EBC:</strong>{{item.ebc}}</span>
                    <p>{{item.description}}</p>

                    <h4>Best with:</h4>
                    <ul>
                        <li v-for="food in item.food_pairing">
                            {{food}}
                        </li>
                    </ul>

                    <h4>Method:</h4>
                    <ul>{{item.method}}</ul>

                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                item: {title: 'title'}
            }
        },
        created(){
            this.item = this.$store.state.item;
        }
    }
</script>
