
function displayItems(filter_id)
{
    
	let cvalue=getCookie("username")
		if(!(cvalue===null)&&!(cvalue===""))
		{
			if(!(localStorage.getItem("finalHTML")===null))
			{
			
				document.getElementById("flexOutput").innerHTML=localStorage.getItem("finalHTML")

				let qtyArray=localStorage.getItem("qty").split(",")
	
				let prodArray=localStorage.getItem("productsArray").split(",")
				
				for(let i=0;i<prodArray.length;i++)
				{	
					document.getElementById(`i${prodArray[i]}`).value=qtyArray[i]	
				}
			}
		}

fetch("Data/myProducts.json").then((response)=>
		response.json()
		).then((myObject)=>
		{
		for(let k in myObject)
		{
			if(myObject[k].filter_id===filter_id)
                {
                        
                        let arr=myObject[k].products
                        
                        let productHTML=""
                        for(let j in arr)
                            {
                            
                            productHTML+=displayProduct(arr[j])
                            
                            }
                        let myRow=document.querySelectorAll(".myRow")
                        
                        for(let o in myRow)
                        {
                            myRow[o].innerHTML=""	
                        }

						document.querySelectorAll(".myRow")[0].innerHTML=productHTML

						var x=window.matchMedia("(min-width:960px)")

						myMediaOutput(x)
						
						function myMediaOutput(x)
						{
							let myBlocks=document.querySelectorAll(".myRow div")
							for(let i=0;i<myBlocks.length;i++)
										{
											myBlocks[i].style.marginLeft="0px"
										}
                            if(x.matches)
							{
								alert("960")
								document.getElementsByClassName("myRow")[0].style.height="670px"
								
								document.getElementsByClassName("myRow")[0].style.width="96%"
								
								
							}
							else
							{
								let mq700=window.matchMedia("(min-width: 700px)")

								if(mq700.matches)
								{
									alert("700")
									document.getElementsByClassName("myRow")[0].style.height="1050px"
								
									for(let i=0;i<myBlocks.length;i++)
									{
										myBlocks[i].style.marginLeft="40px"
									}

									
								}
								else
								{
									alert("400")
									let mq400=window.matchMedia("(min-width:400px)")

									if(mq400.matches)
									{
										document.getElementsByClassName("myRow")[0].style.height="1980px"
										document.getElementsByClassName("myRow")[0].style.width="350px"
									
										
									}
									else
									{
 
							         	document.getElementsByClassName("myRow")[0].style.height = "650px";
									}
								}
							}
						}
                        
					
                            
								document.querySelectorAll(".myRow")[0].innerHTML=productHTML
										document.querySelectorAll(".myRow")[0].style.display="flex"
										document.querySelectorAll(".myRow")[0].style.flexDirection="row"
										document.querySelectorAll(".myRow")[0].style.justifyContent="space-between"
										document.querySelectorAll(".myRow")[0].style.alignContent="space-around"
										document.querySelectorAll(".myRow")[0].style.flexWrap="wrap"
										document.querySelectorAll(".myRow")[0].style.padding="20px"
										document.querySelectorAll(".myRow")[0].style.paddingTop="0px"
										
										document.querySelectorAll(".myRow")[0].style.boxsizing="border-box"
                        
                        
						






                        
                        
                        
                        
                        let myBlocks=document.querySelectorAll(".myRow div")
                        
                        for(let i in myBlocks)
                        {
                            
                            if(!(String(myBlocks[i].innerHTML)==="undefined")&&!(String(myBlocks[i].innerHTML)===""))
                            {
                            
                            myBlocks[i].style.width="320px"
                            myBlocks[i].style.height="320px"
                            myBlocks[i].style.textAlign="center"
                            myBlocks[i].style.borderRadius="3%"
                            myBlocks[i].style.boxShadow="4px 4px 5px 2px gray"
                            myBlocks[i].style.marginTop="10px"
                            myBlocks[i].style.backgroundColor="white"
							
							

                            }						
                        }
                        
                        let myImages=document.querySelectorAll(".myRow img")
                        
                    
                        
                        for(let m in myImages)
                        {
                            
                            if(!(String(myImages[m].innerHTML)==="undefined")&&(typeof(myImages[m])==="object"))
                            {
                            
                            
                            myImages[m].style.width="180px"	
                            myImages[m].style.height="180px"
                            myImages[m].style.objectFit="cover"
							myImages[m].style.borderRadius="3%"
							myImages[m].style.zIndex="2"
                            }
                        }
                        
                        let mySpan=document.querySelectorAll(".myRow span")
                        
                        for(let n in mySpan)
                        {
                            
                            if(!(String(mySpan[n].innerHTML)==="undefined")&&(typeof(mySpan[n])==="object"))
                            {
                            
                            mySpan[n].style.float="left"
                            mySpan[n].style.color="red"
                            mySpan[n].style.margin="auto auto auto 10px"
                            }
                        }
                        
                        
                        let myCartButton=document.querySelectorAll(".myRow button")
                        
                        for(let j in myCartButton)
                        {
                            if(!(String(myCartButton[j].innerHTML)==="undefined")&&(typeof(myCartButton[j])==="object"))
                                {
                                myCartButton[j].style.float="right"	
                                myCartButton[j].style.margin="auto 8px auto auto"
								myCartButton[j].style.border="none"
								myCartButton[j].style.backgroundColor="green"
								myCartButton[j].style.color="white"
								myCartButton[j].style.borderTopRightRadius="11%"
                                
                                }
                        }
							x.addEventListener("change",function(){
							myMediaOutput(x)
						})
                }
            }
        })
    }


