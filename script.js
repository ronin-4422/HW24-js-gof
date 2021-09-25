(function( $ ) {
    var o = $( {} );

    $.each({
        trigger: 'publish',
        on: 'subscribe',
        off: 'unsubscribe'
    }, function( key, val ) {
        jQuery[val] = function() {
            o[key].apply( o, arguments );
        };
    });
})( jQuery );

let bill = {
    sendMsg: function() {
        setTimeout (function () {
            $.publish('message to Rose from Bill', { results: [{text: 'Hi Rose!'}] } )
            $.subscribe('message from Rose', function (e, results) {
                console.log(results) 
            })
        },2000)
    }  
}

let jack = {
    sendMsg: function () { 
        setTimeout (function () {
        $.publish('message to Rose from Jack', { results: [{text: 'I love you Rose!'}] } )
        $.subscribe('message from Rose', function (e, results) {
            console.log(results) 
        })
    },2000)
}
}
   

let rose = {
    subscribe: function () {
        $.subscribe('message to Rose from Bill', function (e, results) {
            console.log(results) 
        })
        $.subscribe('message to Rose from Jack', function (e, results) {
            console.log(results)  
        })
        $.publish('message from Rose', { results: [{text: 'Hello guys!!!'}] } )
    }
}



