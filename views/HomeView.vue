<script >

export default {
  data() {
    return {
      post: []
      
    }
   
  },
  
  methods: {
    getPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data => this.post=data)
 .then(data=>console.log(data))
    }
  }

}

;
   

</script>

<template>      
  <main class="container">
    <button @click="getPosts">Show Posts</button>
    <table  v-for="p in post" :key="p.id">
      <!-- <tr >
        <th>id</th>
        <th>title</th>
        <th>body</th>
        </tr> -->
        <tr>
        <td class="tid" >{{ p.id }} </td>
  <td class="title" >{{ p.title }}</td>
  <td class="body">{{ p.body }}</td>
</tr>
  </table>

  </main>
</template>

<!-- import axios from'axios'

 export const PostData=()=>{
const handlesubmit= async ()=>{
    try{
        let result=await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(result.data);
        let response=await axios.post("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)
    }catch(err){
        console.log(alert)  
    }
}
    
    return(
    <>
    <button onClick={handlesubmit}>submit</button>
    </>)
} -->
<style scoped>
table, td {
  border: 3px solid black;
  
}
.title{
  width: 500px;
}
.body{
  width: 500px;
}
.tid{
  width: 100px;
}
</style>