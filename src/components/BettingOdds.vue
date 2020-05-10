<template>
<div>
    <div class = "oddsList">
    <head> 
        <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara:300|Quattrocento+Sans" rel="stylesheet"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
        <h1> Betting Odds </h1>
        <v-data-table
            :headers = "oddsHeaders"
            :items = "contestents"
            dark
            hide-default-footer="true">
        </v-data-table>
        <br><br>
        <h1> Betting Feed </h1>
        <v-data-table
            :headers = "feedHeaders"
            :items = "bettingFeed"
            dark
            hide-default-footer="true">
        </v-data-table>
    </div>
    <v-footer class = "social">
    <v-layout row justify-center>
        <div class="social">
            <h4> Follow the action </h4>
            <a href="https://www.facebook.com/groups/2917076215045450"target="_blank" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/coronavores/"target="_blank" class="fa fa-instagram"></a>
        </div>
    </v-layout>
    </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            oddsHeaders: [
                {text: 'Contestants', value: `name`},
                {text: 'Money Line', value: 'plusMinus'},
                {text: 'Over/Under # of McDobules', value: 'OverUnder'}
            ],
            contestents: [
                {name: 'Nate', plusMinus: '-150', OverUnder: '12'},
                {name: 'Frankie', plusMinus: '+140', OverUnder: '10'}
            ],
            feedHeaders: [
                {text: 'Name', value: `name`},
                {text: 'Amount', value: 'amount'},
                {text: 'Contestant', value: 'contestant'},
                {text: 'Bet Placed', value: 'betType'},
                {text: 'Potential Winnings', value: 'winnings'}
            ],
            bettingFeed: [
                {name: 'Pat Maweini', amount: 100, betType: 'Over', contestant: 'Frankie', winnings: 200},
                {name: 'Buster Cherry', amount: 100, betType: '+140', contestant: 'Frankie', winnings: 240},
                {name: 'Craven Moorehead', amount: 100, betType: '-150', contestant: 'Nate', winnings: 150},
                {name: 'Jack Oliver Body', amount: 100, betType: 'Under', contestant: 'Frankie', winnings: 200},
                {name: 'Moe Lester', amount: 100, betType: 'Over', contestant: 'Nate', winnings: 200}
            ]
        }
    },    
}
</script>

<style scoped>
  .fa {
    text-align: center!important;
    padding: 20px!important;
    margin: 9px;
    font-size: 25px!important;
    width: 60px!important;
    height: 60px;
    text-decoration: none;
  }
.oddsList {
    width: 50%;
    margin-left: auto;
    margin-right:auto
}

.fa-instagram {
    background: #cd486b;
    color: black!important;
}

  .fa-facebook {
      background: #3B5998;
      color: #ffffff!important;
  }
.social{
    margin-top: 10px;
    background-color: #85bb65!important;
  }
</style>