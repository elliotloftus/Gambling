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
            hide-default-footer>
        </v-data-table>
        <br><br>
    <v-card dark>
    <v-card-title>
        <span class="centered">GET GAMBLING</span>
        </v-card-title>
        <v-card-text>
        <v-form>
            <v-container>
            <v-row>
                <v-col
                cols="12"
                md="3"
                >
                <v-text-field
                    v-model="name"
                    label="Your Name"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="3"
                >
                <v-text-field
                    v-model.number=selectedWager
                    label="Wager"
                    :rules="wagerRules"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="3"
                >
                <v-select
                    v-model="selectedContestent"
                    :items="contesters"
                    label="Contestent"
                    required
                ></v-select>
                </v-col>

                <v-col
                cols="12"
                md="3"
                >
                <v-select
                    v-model="selectedBet"
                    :items="possibleBets"
                    label = "Bet Options"
                    required
                ></v-select>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
        </v-card-text>
        <v-card-actions>
            <span class = "centered"> Potential Winnings : {{totalWinnings}}  </span>
            <v-btn class="blue--text darken-1" v-on:click="submitBlog">Submit</v-btn>
            <v-btn class="blue--text darken-1" v-on:click="dialog = false">Cancel</v-btn>
            </span>
            <br>
        </v-card-actions>
        </v-card>
        <br>
        <br>
        <h1> Betting Feed </h1>
        <v-data-table
            :headers = "feedHeaders"
            :items = "bettingFeed"
            dark
            hide-default-footer>
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
                {name: 'Nate', plusMinus: '-180', OverUnder: '9.5'},
                {name: 'Frankie', plusMinus: '+150', OverUnder: '7.5'}
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
            ],
            contesters: [
                'Nate',
                'Frankie'
            ],
            selectedBet: null,
            selectedContestent:null,
            possibleBets: ["Must select wager and contestent first"],
            name:null,
            wagerRules:[
                bet => bet > 5 || 'Wager must be be greater than 5 bucks you pussy',
                bet => Number.isInteger(bet) || 'Wager must be an integer (just round up pussy)'
            ],
            selectedWager:null,
            totalWinnings:null
        }
    },
    methods: {
        submitBlog() {
        
        },
        calculateWinnings(betSelected,wagerSelected) {
            if (betSelected.startsWith('Over') || betSelected.startsWith('Under')) {
                this.totalWinnings = wagerSelected * 2
            }
            else if (betSelected.startsWith('+')) {
                //must be 4 letter string example +120
                const odds = betSelected.substring(1,4)
                console.log("odds are " + odds)
                this.totalWinnings = Math.floor((wagerSelected * (odds/100))) + wagerSelected
            }
            else if (betSelected.startsWith('-')) {
                //must be 4 letter string example +120
                const odds = betSelected.substring(1,4)
                this.totalWinnings = Math.floor((wagerSelected / (odds/100))) + wagerSelected
            }
        }
    },
    watch: {
        selectedContestent: function(thisContestent) {
            for (var item of this.contestents) {
                if (item.name == thisContestent) {
                    this.possibleBets = [item.plusMinus, "Over " + item.OverUnder, "Under " + item.OverUnder]
                }
            }
        },
        selectedBet: function(thisBet) {
            console.log(thisBet)
            this.calculateWinnings(thisBet,this.selectedWager)
        },
        selectedWager: function(thisWager) {
            if (this.selectedBet != null) {
                this.calculateWinnings(this.selectedBet,thisWager)
            }
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
.centered {
    width: 50%;
    margin-left: auto;
    margin-right:auto;
}
</style>