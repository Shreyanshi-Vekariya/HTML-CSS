Vue.createApp({
  data() {
    return {
      name: "Shreyanshi Vekariya",
      age: 22,
      image_path:
        "https://www.pngitem.com/pimgs/m/226-2260470_transparent-admin-icon-png-admin-logo-png-png.png",
    };
  },
  methods: {
    calculate_age() {
      return this.age + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
}).mount("#myintro");
