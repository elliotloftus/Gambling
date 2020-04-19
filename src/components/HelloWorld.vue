<template>
  <div>
  <div class = "hedge">
    <h1> Welcome to Hedge </h1>
  </div>
    <div class = "btn">
      <v-btn class="ma-2" outlined color="indigo" v-on:click="getGames('https://api.the-odds-api.com/v3/odds/?apiKey=7f570b4ff2ebe690715570e96c537c21&sport=upcoming&region=uk')">Get betting data</v-btn>
    </div>

    <ListOfGames v-if="games" :gamesPassed="games"/>
  </div>
</template>

<script>
import ListOfGames from '@/components/ListOfGames'
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
    async getGames(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        this.games =json.data;
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
