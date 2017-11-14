function limit_color(r){
	if (r > 255) return 255;
	else if (r < 0) return 0;
	return r;
}

export function lighten_darken_color(color, amt) {
	let col = get_color(color);
	let usePound = false;
	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}
	let num = parseInt(col,16);
	let r = limit_color((num >> 16) + amt);
	let b = limit_color(((num >> 8) & 0x00FF) + amt);
	let g = limit_color((num & 0x0000FF) + amt);
	return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

export const color_map = {
	'light-blue': '#7cd6fd',
	blue: '#5e64ff',
	violet: '#743ee2',
	red: '#ff5858',
	orange: '#ffa00a',
	yellow: '#feef72',
	green: '#28a745',
	'light-green': '#98d85b',
	purple: '#b554ff',
	magenta: '#ffa3ef',
	black: '#36114C',
	grey: '#bdd3e6',
	'light-grey': '#f0f4f7',
	'dark-grey': '#b8c2cc'
};

export const get_color = (color) => {
	return color_map[color] || color;
};