function displayProduct(product)
{
	return `<div id="p${product.product_id}">
	<H2>${product.product_name}</H2>
	<img src="${product.imgSrc}">
	<br>
	<HR>
	<span>₹${product.price}</span><button onclick="addToCart(${product.product_id},'${product.product_name}','${product.imgSrc}',${product.price})">Add-to-cart</button></div>`
}




function setCookie(cname,cvalue)
{
	let myCookie=cname+"="+cvalue
	
	let d=new Date()
	
	d.setMinutes(d.getMinutes()+2)
	
	document.cookie=myCookie+";expires="+d.toUTCString()+";path=/"
	
}

function getCookie(cname)
{
	let myCookie=cname+"="
	
	let allCookies=decodeURIComponent(document.cookie)
	
	let cookieArray=allCookies.split(";")
	
	for(let k=0;k<cookieArray.length;k++)
	{
	  if(cookieArray[k].indexOf(myCookie)!=-1)
	  {
		let cvalue=cookieArray[k].substring(cookieArray[k].indexOf("=")+1)
		
		if(cvalue==="")
		{
				continue
		}
		else
		{
			return cvalue
		}
			
	  }		
	}
	return ""
}



function addToCart(product_id,product_name,imgSrc,price)
{
		let cookieValue=getCookie("username")		

		let myImageSrcs=[]
		let myPriceArray=[]

		if(!(cookieValue==="")&&!(cookieValue===null))
		{
			
		let productsString=localStorage.getItem("productsArray")


			
		let prodArr=productsString.split(",")
		
		if(prodArr.indexOf(String(product_id))!=-1)
		{
			
			
			}
		else
		{
			
			productsString+=","+product_id
			
			let myContainer=document.getElementById("flexContainer")
			

			let newDiv=document.createElement("div")
			
			newDiv.id=product_id
			
			let productNameLabel=document.createElement("label")
			let productLabelText=document.createTextNode("Product Name:")
			productNameLabel.appendChild(productLabelText)
			
			newDiv.appendChild(productNameLabel)
			
			let nameSpan=document.createElement("span")
			let nameText=document.createTextNode(product_name)
			nameSpan.appendChild(nameText)
			nameSpan.style.marginLeft="20px"
			newDiv.appendChild(nameSpan)
			
			let myBr=document.createElement("br")
			newDiv.appendChild(myBr)
			
			let quantityLabel=document.createElement("label")
			let quanLabelText=document.createTextNode("Quantity:")
			quantityLabel.appendChild(quanLabelText)
			newDiv.appendChild(quantityLabel)


			localStorage.setItem("productsArray",productsString)
			
			let currentHTML=newDiv.innerHTML
			
			let inputHTML=`<input style="margin-left:10px;text-align:center;" type="number"  id="i${product_id}" value="1" onchange="populateQuantity()">`
			
			currentHTML+=inputHTML
			
			newDiv.innerHTML=currentHTML
			
			let myBr2=document.createElement("br")
			newDiv.appendChild(myBr2)
			
			let priceLabel=document.createElement("label")
			let priceText=document.createTextNode("Price:")
			priceLabel.appendChild(priceText)
			
			newDiv.appendChild(priceLabel)
			let priceSpan=document.createElement("span")
			let priceSpanText=document.createTextNode(`₹${price}`)
			priceSpan.style.marginLeft="90px"
			
			priceSpan.appendChild(priceSpanText)
			newDiv.appendChild(priceSpan)
			
			let myBr3=document.createElement("br")
			
			newDiv.appendChild(myBr3)
			
			let myHr=document.createElement("hr")
			
			newDiv.appendChild(myHr)

			let newDivInnerHTML=newDiv.innerHTML
			
			let myDelButton=`<button class="badge badge-pill badge-danger" style="padding:10px;" onclick="removeItem(${product_id})"><i class="bi bi-trash-fill"></i></button>`
			
			newDivInnerHTML+=myDelButton
			
			newDiv.innerHTML=newDivInnerHTML

			let myButtons=document.getElementById("buttons")
			
			myContainer.insertBefore(newDiv,myButtons)
			
			
			
			let flexOutput=document.getElementById("flexOutput")
			
			flexOutput.replaceChild(myContainer,document.getElementById("flexContainer"))
			
			

			if(localStorage.getItem("prices"))
				{
					myPriceArray=localStorage.getItem("prices").split(",")
				}
				myPriceArray.push(price)
				
				localStorage.setItem("prices",myPriceArray)
				
				
			if(localStorage.getItem("imgSrcs"))
				{
					myImageSrcs=localStorage.getItem("imgSrcs").split(",")
				}
				
				
				myImageSrcs.push(imgSrc)
                
				
				localStorage.setItem("imgSrcs",myImageSrcs)
			populateQuantity();
			    
			localStorage.setItem("finalHTML",flexOutput.innerHTML)

		}
    }
	else
		{
			let uname=prompt("Introduce Yourself")
			if(!(uname===null)&&!(uname===""))
			{
				setCookie("username",uname)	
				
				localStorage.setItem("finalHTML","")	
				let productsArray=""
				localStorage.setItem("qty","")
							
				let cookieValue=getCookie("username")	
				productsArray=product_id
					
				localStorage.setItem("productsArray",productsArray)
				
				
				returnDiv=`<div id="flexContainer">
						<H2>Welcome,${cookieValue}</H2>
						<div id="${product_id}">
						<label>Product_name:</label><span style="margin-left:20px;">${product_name}</span><br>
						<label>Quantity:</label><input style="margin-left:10px;text-align:center;" type="number"  id="i${product_id}" value="1" onchange="populateQuantity()"><br>
						<label>Price:</label><span style="margin-left:90px;">₹${price}</span><br>
						<hr><button class="badge badge-pill badge-danger" style="padding:10px;" onclick="removeItem(${product_id})"><i class="bi bi-trash3-fill"></i></button></div><div id="buttons" style="background-color:none;background-image:none;border:none;"><button class="btn btn-danger" onclick="clearCart()" style="float:left;margin:auto auto auto 10px;">Clear Cart</button>
						<button class="btn btn-success" style="float:right;margin:auto 10px auto auto;" onclick="checkOut()" >Check-Out</button></div></div>`
				
						
				localStorage.setItem("finalHTML",returnDiv)
				
				
				
				myPriceArray.push(price)
				localStorage.setItem("prices",myPriceArray)
				
				
				
				
				
				myImageSrcs.push(imgSrc);
				localStorage.setItem("imgSrcs",myImageSrcs)
            		
				
				
				document.getElementById("flexOutput").innerHTML=returnDiv
				
            
				populateQuantity();
				

			

		}
			
		
	}

}
function populateQuantity()
{
	
	let prodArray=localStorage.getItem("productsArray").split(",")
	
	let len=prodArray.length		
	
	let qtyArr=new Array()

	
	for(let k=0;k<len;k++)
		{
			
			if(document.getElementById(`i${prodArray[k]}`).value!="")
				{
					qtyArr[k]=document.getElementById(`i${prodArray[k]}`).value	
				}
			else
				{
					
					qtyArr[k]=1
				}	
		}
	
	
	localStorage.setItem("qty",qtyArr)
}



