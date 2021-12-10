const app=Vue.createApp({
    data(){
        return{
            
            friends:[
                {
                    id:'1',
                    name:'shreyanshi',
                    phone:'90876 56432',
                    email:'shreyanshi@gmail.com'
                },
                {
                    id:'2',
                    name:'shruti',
                    phone:'90123 45678',
                    email:'shruti@gmail.com'
                },
            ]
        };
    },
});

app.component('friend-contact',{
    template:`
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
    data(){
        return { detailsAreVisible:false, }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible;
        }
    }
});

app.mount('#app');