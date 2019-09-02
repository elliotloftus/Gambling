<template>
  <div>
  <div class = "hedge">
    <h1> Welcome to Hedge </h1>
  </div>
    <div class = "btn">
      <v-btn class="ma-2" outlined color="indigo" v-on:click="getData('https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&apiKey=7f570b4ff2ebe690715570e96c537c21')">Get betting data</v-btn>
    </div>
    <v-layout wrap class = "mt-10">
      <v-flex xs12 sm4 v-for="game in games" v-if="game.sites.length>0">
        <div class = "cen"><b>{{ game.teams[1] + ' at ' + game.teams[0]}} </b> </div>
        {{ }}
        <div class = "odds">
          <v-flex v-for="site in game.sites">
            {{site.site_key + ' ' + site.odds.h2h[0] + ' ' + site.odds.h2h[1]}}
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
  </div>
  </div>
</template>

<script>
import { METHODS } from 'http';
export default {
  name: 'HelloWorld',
  data() {
    return {
      games: [],
    }
  },
  props: {
    msg: String
  },
  methods: {
    async getData(url) {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  text-align: center;
  margin-top: 10px;
}
.hedge {
  text-align: center;
  margin-top: 10px;
}

.heros {
  margin-top: 20px;
}
.cen {
  margin-top: 20px;
  text-align: center;
}
.odds {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
