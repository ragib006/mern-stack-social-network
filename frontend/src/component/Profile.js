import React from 'react'



const Profile = () => {

  return(

      <>




<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="#" style={{fontWeight:'bold',fontSize:'27px',marginRight:'25%'}}>Timir Dhon</a>
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




<div className="Sdfsdgf">
   <div className="container">

      <div className="dkfjsbdgj">

   <div className="coverphoto">

    <img style={{width:'100%',height:'400px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1659440828/cub3_yx5tvu.jpg"/>

   </div>


     <div className="coverbutton">


      <label htmlFor="file" style={{width:'200px'}}>
                  


           <span className="bg-light" style={{fontSize:'17px',padding:'7px 12px 7px 12px',borderRadius:'5px'}}><i  style={{marginRight:'10px'}} className="fas fa-camera"></i>Edit cover photo</span>
            

             
           <input  style={{display:'none'}} type="file" id="file" accpet=".png,.jpeg,.jpg"/>

       </label>

    

   </div>






      <div className="profileimage">

              
             
               <img className="myprofileimage rounded-circle" style={{height:'150px',width:'150px',border:'5px solid white'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />
               

                     <label htmlFor="file" style={{width:'200px'}} className="dfdgdfg">
               <i style={{color:'black',padding:'10px 10px 10px 10px'}} className="rounded-circle myicon fas fa-camera"></i>


             
           <input  style={{display:'none'}} type="file" id="file" accpet=".png,.jpeg,.jpg"/>

       </label>
           
            

      </div>

  

       <span style={{marginLeft:'225px',marginTop:'20px',display:'block',fontSize:'22px',fontWeight:'bold'}}>Ragib Hasan</span>

       <span style={{marginLeft:'225px',display:'block'}}>300 Friends</span>







</div>







<div className="middlesection" style={{marginTop:'100px'}}>

<div className="row">

  <div className="col-md-4">

     <div className="card">

        <div className="info bg-light" style={{padding:'10px 10px 20px 20px'}}>

      
    <p>
           <span style={{fontWeight:'bold',fontSize:'20px'}}>Info</span>       
           <span className="infobutton" style={{marginLeft:'240px',padding:'5px 5px 5px 5px',borderRadius:'6px',color:'blue'}}>Edit Profile</span>
         </p> 


            <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Name :</span> <span style={{fontSize:'18px'}}>Ragib Hasan</span>
            </span>

             <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Email :</span> <span>ragibhasan006@gmail.com</span>
            </span>

            <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Phone :</span> <span>01773672495</span>
            </span>

               <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Nick Name :</span> <span>Rag</span>
            </span>

             <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Religion :</span> <span>Islam</span>
            </span>

               <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Occupation :</span> <span>Software Developer</span>
            </span>

                   <span style={{display:'block'}}>
            <span style={{fontWeight:'bold',fontSize:'16px'}}>Bio :</span> <span>Programming is my life</span>
            </span>
       

         </div>
     </div>




















     <div className="card" style={{marginTop:'20px'}}>

        <div className="info bg-light" style={{padding:'10px 10px 10px 10px'}}>


          <p>
           <span style={{fontWeight:'bold',fontSize:'20px'}}>Photos</span>       
           <span className="infobutton" style={{marginLeft:'240px',padding:'5px 5px 5px 5px',borderRadius:'6px',color:'blue'}}>All Photo</span>
         </p>   
      

              <div className="row">

                  <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>


                       <div className="col-md-3">

                      

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                       <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>


                       <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                       <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                         <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                         <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                         <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>



            </div>




        
       

         </div>
     </div>





























     <div className="card" style={{marginTop:'20px'}}>

        <div className="info bg-light" style={{padding:'10px 10px 10px 10px'}}>


          <p>
           <span style={{fontWeight:'bold',fontSize:'20px'}}>Friends</span>       
           <span className="infobutton" style={{marginLeft:'240px',padding:'5px 5px 5px 5px',borderRadius:'6px',color:'blue'}}>All Friends</span>
         </p>   
      

              <div className="row">

                  <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>


                       <div className="col-md-3">

                      

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                       <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>


                       <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                       <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                         <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                         <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>

                         <div className="col-md-3">

                        <img className="rounded" style={{height:'80px',width:'80px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1651660459/avater/uhiwxzemgdesjpxkkuwl.jpg" />

                  </div>



            </div>




        
       

         </div>
     </div>















     
  </div>

    <div className="col-md-8">
        <div className="mypostscroll">



                <div className="card" style={{marginBottom:'10px'}}>

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







                <div className="card" style={{marginBottom:'10px'}}>

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



               
                <div className="card" style={{marginBottom:'10px'}}>

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
  </div>

</div>

</div>




</div>





</div>





      </>

  	)


}


export default Profile;