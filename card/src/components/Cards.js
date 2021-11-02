import React, { useState } from "react";
import { useHistory } from "react-router";


const Cards=()=>{

const [cards,SetCards]=useState
({
    id:1,
    name: "Paris Eiffel Tower ",
    img: "https://th.bing.com/th/id/R.b39f31c325cf5117c3004d8d1a6d1106?rik=oyodz3%2bZnr%2flMw&pid=ImgRaw&r=0",
    description:"this tower",
  },
  {
 id:2 ,
 name:"Saudi Arabia Kingdom Tower",
img:"https://th.bing.com/th/id/R.df682e559cb4f0ea3c266d42bfb3b936?rik=QC67pab5VO905A&pid=ImgRaw&r=0",
description:"this tower",

  },
  {
 id:3 ,
 name :" Khalifa Tower",
 img :"https://www.bing.com/images/search?view=detailV2&ccid=vJATNmak&id=328C123F436C51CB750682181AA4C0467798F049&thid=OIP.vJATNmakUe6eKZiTTnVdvgHaJ4&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.bc90133666a451ee9e2998934e755dbe%3frik%3dSfCYd0bApBoYgg%26riu%3dhttp%253a%252f%252fsuzzstravels.com%252fwp-content%252fuploads%252f2015%252f02%252fburj3.jpg%26ehk%3ddolttHvja3cYs1grc24zEJN4XZgCIdjrykIvAyppCwA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1560&expw=1170&q=khaifa+Tower+&simid=608028165095252162&FORM=IRPRST&ck=58669A640E2858CC5C2AB4F627B6D23A&selectedIndex=1&ajaxhist=0&ajaxserp=0",
description:"this tower",
  });
  const history=useHistory();
  const change=(id)=>{
          history.push(`/card/${id}`);
  }


  


 
return(
<div className="cards">

{
cards.map((item,i)=>{

<h1> {item.name} </h1> ;
<img src={item.img}/>;

<button onClick={item.description}>description</button>

})}

</div>)


}

export default Cards;