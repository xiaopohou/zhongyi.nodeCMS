var xl = require('node-xlrd');
var path = require('path');
exports.read = function(req, res){

        

	var filepath =  path.join(process.cwd(), 'uploads/test.xls');
	var datas = [];

    console.log("--------->"+filepath);

	xl.open(filepath, function(err,bk){
		if(err) {console.log(err.name, err.message); return;}
		var shtCount = bk.sheet.count;
		for(var sIdx = 0; sIdx < shtCount; sIdx++ ){
			console.log('sheet "%d" ', sIdx);
			console.log('  check loaded : %s', bk.sheet.loaded(sIdx) );
			var sht = bk.sheets[sIdx],
				rCount = sht.row.count,
				cCount = sht.column.count;
			console.log('  name = %s; index = %d; rowCount = %d; columnCount = %d', sht.name, sIdx, rCount, cCount);
			for(var rIdx = 0; rIdx < rCount; rIdx++){	// rIdx：行数；cIdx：列数
				var data = [];
				for(var cIdx = 0; cIdx < cCount; cIdx++){
					try{
						data[cIdx] = sht.cell(rIdx,cIdx);
						console.log('  cell : row = %d, col = %d, value = "%s"', rIdx, cIdx, sht.cell(rIdx,cIdx));
					}catch(e){
						console.log(e.message);
					}
				}
				datas[rIdx] = data;
			}
		}
		req.datas = datas;
	});
};