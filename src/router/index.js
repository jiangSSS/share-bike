import React,{Component} from "react";
import  {HashRouter,Route,Switch} from "react-router-dom";

import Admin from "../views/admin/index";
import Home from "../views/Home/index";
import SecondPage from "../views/secondPage/index";
import NotMatch from "../views/notMatch/index";
export default class Router extends  Component{
	render(){
		return(
			<HashRouter>
				<div>
					<Switch>
						<Route path="/admin" render={()=>
							<Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}></Route>							
								    <Route path="/admin/secondPage" component={SecondPage}></Route>		
                                    <Route component={NotMatch}></Route>	
                                </Switch>  										
							</Admin>
						}></Route>
						<Route component={NotMatch}></Route>
					</Switch>					
				</div>
			</HashRouter>            
		);
	}
}