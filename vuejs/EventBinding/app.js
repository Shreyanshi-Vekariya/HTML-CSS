Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullName() {
      console.log("Running Again...");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      //event is default argument with all into about event
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
    },
    submitForm() {
      alert("Form Submitted");
    },
  },
}).mount("#user");

// methods: {
//     add() {
//       this.counter++;
//     },
//     reduce() {
//       this.counter--;
//     },
//   },
