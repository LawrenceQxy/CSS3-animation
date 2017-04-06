function tableMod (obj,n,m,i,x,y) {
	obj.style.transition = '2s';
	obj.style.transform = 'scale(0.45) translateX('+(x/2+(table[i].column-1)*(n+20))+'px) translateY('+(y/2+(table[i].row-1)*(m+20))+'px)';
}
