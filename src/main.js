/**
 * Created by txl-pc on 2017/8/16.
 */
import $ from 'jquery'
import JSEncrypt from 'jsencrypt'
// 加密
$('.jia_button').on('click', function () {
  var text = $('#text').text()
  var encrypt = new JSEncrypt.JSEncrypt();
  encrypt.setPublicKey($('#pubkey').text());
  var encrypted = encrypt.encrypt(text);
  $('#jia').text(encrypted)
})

// 解密
$('.jie_button').on('click', function () {
  var text = $('#jia').text()
  var encrypt = new JSEncrypt.JSEncrypt();
  encrypt.setPrivateKey($('#privkey').text());
  var encrypted = encrypt.decrypt(text);
  $('#jie').text(encrypted)
})