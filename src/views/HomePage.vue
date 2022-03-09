<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Titulo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Asteroides</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
          <ion-button  @click="getAsteroids" color="primary">Lista de asteroides</ion-button>
<ion-list>
    <ion-item v-for="(asteroid,index) in this.listAsteroids" :key="index">
      <ion-label>{{asteroid.name}} / {{asteroid.is_potentially_hazardous_asteroid}}</ion-label>
    </ion-item>
    
</ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import NasaService from "../services/NasaService";
import ResponseData from "../types/ResponseData";

export default defineComponent({
  name: 'HomePage',
   data() {
    return {
      listAsteroids:[]
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem
  },methods:{
        getAsteroids() {
          debugger;
     
      NasaService.getAll()
        .then((response: ResponseData) => {
         debugger
         
          var firstDate =Object.keys(response.data.near_earth_objects)[0];
          this.listAsteroids = response.data.near_earth_objects[firstDate];
          
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
 
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