function clearCart()
{
	d=new Date()
	d.setMonth(d.getMonth()-1)
	document.cookie="username=;expires="+d.toUTCString()+";path=/"
	localStorage.setItem("productsArray","")
	document.getElementById("flexOutput").innerHTML=""
	localStorage.setItem("finalHTML","")
	localStorage.setItem("qty","")	
	localStorage.setItem("prices","")
	localStorage.setItem("imgSrcs","")
}


function removeItem(product_id)
{
	let productsString=localStorage.getItem("productsArray")
	let qty=localStorage.getItem("qty").split(",")
	
	let productsArray=productsString.split(",")
	
	let imgSrcArr=localStorage.getItem("imgSrcs").split(",")
	let priceArr=localStorage.getItem("prices").split(",")
	
	let removePosition=productsArray.indexOf(`${product_id}`)
	
	
	productsArray.splice(removePosition,1)
	qty.splice(removePosition,1)
	imgSrcArr.splice(removePosition,1)
	priceArr.splice(removePosition,1)
	
	
	localStorage.setItem("productsArray",productsArray)
	localStorage.setItem("qty",qty)
	localStorage.setItem("imgSrcs",imgSrcArr)
	localStorage.setItem("prices",priceArr)
	
	
	
	if(productsArray.length===0)
	{
		
		
		d=new Date()
		d.setMonth(d.getMonth()-1)
		document.cookie="username=;expires="+d.toUTCString()+";path=/"
		localStorage.setItem("productsArray","")
		document.getElementById("flexOutput").innerHTML=""
		localStorage.setItem("finalHTML","")
		localStorage.setItem("qty","")
		localStorage.setItem("imgSrcs","")
		localStorage.setItem("prices","")
	}
	else
	{
		let finalOutput=document.getElementById("flexOutput")
		let container=document.getElementById("flexContainer")
		
		let child=document.getElementById(`${product_id}`)
		container.removeChild(child)
		
		finalOutput.replaceChild(container,document.getElementById("flexContainer"))
		
		let finalHTML=finalOutput.innerHTML
		
	    document.getElementById("flexOutput").innerHTML=finalHTML
		localStorage.setItem("finalHTML",finalHTML)
		
		let qtyArray=localStorage.getItem("qty").split(",")
			
		let prodArray=localStorage.getItem("productsArray").split(",")
			
		for(let i=0;i<prodArray.length;i++)
		{
				
		document.getElementById(`i${prodArray[i]}`).value=qtyArray[i]	
		}
		
	   
		
	}
	
	
	
	
}


