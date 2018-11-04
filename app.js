var notes = ['C', 'D', 'E','F', 'G', 'A', 'B']
var i = notes.length-1;
do {
	var val = notes[i];
	if (val == 'E' || val == 'B') {
		//skip
	}
	else notes.splice(i+1, 0, val+"#");
} while (i--)


var obj = {};
var payload = {};
for (var i = 0; i < notes.length; i++) {
	obj[notes[i]] = []
	for (var octave = 0; octave < 4; octave++) {
	
		var note = 24 + i + (12 * octave);
		var majScale = getMajorScale(note);
		var minScale = getMinorScale(note);

		var maj7 = [majScale[0], majScale[2], majScale[4], majScale[6]]
		var maj = {
			chord: [majScale[0], majScale[2], majScale[4]],
			svn: {
				chord: maj7,
			},
			scale: majScale
		}

		var min7 = [minScale[0], minScale[2], minScale[4], minScale[6]]
		var min = {
			chord: [minScale[0], minScale[2], minScale[4]],
			svn: {
				chord: min7,
			},
			scale: minScale
		}
		payload=
			{
				note, 
				maj,
				min
			};
		if (obj[notes[i]].length <= octave) {
			obj[notes[i]][octave] = payload
		}
	}
}

console.log(obj.C[1].maj.svn.chord);

function getMajorScale(rootNote){
	var rule = ['t','t','s','t','t','t','s'];
	var scale = [rootNote];
	var counter = 0;
	for (var i = 0; i < rule.length; i++) {
		if (rule[i] == 't') {
			if (i == 0) {
				scale[i] = scale[0] + 2;
			}
			else{
				scale[i] = scale[i-1] + 2;
			}
		}
		else{
			if (i == 0) {
				scale[i] = scale[0] + 1;
			}
			else{
				scale[i] = scale[i-1] + 1;
			}
		}
	}
	scale.unshift(rootNote)
	return scale;
}

function getMinorScale(rootNote){
	var rule = ['t','s','t','t','s','t','t'];
	var scale = [rootNote];
	var counter = 0;
	for (var i = 0; i < rule.length; i++) {
		if (rule[i] == 't') {
			if (i == 0) {
				scale[i] = scale[0] + 2;
			}
			else{
				scale[i] = scale[i-1] + 2;
			}
		}
		else{
			if (i == 0) {
				scale[i] = scale[0] + 1;
			}
			else{
				scale[i] = scale[i-1] + 1;
			}
		}
	}
	scale.unshift(rootNote)
	return scale;
}


