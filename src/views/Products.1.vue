<template>
  <div class="products">
      <div class="container">

        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>Products Page</h3>
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/products.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
      </div>


      <hr>

      <h3>Basic CRUD (create/read/update/delete) in Firebase and Vue</h3>

      <div class="product-test">
          <div class="form-group">
            <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
          </div>

          <div class="form-group">
            <input type="text" @keyup.enter="saveData"  placeholder="Price" v-model="product.price" class="form-control">
          </div>

          <div class="form-group">
              <button @click="saveData" class="btn btn-primary">Save Data</button>
          </div>
      </div>

      <h3>Products List</h3>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,index) in products" :key="index">
              <td>{{product.data().name}}</td>
              <td>{{product.data().price}}</td>
              <td>
                <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> 

      <!-- Modal -->
      <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
              </div>

              <div class="form-group">
                <input type="text"  placeholder="Price" v-model="product.price" class="form-control">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
            </div>
          </div>
        </div>
      </div>   
      


  </div>
</template>

<script>
import {db} from '../firebase.js';
export default {
  name: "Products",

  props: {
    msg: String
  },

  data(){
    return {
      products:[],
      product:{
        name:null,
        price:null,
      },
      activeItem: null
    }
  },

  methods:{
    watcher(){
      db.collection("products").onSnapshot((querySnapshot) => {
          this.products = [];
          querySnapshot.forEach((doc)=> {
              this.products.push(doc);
          });
      });
      
    },
    updateProduct(){
      db.collection("products").doc(this.activeItem).update(this.product)
      .then(() => {
        $('#edit').modal('hide')
        //this.reset();
        //this.readData();
        this.watcher();
          console.log("Document successfully updated!");
      })
      .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });

    },
    editProduct(product){
      $('#edit').modal('show')
      this.product = product.data();
      this.activeItem = product.id;
    },
    deleteProduct(id){
      if(confirm('Are you sure ?')){
        db.collection("products").doc(id).delete().then(() => {
            //this.reset();
            //this.readData();
            this.watcher();
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
      }else{

      }
      
    },
    saveData(){
      db.collection("products").add(
          this.product
      )
      .then((docRef) => { // change word 'function' to '=>'
          
          //this.reset();
          //this.readData();
          this.watcher();
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },
    reset(){ // function for clear inputs after save from searching google
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    readData(){
      db.collection("products").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              //console.log(doc.id, " => ", doc.data());
              this.products.push(doc);
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }
    
  },
  created(){
    this.readData()
  }
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>