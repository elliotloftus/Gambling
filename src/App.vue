<template>
  <v-app >
    <v-toolbar max-height="65"> 
        <v-img src= '@/assets/Hedge.jpg'
            contain
            position="left"
            height="60px"
            width="0px">
        </v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to = "/" > Home </v-btn>
      <v-btn to = "/coronavores" > Coronavores </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <router-view/>  
  </v-app>
</template>

<style>
  .homeTitle {
    height: 150px; 
  }
  /* Set a specific color for each brand */
  /* Facebook */
  .fa-facebook {
      background: #3B5998;
      color: #ffffff!important;
  }
  /* Twitter */
  .fa-twitter {
      background: #55ACEE;
      color: #ffffff!important;
      text-align: center!important;
      align-content: center!important;
  }
  .fa-instagram {
     background: #cd486b;
     color: white!important;
  }
  .pa-3 {
    background: #5A2B81!important;
    color: white!important;
  }
  .social{
    margin-top: 10px;
  }
  h4 {
    font-family: 'Quattrocento Sans', sans-serif;
  }
  h6 {
    font-family: 'Quattrocento Sans', sans-serif;
    margin-top: 10px;
    text-align: center;
  }
.mainApp {
  background: #85bb65!important;
}
</style>