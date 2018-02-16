import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations.js';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
    user: {},
    item: {}
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});
