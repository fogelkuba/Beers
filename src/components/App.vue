<template>
<div id="app">
  <div class="container">
    <div class="navigation">
        <h1>Beers<span>App</span></h1>
        <div class="navigation">
            <router-link class="link" to="/discover">Discover</router-link>
            <router-link class="link" to="/collection">Collection</router-link>
            <router-link class="link" to="/login">Login</router-link>
        </div>
    </div>
  </div>
  <router-view>
  </router-view>
</div>
</template>
