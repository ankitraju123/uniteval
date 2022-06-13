/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function navbar(){
    return `
    <h3>News App</h3>
    <h3>Sign-Up</h3>
    <h3>
      <a href="/worldNews.html">World News</a>
    </h3>
  </div>
  <div id="user-form">
    
<input type="url" placeholder="image" id="user_pic">
<input type="text" placeholder="name" id="user_name">
<input type="text" placeholder="email" id="user_email">
<select id="user_country">
<option>India</option>
<option >China</option>
<option value="">Newzealand</option>
<option value="">USA</option>
<option value="">UK</option>
</select>
<input onsubmit="store()" type="submit" id="submit">

    `
}

export { navbar }  