import React from 'react';

function Contentlog() {
  return (
    <div>
        <form class="edit-form form-Editor" action="/" >
          <fieldset>
            <input type="text" placeholder="Please Enter your Name" />            
            <input type="email" placeholder="Please Enter your Email" />                    
            <input type="password" placeholder="Please Enter your password" />
            <input type="submit" value="Login"/>
            <input type="submit" value="Create New Account"/>
          </fieldset>
        </form>
    </div>
  )
};

export default Contentlog;