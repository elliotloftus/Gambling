<template>
  <div>
  <div class = "hedge">
    <h1> Welcome to Hedge </h1>
  </div>
    <div class = "btn">
      <v-btn class="ma-2" outlined color="indigo" v-on:click="getGames()">Get betting data</v-btn>
    </div>

    <ListOfGames v-if="games" :gamesPassed="games"/>
  </div>
</template>

<script>
import ListOfGames from '@/components/ListOfGames'
import * as axios from 'axios'
import  {bettingApi}  from '@/config'
export default {
  name: 'MainPage',
  data() {
    return {
      games: undefined,
    }
  },
  props: {
    msg: String
  },
  components: { ListOfGames },
  methods: {
    async getGames() {
      try {
        const response = await axios.get(bettingApi);
        this.games = response.data.data;
        console.log(this.games);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  text-align: center;
  margin-top: 10px;
}
.hedge {
  text-align: center;
  margin-top: 10px;
}
</style>