function checkOut()
{
	 let myImageArr=localStorage.getItem("imgSrcs").split(",");
	 let qtyArr=localStorage.getItem("qty").split(",");
	 let priceArr=localStorage.getItem("prices").split(",");


	 let myTable=`<table><tr><th class="table-product-heading">Product</th><th class="table-items-heading">Quantity</th><th class="table-items-heading">Price</th><th class="table-total-heading">Total</th></tr>`
	 let grandTotal=0;

	 for(let i=0;i<myImageArr.length;i++)
	 {
		let tot=Number(qtyArr[i])*Number(priceArr[i]);
		grandTotal+=tot
		myTable+=`<tr><td class="table-product-content"><img src="${myImageArr[i]}" style="width:100px; height:100px; object-fit: cover;border:1px solid white;"></td><td class="table-product-items">${qtyArr[i]}</td><td class="table-product-items">₹${priceArr[i]}</td><td  style="text-align: center;" class="table-product-total">₹${tot}</td></tr>`

	 }

	 myTable+=`<tr><td colspan="3" style="text-align: center;">Grand Total</td><td class="table-total-heading">₹${grandTotal}</td></tr></table>`

	 let billDiv=`<div id="billTable"><h2>Your Final Bill:</h2>${myTable}</div><div id="buttons2"><button id="backToCart" class="btn btn-danger" onclick="goBack()">Back</button><button class="btn btn-success" id="pay" onclick="proceedPayment(${grandTotal})">proceed To Pay</button></div>
                    <div id="bankInfo" class="bg-info" ></div>`
	 document.getElementById("finalBill").style.display="block"
	 document.getElementById("finalBill").innerHTML=billDiv

	 let mq400=window.matchMedia("(min-width:400px)")
	 if(mq400.matches)
	 {
		document.getElementById("flexContainer").style.display="none"
	 }

	}


	function goBack()
	{
		document.getElementById("finalBill").innerHTML=""
		document.getElementById("finalBill").style.display="none"
		document.getElementById("flexContainer").style.display="block"
		
	}
	function proceedPayment(total)
	{
		let cardDiv=`<img src="images/visa.svg" style="width: 50px; height: 50px; object fit: cover;margin-left: 10px;"><img src="images/mastercard.png" style="margin-left: 10px; width: 40px; height: 30px; object fit: cover"><img src="images/amex.png" style="margin-left: 10px; width: 40px; height: 50px; object fit: cover"><img  src="images/discover.svg" style=" margin-left: 10px; width: 50px; height: 50px; object fit: cover">`
		cardDiv+=`<h4 style="margin: 10px auto auto auto; text-align: center;">Amount Payable:₹${total}</h4>`

		cardDiv+=`<div style="width: auto; margin: auto;"><div style="float: left; margin: 10px auto auto auto;"><label>Card Number:</label><input type="text" style="width: 50px; text-align: center;" maxlength="4">-<input type="text" style="width: 50px; text-align: center;" maxlength="4">-<input type="text" style="width:50px; text-align: center;" maxlength="4">-<input type="text" style="width:50px; text-align: center;" maxlength="4"> </div>`
		cardDiv+=`<div style="margin:10px 10px auto auto; float: right;">CVV/CVV2:<input type="password" style="appearance:none; padding-left: 15px; width: 70px;background-image:url('images/lock-fill.svg');background-size:15px auto; background-position:1px 5px; background-repeat: no-repeat;" maxlength="3"></div>`
		cardDiv+=`<div style="margin: 10px auto auto 27px; clear: left;"><label>Valid thru:</label><input type="text" style="width: 40px;text-align:center; margin-top: 10px;" maxlength="2">/<input type="text" style="width: 40px; text-align: center; margin-top: 10px;" maxlength="2"></div><hr style="margin: 0px padding: 0px;"></div>`
		cardDiv+=`<button class="btn btn-success" onclick="paymentSuccessfull()" style="float: right; margin-right:15px;">Confirm Payment</button></div>`
		document.getElementById("bankInfo").innerHTML=cardDiv

		$("#bankInfo").slideDown(5000)
	}



	
