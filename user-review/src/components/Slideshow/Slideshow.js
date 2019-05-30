import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const Slideshow = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
      >
       <center>
        <MDBCarouselInner >
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.khaleejtimes.com/storyimage/KT/20180608/ARTICLE/180609575/AR/0/AR-180609575.jpg&MaxW=780&imageVersion=16by9&NCS_modified=20180607220000"
                alt="Third slide"
                style={{width:"1537px" ,height:"400px"}}
              />
            </MDBView>
          </MDBCarouselItem>
         
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://static1.squarespace.com/static/597776e43e00be2ce99b7967/598845f1cd39c319edea031a/598846c317bffc6a272826e3/1502103240851/entrepreneurship-007.jpg?format=1000w"
                alt="Second slide"
                style={{width:"1537px" ,height:"400px"}}
              />
            </MDBView>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.gannett-cdn.com/-mm-/21e9b6c90326cf73ec17a38f54a73276752f0c3d/c=0-52-1000-614/local/-/media/2016/11/25/Bergen/portobyantonio011916h-jpg.jpg?width=3200&height=1680&fit=crop"
                alt="Third slide"
                style={{width:"1537px" ,height:"400px"}}
              />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.reviewgeek.com/thumbcache/0/0/d71d0303b65d72b7061443662328a8c4/p/uploads/2018/04/xe0af834a.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.NcLRhIRLov.jpg"
                alt="Fourth slide"
                style={{width:"1537px" ,height:"400px"}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </center>  
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Slideshow;