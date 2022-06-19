function navbar(){
   return `<header id="header1">
    <ul id="navservice">
       
        <li class="navserviceListitem">Find a store</li>
        <li class="navserviceListitem">Buying guide</li>
        <li class="navserviceListitem">Contact us</li>
    </ul>
    <div id="navheader">
      <div id="logo_image_div"> <img id="logo_image" src="	https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="reliance digital logo"></div>
      <div id="searchbar"><input type="text"  placeholder="Find your favorite products"> <button type="submit" id="searchbutton"><img id="searchpng" src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png" alt=""></button></div>
      <div class="navheader_right_div"><span>Select your location</span></div>
      <a href="../cart/index.html"><div class="navheader_right_div"><p>Cart</p></div></a>  
      <a href="../login/ragister.html"><div class="navheader_right_div"><p>Login</p></div></a> 
    </div>
  </header>


  <!-- blue navbar -->
  <div id="blue_navbar">
 
     <select name="" id="">
      <option value="">MOBILE&TABLATE
      
      </option>
      </select> 

     <select name="" id="">
       <option value=""> TV&AUDIO</option>
     </select>

     <select name="" id="">
      <option value="">HOMEAPPLIANCES</option> 
     </select>

     <select name="" id="">
       <option value="">COMPUTER</option>
      </select>

     <select name="" id="">
      <option value="">CAMERAS</option> 
     </select>

     <select name="" id="">
      <option value="">KITECHENAPPLIANCES</option>
     </select>

     <select name="" id="">
      <option value="'">PERSONALCARE</option>
      </select>

     <select name="" id="">
      <option value="">ACCESSORIES</option>
      </select>
    
  </div>`
}


export default navbar