$(function() {
  axios.get('./mocks/jssdk.json').then(function(res) {
    wx.config(res.data.data);
  });
  wx.ready(function() {
    wx.updateAppMessageShareData({
      title: window.SHARE_TITLE || document.title, // 分享标题
      desc: window.SHARE_DESC || '', // 分享描述
      link: window.SHARE_LINK || location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://www.heisoon.com/images/logo.jpg?1.0', // 分享图标
      success: function() {}
    });
    wx.updateTimelineShareData({
      title: window.SHARE_TITLE || document.title, // 分享标题
      desc: window.SHARE_DESC || '', // 分享描述
      link: window.SHARE_LINK || location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://www.heisoon.com/images/logo.jpg?1.0', // 分享图标
      success: function() {}
    });
  });

  // 播放语音
  var audio = $('.voice.enable audio');
  if (audio.length > 0) {
      audio[0].addEventListener('ended', function () {
          $(this).closest('.voice').removeClass('play');
          this.currentTime = 0;
          this.pause();
      }, false);
      $('.voice').on('click', function(e) {
          if ($(this).toggleClass('play').hasClass('play')) {
              audio[0].play();
          } else {
              audio[0].currentTime = 0;
              audio[0].pause();
          }
          e.preventDefault();
      });
  }
});
