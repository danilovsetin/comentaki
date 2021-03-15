import React from 'react'
import NewComment from './NewComment'
import Comments from './Comments'

/*firebase
  .auth()
  .createUserWithEmailAndPassword('danilo.setin@gmail.com','admin123')*/

/*firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.displayName)
    user.updateProfile({displayName: 'Danilo Setin'})    
  }
})*/









function App() {    
  
  return (
    <div>      
      <NewComment />      
      <Comments />      
    </div>
  );
}

export default App;
