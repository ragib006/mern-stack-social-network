import React from 'react'

import {Link} from 'react-router-dom'


const Home = () => {
  
 return(

      <>



<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/" style={{fontWeight:'bold',fontSize:'27px',marginRight:'25%'}}>Timir Network</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{paddingRight:'20px',paddingLeft:'20px',color:'gray'}} ><i className="fas fa-home-alt" style={{fontSize:'25px'}}></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{paddingRight:'20px',paddingLeft:'20px',color:'gray'}}><i className="fas fa-comment-dots" style={{fontSize:'25px'}}></i></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" style={{paddingRight:'20px',paddingLeft:'20px',color:'gray'}}><i className="fas fa-bell" style={{fontSize:'25px'}}></i><span style={{display:'block',marginTop:'-45px',marginLeft:'20px',color:'gray'}}>1</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" style={{paddingRight:'20px',paddingLeft:'20px',color:'gray',marginRight:'50px'}}><i className ="fas fa-users" style={{fontSize:'25px'}}></i></a>
        </li>



        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'gray'}}>
             <img className="rounded-circle" style={{height:'35px',width:'35px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1663669110/smallbbbimage1_t59dxd.jpg" />Ragib Hasan
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



<div className="bodysection">
  <div className="row">

     <div className="col-md-3">



   {/*Start leftbar*/}

        <div className="right-menu-item">

  

           <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>

            <Link style={{textDecoration:'none'}} to='/profile'>
             <span style={{marginLeft:'36px'}}>
             <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />
             <span style={{marginLeft:'10px',fontSize:'18px',color:'black'}}>Ragib Hasan</span>
            </span>

            </Link>

          </div>



          

          <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
             <span style={{marginLeft:'40px'}}>
             <i style={{fontSize:'25px'}} className="fad fa-user-friends"></i>
             <span style={{marginLeft:'14px',fontSize:'18px'}}>Friends</span>
            </span>
          </div>


          <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
             <span style={{marginLeft:'40px'}}>
             <i style={{fontSize:'25px'}} className="fas fa-users"></i>
             <span style={{marginLeft:'14px',fontSize:'18px'}}>Groups</span>
            </span>
          </div>


          <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
             <span style={{marginLeft:'42px'}}>
              <i style={{fontSize:'25px'}} className="fas fa-comments"></i>
             <span style={{marginLeft:'14px',fontSize:'18px'}}>Messenger</span>
            </span>
          </div>


          <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
             <div style={{marginLeft:'44px'}}>
              <i style={{fontSize:'27px'}} className="fas fa-paste"></i>
             <span className="icontext" style={{marginLeft:'14px',fontSize:'18px'}}>Pages</span>
            </div>
          </div>


        
      
      

       <div className="shortcat" style={{marginTop:'30px'}}>
              
              <div className="tai" style={{borderBottom:'1px solid gray',paddingBottom:'20px'}}>
              <span style={{width:'100%',marginLeft:'44px',fontSize:'18px',fontWeight:'bold',color:'gray'}}>Your Shortcuts Pages</span>
              </div>




         
        {/*Start short cut page scroll*/}
          <div className="scrollsectionpage">

             <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>

               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>Petuk</span>

               </span>

             </div>


              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658396636/index45_b9di5g.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>Criclbazz</span>
               </span>

             </div>


           
              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>CricK info</span>
               </span>

             </div>


                <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>CricK info</span>
               </span>

             </div>


             <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>CricK info</span>
               </span>

             </div>


              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>CricK info</span>
               </span>

             </div>


              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>CricK info</span>
               </span>

             </div>


              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
  
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'35px',width:'40px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg" />
               <span style={{marginLeft:'10px',fontSize:'18px'}}>CricK info</span>
               </span>

             </div>

         
           </div>


  
   {/*End shortcut page scroll*/}

               


           </div>
      
          
 
        </div>


   {/*end leftbar*/}




     </div>

      
     <div className="col-md-6">




   {/*Start middle*/}

        <div className="middle-scroll">

             <div className="card" style={{marginTop:'20px',marginBottom:'20px'}}>

                 <div className="maindd" style={{padding:'10px 10px 10px 10px'}}>

                    <div className="first" style={{width:'70px',float:'left',marginLeft:'10px'}}>
                          <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />    
                    </div> 

                    <input  className="form-control" style={{width:'500px',border:'3px solid white',borderRadius:'50px',paddingLeft:'40px'}} type="text" placeholder="What's on your mind ?"/>

                    
                    <div className="shareoption">

                    
                      <div className="imageshare" style={{marginTop:'20px',marginLeft:'15px',width:'400px',}}> 


                       <label htmlFor="file" className="shareoption" style={{width:'200px'}}>
                      
                        <span><i className="fas fa-images" style={{fontSize:'25px',color:'green'}}></i></span>

                          <span style={{fontSize:'17px',marginLeft:'10px',color:'gray'}}>Upload Image</span>

                        <input  style={{display:'none'}} type="file" id="file" accpet=".png,.jpeg,.jpg"/>

                      </label>





                       <label htmlFor="file" className="shareoption" style={{width:'200px'}}>
                      
                        <span><i className="fas fa-smile" style={{fontSize:'25px',color:'green'}}></i></span>

                          <span style={{fontSize:'17px',marginLeft:'10px',color:'gray'}}>Felling/Activity</span>

                        <input  style={{display:'none'}} type="file" id="file" accpet=".png,.jpeg,.jpg"/>

                       </label>


                        



                       </div>














                  



                    </div>




                 </div>

               </div>










             <div className="card" style={{marginTop:'20px',marginBottom:'10px'}}>

                 <div className="maindd" style={{padding:'10px 10px 10px 10px'}}>
                       
            
                          <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />  

                          <span style={{marginLeft:'20px',fontWeight:'bold'}}>Alor Pothe</span>  


                          <span style={{marginLeft:'20px',color:'gray'}}>15 min ago</span> 

                           <div class="textcontent" style={{padding:'10px 10px 10px 10px',borderBottom:'1px solid gray'}}>
                           <p style={{textAlign:'justify'}}>Strategic Content is OPAC's newest unit, focusing on brand journalism and long form storytelling. The group was created to utilize the creative work of Marketing Communications to create content that positions the University favorably in strategic areas, and increases overall affinity for the Notre Dame brand. These pieces will highlight the life and work of the University's faculty and students in an array of disciplines. The University's central digital platforms - including nd.edu and the Notre Dame presence on social media accounts including Facebook, Twitter, Instagram, and YouTube - are managed by Strategic Content. </p>
                           
                           <span style={{color:'gray'}}>2 People like</span>
                           <span style={{marginLeft:'20px',color:'gray'}}>1 comments</span>
                       
                          </div>

                           <div className="likedislick" style={{marginTop:'10px'}}>

                            <span><i style={{fontSize:'25px',color:'blue'}} className="fal fa-thumbs-up"></i></span>

                             <span><i style={{fontSize:'25px',color:'blue',marginLeft:'20px'}} className="fal fa-comment-alt"></i></span>

                           </div>
                    

                 </div>

               </div>




                <div className="card" style={{marginTop:'20px',marginBottom:'10px'}}>

                 <div className="maindd" style={{padding:'10px 10px 10px 10px'}}>
                       
            
                          <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />  

                          <span style={{marginLeft:'20px',fontWeight:'bold'}}>Alor Pothe</span>  


                          <span style={{marginLeft:'20px',color:'gray'}}>15 min ago</span> 

                           <div class="textcontent" style={{padding:'10px 10px 10px 10px',borderBottom:'1px solid gray'}}>
                           <p style={{textAlign:'justify'}}>Strategic Content is OPAC's newest unit, focusing on brand journalism and long form storytelling. The group was created to utilize the creative work of Marketing Communications to create content that positions the University favorably in strategic areas, and increases overall affinity for the Notre Dame brand. These pieces will highlight the life and work of the University's faculty and students in an array of disciplines. The University's central digital platforms - including nd.edu and the Notre Dame presence on social media accounts including Facebook, Twitter, Instagram, and YouTube - are managed by Strategic Content. </p>
                           
                           <span style={{color:'gray'}}>2 People like</span>
                           <span style={{marginLeft:'20px',color:'gray'}}>1 comments</span>
                       
                          </div>

                           <div className="likedislick" style={{marginTop:'10px'}}>

                            <span><i style={{fontSize:'25px',color:'blue'}} className="fal fa-thumbs-up"></i></span>

                             <span><i style={{fontSize:'25px',color:'blue',marginLeft:'20px'}} className="fal fa-comment-alt"></i></span>

                           </div>
                    

                 </div>

               </div>





                <div className="card" style={{marginTop:'20px',marginBottom:'10px'}}>

                 <div className="maindd" style={{padding:'10px 10px 10px 10px'}}>
                       
            
                          <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />  

                          <span style={{marginLeft:'20px',fontWeight:'bold'}}>Alor Pothe</span>  


                          <span style={{marginLeft:'20px',color:'gray'}}>15 min ago</span> 

                           <div class="textcontent" style={{padding:'10px 10px 10px 10px',borderBottom:'1px solid gray'}}>
                           <p style={{textAlign:'justify'}}>Strategic Content is OPAC's newest unit, focusing on brand journalism and long form storytelling. The group was created to utilize the creative work of Marketing Communications to create content that positions the University favorably in strategic areas, and increases overall affinity for the Notre Dame brand. These pieces will highlight the life and work of the University's faculty and students in an array of disciplines. The University's central digital platforms - including nd.edu and the Notre Dame presence on social media accounts including Facebook, Twitter, Instagram, and YouTube - are managed by Strategic Content. </p>
                           
                           <span style={{color:'gray'}}>2 People like</span>
                           <span style={{marginLeft:'20px',color:'gray'}}>1 comments</span>
                       
                          </div>

                           <div className="likedislick" style={{marginTop:'10px'}}>

                            <span><i style={{fontSize:'25px',color:'blue'}} className="fal fa-thumbs-up"></i></span>

                             <span><i style={{fontSize:'25px',color:'blue',marginLeft:'20px'}} className="fal fa-comment-alt"></i></span>

                           </div>
                    

                 </div>

               </div>




                <div className="card" style={{marginTop:'20px',marginBottom:'10px'}}>

                 <div className="maindd" style={{padding:'10px 10px 10px 10px'}}>
                       
            
                          <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />  

                          <span style={{marginLeft:'20px',fontWeight:'bold'}}>Alor Pothe</span>  


                          <span style={{marginLeft:'20px',color:'gray'}}>15 min ago</span> 

                           <div class="textcontent" style={{padding:'10px 10px 10px 10px',borderBottom:'1px solid gray'}}>
                           <p style={{textAlign:'justify'}}>Strategic Content is OPAC's newest unit, focusing on brand journalism and long form storytelling. The group was created to utilize the creative work of Marketing Communications to create content that positions the University favorably in strategic areas, and increases overall affinity for the Notre Dame brand. These pieces will highlight the life and work of the University's faculty and students in an array of disciplines. The University's central digital platforms - including nd.edu and the Notre Dame presence on social media accounts including Facebook, Twitter, Instagram, and YouTube - are managed by Strategic Content. </p>
                           
                           <span style={{color:'gray'}}>2 People like</span>
                           <span style={{marginLeft:'20px',color:'gray'}}>1 comments</span>
                       
                          </div>

                           <div className="likedislick" style={{marginTop:'10px'}}>

                            <span><i style={{fontSize:'25px',color:'blue'}} className="fal fa-thumbs-up"></i></span>

                             <span><i style={{fontSize:'25px',color:'blue',marginLeft:'20px'}} className="fal fa-comment-alt"></i></span>

                           </div>
                    

                 </div>

               </div>



                <div className="card" style={{marginTop:'20px',marginBottom:'10px'}}>

                 <div className="maindd" style={{padding:'10px 10px 10px 10px'}}>
                       
            
                          <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />  

                          <span style={{marginLeft:'20px',fontWeight:'bold'}}>Alor Pothe</span>  


                          <span style={{marginLeft:'20px',color:'gray'}}>15 min ago</span> 

                           <div class="textcontent" style={{padding:'10px 10px 10px 10px',borderBottom:'1px solid gray'}}>
                           <p style={{textAlign:'justify'}}>Strategic Content is OPAC's newest unit, focusing on brand journalism and long form storytelling. The group was created to utilize the creative work of Marketing Communications to create content that positions the University favorably in strategic areas, and increases overall affinity for the Notre Dame brand. These pieces will highlight the life and work of the University's faculty and students in an array of disciplines. The University's central digital platforms - including nd.edu and the Notre Dame presence on social media accounts including Facebook, Twitter, Instagram, and YouTube - are managed by Strategic Content. </p>
                           
                           <span style={{color:'gray'}}>2 People like</span>
                           <span style={{marginLeft:'20px',color:'gray'}}>1 comments</span>
                       
                          </div>

                           <div className="likedislick" style={{marginTop:'10px'}}>

                            <span><i style={{fontSize:'25px',color:'blue'}} className="fal fa-thumbs-up"></i></span>

                             <span><i style={{fontSize:'25px',color:'blue',marginLeft:'20px'}} className="fal fa-comment-alt"></i></span>

                           </div>
                    

                 </div>

               </div>





      

        </div>

           {/*end middle*/}
      
     </div>

      
     <div className="col-md-3">


   
        <div className="activeuser">

             <div className="tai" style={{borderBottom:'1px solid gray',paddingBottom:'10px',paddingTop:'10px'}}>
               <span style={{width:'100%',marginLeft:'44px',fontSize:'18px',fontWeight:'bold',color:'gray'}}>Online Friends</span>
              </div>


             <div className="activeuserscroll">

             <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>


              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

    
  
        </div>

      </div>




        <div className="group">

             <div className="tai" style={{borderBottom:'1px solid gray',paddingBottom:'10px',paddingTop:'10px'}}>
               <span style={{width:'100%',marginLeft:'44px',fontSize:'18px',fontWeight:'bold',color:'gray'}}>Group Conversion</span>
              </div>
              
             <div className="groupscroll">

                     <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>


                <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>


                <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>

              <div className="myitem" style={{width:'100%',marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
               <span style={{marginLeft:'36px'}}>
               <img className="rounded-circle" style={{height:'37px',width:'44px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />       
               <i style={{fontSize:'30px',color:'yellow',marginLeft:'-20px'}} className="fas fa-wifi-1"></i>
               <span style={{fontSize:'18px'}}>Ragib Hasan</span>
               </span>    
             </div>




             </div>
    
        
        </div>












     </div>



  </div>


</div>






      



      </>
 	)

}


export default Home;