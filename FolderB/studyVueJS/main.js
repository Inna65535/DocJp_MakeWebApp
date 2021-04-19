var app = new Vue ({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});

// "Movable"クラス定義
var Movable = function(x, y) {
	this.pos = {
		x: x,
		y: y
	};
	this.move = function(x, y) {
		this.pos.x += x;
		this.pos.y += y;
	};

}

var ball = new Movable(10,50);				// "Movable"クラスのインスタンス生成

// 座標をコンソールに出力する
console.log(ball.pos.x);	// => 10 が出力される
console.log(ball.pos.y);	// => 50 が出力される
ball.move(5, 3);
// 座標をコンソールに出力する
console.log(ball.pos.x);	// => 15 が出力される
console.log(ball.pos.y);	// => 53 が出力される

