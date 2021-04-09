var app = new Vue({
  el: '#root',
  data: {
    albums: []
  },
  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
          console.log(response.data.response);
          this.albums = response.data.response
          console.log(this.albums);
        })
  },

});
