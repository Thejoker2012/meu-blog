<template>
  <q-page class="flex justify-center bg-grey-2">
    <div class="container q-pa-0 items-start">
      <iframe
        allowfullscreen
        frameborder="0"
        height="500"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62181.80666733358!2d-55.95683485249545!3d-13.076170835478393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0f3c6a1d90b3b%3A0xd207602a5617a3b1!2sLucas%20do%20Rio%20Verde%2C%20State%20of%20Mato%20Grosso%2C%2078455-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1598301044434!5m2!1sen!2sus"
        style="border:0;"
        tabindex="0"
        width="100%"
      />

      <div class="row q-ma-none q-px-md">
        <div class="col-sm-12 col-md-6 q-pa-sm">
          <h1 class="text-h4 q-mb-md text-weight-bold">
            Contact Info:
          </h1>
          <div class="q-mb-lg">
            Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel,
            conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.
          </div>
          <div class="q-mb-lg">
            <strong>Address</strong> 8553 N. BEACH ST. STE. 227
          </div>

          <div class="q-mb-lg">
            <strong>Phone</strong> (321) 383-4531
          </div>

          <div class="q-mb-lg">
            <strong>Email</strong> heather@vuetifyjs.com
          </div>

          <div class="q-mb-lg">
            <strong>Fax</strong> (321) 383-4532
          </div>
        </div>

        <div class="col-12 col-md-6 q-mt-lg">

          <q-form @submit.prevent="onSubmit">
            <div class="row q-mb-md">

              <div class="col-12 col-sm-6 q-pa-sm">
                <q-input
                  color="grey-10"
                  filled
                  label="Your name"
                  square
                  v-model="contact.name"
                >

                </q-input>
              </div>
              <div class="col-12 col-sm-6 q-pa-sm">
                <q-input
                  filled
                  color="grey-10"
                  label="Your email"
                  square
                  type="email"
                  v-model="contact.email"
                >

                </q-input>
              </div>

              <div class="col-12 q-pa-sm">
                <q-input
                  filled
                  color="grey-10"
                  label="Your title"
                  square
                  v-model="contact.title"
                >

                </q-input>
              </div>

              <div class="col-12 q-pa-sm">
                <q-input
                  filled
                  color="grey-10"
                  label="Your message"
                  square
                  type="textarea"
                  v-model="contact.message"
                >

                </q-input>
              </div>
              <div class="col-12 col-md-6 q-pa-sm">
                <q-btn
                  class="full-width"
                  color="facebook"
                  stretch
                  label="Enviar mensagem"
                  type="submit"
                ></q-btn>
              </div>

            </div>


          </q-form>
        </div>


      </div>


    </div>
  </q-page>
</template>

<script>
  import Contact from 'src/models/Contact'

  export default {
    name: 'PageIndex',
    data() {
      return {
        contact: new Contact()
      }
    },
    methods: {
      onSubmit() {
        console.log('Formulário enviado', this.contact)
      }
    }
}
</script>
