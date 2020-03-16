<template>
  <div>
  <div class = "hedge">
    <h1> Welcome to Hedge </h1>
  </div>
    <div class = "btn">
      <v-btn class="ma-2" outlined color="indigo" v-on:click="getGames('https://api.the-odds-api.com/v3/odds/?apiKey=7f570b4ff2ebe690715570e96c537c21&sport=upcoming&region=uk')">Get betting data</v-btn>
    </div>
    <v-container fluid>
      <v-data-iterator
        :items="games"
        hide-default-footer
      >

      <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.sports_nice"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-list class="subheading font-weight-bold">
                  <v-list-item>
                    <v-list-item-content>{{item.sport_nice}}</v-list-item-content>
                    <v-list-item-content class="center">{{ item.teams[0] }}</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.teams[1] }}</v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item v-for="site in item.sites">
                      <v-list-item-content>{{site.site_nice}}</v-list-item-content>
                      <v-list-item-content class="center">{{ site.odds.h2h[0] }}</v-list-item-content>
                      <v-list-item-content class="align-end">{{ site.odds.h2h[1] }}</v-list-item-content>
                    </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
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
