<template>
  <q-page class="flex justify-center bg-grey-2">
    <div class="row container no-scroll no-scrollbar" >
      <div class="column col-12 col-md-6 bg-radial-startis items-center">
        <q-img
          alt="Minha foto de perfil, onde estou ao centro com fones de ouvido."
          :src="require('src/assets/prof.png')"
          contain
          width="90%"
          height="100%"
        ></q-img>
      </div>
      <div class="column col-12 col-md-6 q-pa-md bg-grey-3 justify-center">
       <div class="q-mx-lg q-my-sm">
         <div class="text-h4 q-mb-lg">
           {{profile.about}}<br>
         </div>
         <p class="text-subtitle1">{{profile.apresentation}}</p>
         <p class="text-subtitle1">{{profile.small_motivational_phrase}}</p>
       </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      profile:{
        photo:'',
        about:'Olá, me chamo Iago...',
        role:'Sou Desenvolvedor.',
        apresentation:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae esse, vel commodi rem similique totam quis, corrupti rerum veritatis numquam ipsa, nam explicabo nulla! Accusamus deserunt repellendus perspiciatis nulla.',
        small_motivational_phrase:'Nulla, porro? Quos architecto vero itaque temporibus in illo nam perferendis ex nemo distinctio?'
      }
    }
  }
}
</script>
