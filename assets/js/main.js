var app = new Vue({
  el: '#root',
  data: {
    albums: [],
    selected: ""
  },
  mounted() {
    this.getAlbums();
  },
  methods: {
    getAlbums: function(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
          console.log(response.data.response);
          this.albums = response.data.response
          console.log(this.albums);
        })
      },
    }
});
