<template>
    <div class = "coronavores">
        <br>
        <h1> All Time Promo Video </h1>
        <br>
        <iframe width="700" height="425" src="https://www.youtube.com/embed/e9dWys05_Gw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br><br><br><br>
      <BettingOdds />
    </div>
</template>

<script>
import BettingOdds from '@/components/BettingOdds'
export default {
    data() {
        return {
        
        }
    },
    components: {BettingOdds}
}
</script>

<style scoped>
.coronavores {
    text-align: center;
    background-color: #85bb65!important;
}
</style>

    
