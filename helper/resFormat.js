const sucRes =  function (result, message){
    return{
        success: true,
        messages: message, //message want to display
        results: result //explain content data. ex: content of req.body
    }
}
const failRes = function (message){
    return {
        success: false,
        messages: message
    }
}
module.exports = {sucRes, failRes};