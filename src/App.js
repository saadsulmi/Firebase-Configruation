import React, { Fragment, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./store/firebaseContext";
import { useNavigate } from "react-router-dom";
function App() {

  //imported firebaseContextfor authentication

  const {firebase} = useContext(FirebaseContext);

  const [user,setUser]= useState('initial value');
  
  const [name,setName]=useState('saad sulmi');

  const [image,setImage]=useState('saad.jpg')

  const navigate = useNavigate()

  useEffect(()=>{
    //to authenticate in every update

    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

    firebase.firestore().collection('collectyionName').get()
    .then(snapshot=>{
      //get will provide us with a snapshot (a collection of data files)

      const allPost = snapshot.docs.map((product)=>{
        return {
          //give the reust to be stored in all post
        }
      })

      setState(allPost);
    })
    
  })

  const handleSubmit=()=>{
    // to store date in uploading file
    const date= new Date()

    // ctreated a /image/ folder and use jquery to pass image.name and added image to storage using put() 
      firebase.storage().ref(`/image/${image.name}`).put(image)
      .then(({ref})=>{
        // the put method return a reference value and in that we have a getDownloadURL()
        ref.getDownloadURL().then(url=>{
          // with getDownloadURL() we get a url here we are storing url in the firestore db

          firebase.firestore().collection('products').add({
            name,
            url,
            userId : user.uid,
            createdAt: date.toDateString()
          })
        })
        // if we want to navigate after update we can use useNavigate hook
        navigate('/')
      })
  }



  return (
    <React.Fragment>
      {/* to input name */}

      <input onChange={(e)=>setName(e.target.value} type="text" />

      {/* how to upload image files */}

      <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):''}></img>

      {/* set image function store file in a state */}

      <input onChange={(e)=>setImage(e.target.files[0])} type="file" />

      {/* this button will submit it on firebase Storage and return us with a URL */}

      <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

    </React.Fragment>
  );
}

export default App;
