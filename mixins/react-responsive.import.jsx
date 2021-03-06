import enquire from '../lib/enquire';
import json2mq from '../lib/json2mq';

var ResponsiveMixin = {
    media: function (query, handler) {
        query = json2mq(query);
        if (typeof handler === 'function') {
            handler = {
                match: handler
            };
        }
        enquire.register(query, handler);

        // Queue the handlers to unregister them at unmount
        if (! this._responsiveMediaHandlers) {
            this._responsiveMediaHandlers = [];
        }
        this._responsiveMediaHandlers.push({query: query, handler: handler});
    },
    componentWillUnmount: function () {
        if (this._responsiveMediaHandlers) {
            this._responsiveMediaHandlers.forEach(function(obj) {
                enquire.unregister(obj.query, obj.handler);
            });
        }
    }
};

export default ResponsiveMixin;