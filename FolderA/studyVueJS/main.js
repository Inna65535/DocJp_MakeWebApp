var app = new Vue ({
	el: '#app',
	data: {
		alert_date: null,
		date: '',
		time: '',
//		week: ['（日）', '（月）', '（火）', '（水）', '（木）',  '（金）', '（土）'],
		f_kaishi:0,
		checkStatus: '2'
	},
	created: function() {
		// 初期値
		var dt = new Date();
		//dt.setDate(dt.getDate() + 1);
		this.alert_date = this.formatDate(dt);
	},
　　mounted: function()  {
　　　　let timerID = setInterval(this.updateTime, 1000); 

　　}, 
	methods: {
		// 日付時刻を取得する
		updateTime: function() {
			// 現在の日付時刻を取得する
			let current_date = new Date();

			// 「〜年〜月〜日 （曜日）」に整形する
			this.date = this.formatDate(current_date);

			//「時：分：秒」に整形する
			this.time = this.formatTime(current_date);

			//console.log(this.alert_date);
			//console.log(this.date);
			//console.log(this.time);
			if (this.checkStatus == '1')
			{
				if (this.alert_date != this.date)
				{
					alert("日付が変わりました！！");
				}
			}
		},
		// 日付を整形する
		formatDate: function(dt) {
			var y = dt.getFullYear();
			var m = ('00' + ( dt.getMonth() + 1)).slice(-2);
			var d = ('00' +   dt.getDate()      ).slice(-2);
//			var w = this.week[dt.getDay()];
//			var result = y + '年' + m + '月' + d + '日' + w;
			var result = y + '-' + m + '-' + d;

			return result;
		},
		// 時刻を整形する
		formatTime: function(dt) {
			var h = ('00' + dt.getHours()).slice(-2);
			var m = ('00' + dt.getMinutes()).slice(-2);
			var s = ('00' + dt.getSeconds()).slice(-2);
			var result = h + ':' + m + ':' + s;

			return result;
		},
	}
});

