<template>
  <div>
    <v-app-bar
      color="deep-purple accent-1" dense dark flat height="70px" tile>
    
    <v-img src="../assets/logo.png" max-height="60" max-width="60" contain />
    <v-spacer></v-spacer>
        
    <v-toolbar-items>
        <v-btn text>Home</v-btn>
        <v-btn text>About</v-btn>
        <v-btn text>Product</v-btn>
        <v-btn text>FAQs</v-btn>
        <v-btn text  v-on:click="redirect('/login')" id="login">Login</v-btn>
        <v-btn text  v-on:click="redirect('/register')" id="register">Sign Up</v-btn>
    </v-toolbar-items>

    </v-app-bar>
  </div>
</template>