var root = document.documentElement;

var currentFontSize = document.querySelector('#current-font-size');
	function setFontSize(newFontSize) {
			console.log(newFontSize);
            currentFontSize.innerText = newFontSize;
            root.style.setProperty('--font-size', newFontSize + "px");
        }

var currentLineHeight = document.querySelector('#current-line-height');
	function setLineHeight(newLineHeight) {
			console.log(newLineHeight);
            currentLineHeight.innerText = newLineHeight;
            root.style.setProperty('--line-height', newLineHeight);
        }

var currentFloat = document.querySelector('#current-float');
	function setFloat(newFloat) {
			console.log(newFloat);
			currentFloat.innerText = newFloat;
            root.style.setProperty('--FLOA', newFloat);

		}

  	function changeFont(value) {
		const tester = document.querySelector('#tester');
		tester.style.fontVariationSettings = '"FLOA" ${value}';
	}
