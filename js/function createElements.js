function createElements () {
	for (var i = 0; i < table.length; i++) {
		var elements = document.createElement('div');
		elements.className = 'element';
		elements.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
		elements.style.boxShadow = '0px 0px 12px rgba(0, 255, 255, 0.5)';
		elements.style.border = '1px solid rgba(127, 255, 255, 0.25)';
		var numbers= document.createElement('div');
		numbers.className = 'number';
		numbers.innerHTML = table[i].num;
		elements.appendChild(numbers);
		var symbols= document.createElement('div');
		symbols.className = 'symbol';
		symbols.innerHTML = table[i].mark;
		elements.appendChild(symbols);
		var details= document.createElement('div');
		details.className = 'details';
		details.innerHTML = table[i].name + '<br>' + table[i].mass;
		elements.appendChild(details);
		box.appendChild(elements);
	}
	for (var i = 0; i < 2; i++) {
		var ele = document.createElement('div');
		ele.className = 'element';
		ele.style.transform = 'scale(0.45)';
		ele.style.backgroundColor = 'rgba(0,127,127,0)';
		box.appendChild(ele);
	}
}
