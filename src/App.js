import React from 'react'
import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import { AuthProvider } from './auth'
import SignInUser from './SignInUser'


function App() {    
  
  return (
    <AuthProvider>
      <div>      
        <NewComment />      
        <Comments />      
        <CreateUser />
        <UserInfo />
        <SignInUser />
      </div>
    </AuthProvider>
  );
}

export default App;
