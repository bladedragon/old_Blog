const apFixed = new APlayer({
  element: document.getElementById('aplayer-fixed'),
  mutex: true,
  theme: '#FFA6D1',
  order: 'random',
  lrcType: 3,
  fixed: true,
  autoplay: true,
});
$.ajax({
  url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=832845574',
  success: function (list) {
    apFixed.list.add(JSON.parse(list));
  }
});

// 默认id35798529