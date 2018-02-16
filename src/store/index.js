import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations.js';
import * as types from './types.js';

Vue.use(Vuex);

const state = {
    user: {}
};

export default new Vuex.Store({
    state,
    mtations,
    actions
});
