<template>
  <v-card>
    <v-toolbar
      card
      color="grey"
      dark
    >
      <v-toolbar-title>New Post</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <v-form>
      <v-autocomplete
        v-model="title"
        chips
        label="Title"
        full-width
        hide-details
        hide-no-data
        hide-selected
        multiple
        single-line
      ></v-autocomplete>
      <v-divider></v-divider>
      <div class="container">
        <img class="image-upload" v-if="imageurl.length > 10" v-bind:src="imageurl">
        <img
          class="image-upload"
          v-else
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZ3Fo6lvvr9t9hi1hs_dG6MnQRmaNh5qO-jdPeWAj8eiGW6mO"
        >
      </div>
      <v-divider></v-divider>
      <v-text-field
        label="Photo URL"
        value="Plans for the weekend"
        v-model="imageurl"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        v-model="message"
        label="Message"
        counter
        maxlength="120"
        full-width
        single-line
      ></v-textarea>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    imageurl: "",
    title: "",
    message: ""
  })
};
</script>

<style scoped>
/* Write your styles for the component in here */
.image-upload {
  width: auto;
  height: 25vh;
  margin: 3vw;
}
</style>