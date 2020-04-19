<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="gamesPassed"
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
                    <v-list-item v-for="site in item.sites" :key ="site.site_key">
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
export default {
  name: 'ListOfGames',
  props: {
    gamesPassed: {
      type: Array,
      default: () => {}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
