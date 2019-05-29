import * as React from 'react';
export default () => (
  
  <section>
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
	  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
	  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
		<nav class="navbar navbar-inverse"  >
	  		{/*Company Name*/}
	  		<div class="container-fluid">    		
	    		<div class="navbar-header">
	      		<a class="navbar-brand" href="#" style={{color:'#B8105F', margin:'0px 0px 0px 100px' }}>U-VIEW</a>
	    		</div>
	    	{/*Mega Dropdown*/}
	    		<ul class="nav navbar-nav">
	      		<li class="active"><a href="#" style={{margin:'0px 0px 0px 60px' }}>Product Review</a></li>
	    		</ul>
	    	{/*Search bar*/}
	    		<form class="navbar-form navbar-left" action="">
		    		<div class="input-group" style={{margin:'0px 0px 0px 60px' }}>
		    			<input type="text" class="form-control" placeholder="Search" style={{width:'180%' }}/>
		    				<div class="input-group-btn">
		      				<button class="btn btn-default" type="submit" style={{margin:'0px 0px 0px 120px' }}>
		        					<i class="glyphicon glyphicon-search"></i>
		      				</button>
		    				</div>
		  			</div>
				</form>    		
	    	{/*Signup & Login Button*/}	
	    		<ul class="nav navbar-nav navbar-right">
					<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
	      		<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
	    		</ul>
			</div>
		</nav>	  
  </section>
  
  );