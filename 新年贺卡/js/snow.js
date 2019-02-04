		 
		 
		 
		 
		     var canvas=document.getElementById("canvas");
		     var ctx=canvas.getContext("2d");
		     var width=window.innerWidth;
			 var height=window.innerHeight;
			 canvas.width=width;
		     canvas.height=height;
			 var bg=new Image();
			 bg.src="img/link1.png";
			 function bgpaint(){
				 ctx.drawImage(bg,0,0,width,height);
			 }
			
			function fullSnow(){
				function Snow(size,positionX){
					this.size=size;
					this.height=size;
					this.x=positionX;
					this.y=0;
					this.k=0;
				}
				Snow.prototype={	
					paint:function(){
						//ctx.drawImage(xh,this.x,this.y);
						
						ctx.beginPath();
						ctx.arc(this.x,this.y,this.size,0,360);
						ctx.fillStyle="white";
						ctx.fill();
						ctx.closePath();
						this.k++;	
					},
					step:function(){
						this.y+=10;
					}
				}
				//���ѩ��
				var Snows=[];
                function addSnow(){
					var size=parseInt(6*Math.random());
					var x=width*Math.random();
					Snows[Snows.length]=new Snow(size,x);
				
				}
				
				//������ѩ��
				function paint(){
					//ctx.clearRect(0,0,canvas.width,canvas.height); 
					for(var i=0;i<Snows.length;i++){
						Snows[i].paint();
						
					}
				}
				//����ѩ�����ƶ�
				function move(){
						for(var i=0;i<Snows.length;i++){	
								Snows[i].step();
						}
					
			    }
				//ɾ�����ѩ��
				function deleat(){
					var arr=[];
					for(var i=0;i<Snows.length;i++){
						if(Snows[i].height>height){
							
						}
					}
				}
				//������ʱ��
	        
				setInterval(function(){
					addSnow();
					move();
					bgpaint();
					paint();
					
					   
				},1000/24);	
			}
			

			fullSnow();
	