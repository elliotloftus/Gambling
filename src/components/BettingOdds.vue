<template>
    <div class = "oddsList">
        <h1> Betting Odds </h1>
        <br>
        <v-data-table
            :headers = "headers"
            :items = "contestents"
            dark
            hide-default-footer="true">
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {text: 'Contestents', value: `name`},
                {text: 'Money Line', value: 'plusMinus'},
                {text: 'Over/Under # of McDobules', value: 'OverUnder'}
            ],
            contestents: [
                {name: 'Nate', plusMinus: '-110', OverUnder: '12'},
                {name: 'Frankie', plusMinus: '+140', OverUnder: '10'}
            ]
        }
    },    
}
</script>

<style scoped>
.oddsList {
    width: 50%;
    margin-left: auto;
    margin-right:auto

}
</style>