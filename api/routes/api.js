var express = require('express');
var router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './public/images',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage });

// router.get('/', function(req, res, next) {
//   res.send('API is working properly');
// });

// module.exports = router;

var mysql = require('mysql');
var connection = mysql.createConnection({

});

// const photoList = [
//   {
//     id: 1,
//     url: '/images/01.jpg',
//     title: 'Image',
//     user: { id: 1, name: 'Tom', avatar: 'avatar' },
//     caption:
//       '文字盤上のアプリや機能へのショートカットは、コンプリケーションと呼ばれます。好きなコンプリケーションを選んで文字盤をカスタマイズすれば、より多くの情報を一目で見て、より多くのことがワンタッチで行えます。使えるアプリと機能は数えきれないほど。インフォグラフなどの文字盤なら最大9つのコンプリケーションを設定できます。',
//     cols: 1,
//   },
// ];

router.post('/photo/uploadtest', uploader.single('image'), (req, res) => {
  const file = req.file;
  const meta = req.body;
  // デッバグのため、アップしたファイルの名前を表示する
  console.log(file, meta);
  // アップ完了したら200ステータスを送る
  res.status(200).json({ msg: 'アップロード完了' });
});

router.post('/photo/upload', function(req, res, next) {
  console.log(req.body);

  if (req.body.url != '') {
    const sql =
      'INSERT INTO `images` (`url`, `title`, `caption`, `user_id`) VALUES (?, ?, ?, 1)';
    const values = [req.body.url, req.body.title, req.body.caption];

    connection.query(
      {
        sql: sql,
        values: values,
      },
      function(error, results, fields) {
        //if (error) throw error;
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      },
    );
  }
});

router.get('/photo/list', function(req, res, next) {
  //res.json(photoList);

  connection.query(
    'SELECT i.id, i.url, i.title, i.caption, u.id AS user_id, u.name AS user_name, u.avatar AS user_avatar FROM images AS i INNER JOIN users AS u ON i.user_id = u.id',
    function(err, rows, fields) {
      if (err) throw err;

      let rowdata = [];

      rows.map(row => {
        rowdata.push({
          id: row.id,
          url: row.url,
          title: row.title,
          caption: row.caption,
          user: {
            id: row.user_id,
            name: row.user_name,
            avatar: row.user_avatar,
          },
          cols: 1,
        });
      });

      //console.log(rowdata);
      res.send(rowdata);
      //console.log('The solution is: ', rows[0].solution);
    },
  );
});

// // 写真リストを取得するAPI
// app.get('/api/photo/list', function(req, res, next) {
//   res.json(photoList);
// });

// app.get('/api/photo/:photoId', function(req, res, next) {
//   var photo;
//   for (i = 0; i < photoList.length; i++) {
//     if (photoList[i].id == req.params.photoId) {
//       var photo = photoList[i];
//     }
//   }
//   res.json(photo);
// });

module.exports = router;
