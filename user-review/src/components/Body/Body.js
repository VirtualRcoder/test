import * as React from 'react';
import {Card, StyledBody, StyledAction, StyledThumbnail} from 'baseui/card';
import {Button} from 'baseui/button';

export default () => (
<section>
<ul>

  <li style={{float:'left', listStyleType:'None'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="One 665 bristo grill">
    <StyledThumbnail src={'https://s3-media2.fl.yelpcdn.com/bphoto/LP0LTrtS6-PWgwYreU2xaA/300s.jpg'} />
    <StyledBody>
      "Phew! Lots of bad reviews on this place. If I had read them before going, I likely would've just kept on walking. However, I was with a very large group of people, one who recommended it highly. So our group of over 25 people went.…"read more
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>

  <li style={{float:'left', listStyleType:'None', margin:'0px 0px 0px 200px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="Baby ganics">
    <StyledThumbnail src={'data:image/jpeg;base64,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'} />
    <StyledBody>
      This is not only for my son but this is for my whole family, for me and my husband. 
      We used this everytime we swim in the pool. The only thing that i dont like about this sunscreen lotion 
      is that it doesnt blend and go deep in the skin, it is visible after we applied it.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  </Card>
  </li>

  <li style={{ float:'left', listStyleType:'None' ,margin:'0px 0px 0px 200px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="Aloe after Sun">
    <StyledThumbnail src={'https://www.consumerhealthdigest.com/wp-content/uploads/2015/02/banana-boat-soothing-aloe.jpg'} />
    <StyledBody>
      This is the ABSOLUTE best for those who get red after a sun burn. For those who do not get tanned but instead turn like a lobster! That is me! This stuff feels amazing after your day outdoors and you forgot to apply sun block. 
This stuff is heavenly on your skin! Perfect to cool the burning sensation! It is always my go to.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  </Card>
  </li>

  <li style={{float:'left',listStyleType:'None'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="Best Baby Car Seats">
    <StyledThumbnail src={'https://pixel.nymag.com/imgs/daily/strategist/2018/09/10/car-seats/uppababy-mesa-infant-car-seat.w710.h473.2x.jpg'} />
    <StyledBody>
      Buying a baby or child car seat? Our car seat crash tests show you why it is vital to go for the best seat for your budget. Car Seat: Shop for Baby Car Seat online at best prices in India.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>

  <li style={{float:'left',listStyleType:'None',margin:'0px 0px 0px 200px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="HubSpot CRM">
    <StyledThumbnail src={'https://s.financesonline.com/uploads/2017/02/hslogo2.png'}/>
    <StyledBody>
     HubSpot CRM is the winner of our 2018 Best CRM Award. It is a free CRM platform that offers a powerful set of tools that can transform the way your team works.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>

  <li style={{float:'left',listStyleType:'None' ,margin:'15px 0px 0px 200px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="Zoho CRM">
    <StyledThumbnail src={'https://s.financesonline.com/uploads/2014/10/zoho2.png'}/>
    <StyledBody>
     Zoho CRM is the winner of our 2017 Experts Choice Award. It enables you to track opportunities, forecast sales, efficiently manage contacts, and much more.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>

  <li style={{float:'left',listStyleType:'None',margin:'10px 0px 0px 0px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="Jetsetter">
    <StyledThumbnail src={'https://www.jetsetter.com/uploads/sites/7/2019/04/GettyImages-920879930-1380x690.jpg'}/>
    <StyledBody>
     The stylish globetrotters insider source for all things travel—hotels, food+drink, art+culture, fashion, and more.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>

  <li style={{float:'left',listStyleType:'None',margin:'6px 0px 0px 200px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="7 Best Nantucket Hotels">
    <StyledThumbnail src={'https://www.jetsetter.com/uploads/sites/7/2019/05/979739-hLJL-011-e1556821234381-1380x690.jpeg'}/>
    <StyledBody>
    Cobbled streets, clapboard cottages, tiny seaports, sandy dunes... Here are seven gorgeous hotels to base yourself before exploring it all.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>

  <li style={{float:'left',listStyleType:'None',margin:'10px 0px 0px 200px'}}>
  	<Card overrides={{Root: {style: {width: '328px'}}}} title="Road Tripping Along the Amalfi Coast">
    <StyledThumbnail src={'https://www.jetsetter.com/uploads/sites/7/2019/04/GettyImages-991024254-1380x690.jpg'}/>
    <StyledBody>
    Our week-long guide maps out all the must-sees on one of the world most scenic drives.
    </StyledBody>
    <StyledAction>
      <Button style={{width: '55%'}}>More Reviews</Button>
    </StyledAction>
  	</Card>
  </li>
  
</ul>
</section>

);
