//Botpress
window.botpressWebChat.init({
    "composerPlaceholder": "Chat with bot",
    "botConversationDescription": "This chatbot was built with Botpress by Mary Li",
    "botId": "48ac0699-e254-4909-8483-8d2200c1bce2",
    "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    "messagingUrl": "https://messaging.botpress.cloud",
    "clientId": "48ac0699-e254-4909-8483-8d2200c1bce2",
    "webhookId": "236a7781-f1e9-47ee-a250-ecf93c8fe1cd",
    "lazySocket": true,
    "themeName": "prism",
    "frontendVersion": "v1",
    "showPoweredBy": false,
    "theme": "prism",
    "themeColor": "#2563eb",
    "hideWidget": false,
    "disableAnimations": true,
    "closeOnEscape": false,
    "showConversationsButton": true,
    "enableTranscriptDownload": false,
    "className": "webchatIframe",
    "containerWidth": "100%25",
    "layoutWidth": "100%25",
    "showCloseButton": true
});
window.botpressWebChat.onEvent(function () {
    window.botpressWebChat.sendEvent({
        type: 'show'
    })
}, ['LIFECYCLE.LOADED']);

//Baidu
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0d684c977a65aaabd97ff7424155c52b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


