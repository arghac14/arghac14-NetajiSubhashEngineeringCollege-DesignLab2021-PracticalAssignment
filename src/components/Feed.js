import React,{useState, useEffect, useContext} from 'react';
function Feed() {
    return (
    <div>
      <div style={{
          textAlign: "center",
          height: "220px",
          backgroundImage: "url(https://locus.sh/assets/img/home/home-top-banner.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          paddingBottom: "10%"

      }}>
           <br></br><br></br>
        <div class="row align-items-center" style={{
            alignItems: "center !important",
            paddingLeft: "10%",
            height: "auto"
        }}>
         <div class="offset-md-1-5  col-md-7">
            <span>Can you find the shortest route? </span>
            <h2>Test your routing skills with #TheLocusWay</h2>
         </div>
         <div class="col-md-2">
            <button style={{backgroundColor:"#0072F5", color: "whitesmoke", borderRadius: "10px", height:"40px", width: "200px", borderColor: "white"}}>#LogisticsDay2021
            </button>
            </div>
            <div>
                <img src="https://locus.sh/assets/img/home-2/banner-img.svg" style={{paddingLeft: "42%", paddingTop: "10%"}}></img>
            </div>
        </div>
        
      </div>
        
      <div style={{
          textAlign: "center",
          height: "3000px",
          backgroundColor: "#0072F5",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"

      }}>
           <br></br><br></br>
        <div class="row align-items-center" style={{
            alignItems: "center !important",
            paddingRight: "45%",
            paddingBottom: "20%"
        }}>
         <div class="offset-md-1-5  col-md-7">
            <h1 style={{
                fontWeight: "800",
                fontSize: "3.35rem",
                letterSpacing: "1px",
                paddingBottom: "0",
                lineHeight: "1.4",
                color: "#fff",
                textAlign: "left", 
                paddingLeft: "20px"
            }}>
                Smarter Supply Chain Decisions</h1>
            <p class="tag-line" style={{textAlign: "left", paddingLeft: "20px", color: "#FFFFFF"}}>Better Lives.</p>
            <p style={{fontWeight: "light", textAlign: "left", paddingLeft: "20px", color: "#FFFFFF"}}>Locus is a future-ready platform that automates supply chain decisions. Add intelligence to your operations and make the right decisions to delight your customers.</p>
            <button className="sp-btn" style={{
                cursor: "pointer",
                border: "1px solid #fff",
                backgroundColor: "#0072F5",
                height: "50px",
                width: "200px",
                color: "#fff",
                fontSize: "1.5em",
                borderRadius: "4px"
            }}
            
            > Schedule Demo </button>
         </div>
         
        </div>
      </div>


</div>
)
}

export default Feed;
