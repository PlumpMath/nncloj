// Compiled by ClojureScript 0.0-2173
goog.provide('nn.utils.input');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.events');
nn.utils.input.keycodes = new cljs.core.PersistentArrayMap(null, 3, [16,new cljs.core.Keyword(null,"shift","shift",1123311604),32,new cljs.core.Keyword(null,"space","space",1123542136),13,new cljs.core.Keyword(null,"enter","enter",1110571594)], null);
/**
* Transform an js event object into the key name
*/
nn.utils.input.event__GT_key = (function event__GT_key(ev){return cljs.core.get.call(null,nn.utils.input.keycodes,ev.keyCode,new cljs.core.Keyword(null,"key-not-found","key-not-found",1380119948));
});
/**
* Creates a channel with the events of type event-type and optionally applies
* the function parse-event to each event.
*/
nn.utils.input.event_chan = (function() {
var event_chan = null;
var event_chan__1 = (function (event_type){return event_chan.call(null,event_type,cljs.core.identity);
});
var event_chan__2 = (function (event_type,parse_event){var ev_chan = cljs.core.async.chan.call(null);goog.events.listen(document.body,event_type,(function (p1__10819_SHARP_){return cljs.core.async.put_BANG_.call(null,ev_chan,parse_event.call(null,p1__10819_SHARP_));
}));
return ev_chan;
});
event_chan = function(event_type,parse_event){
switch(arguments.length){
case 1:
return event_chan__1.call(this,event_type);
case 2:
return event_chan__2.call(this,event_type,parse_event);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
event_chan.cljs$core$IFn$_invoke$arity$1 = event_chan__1;
event_chan.cljs$core$IFn$_invoke$arity$2 = event_chan__2;
return event_chan;
})()
;
/**
* Returns a channel with the key events of event-type parsed and
* filtered by the allowed-keys
*/
nn.utils.input.keys_chan = (function keys_chan(event_type,allowed_keys){var evs = nn.utils.input.event_chan.call(null,event_type,nn.utils.input.event__GT_key);return cljs.core.async.filter_LT_.call(null,allowed_keys,evs);
});
nn.utils.input.spatial_and_color = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space","space",1123542136),null], null), null);
nn.utils.input.reset_key = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1110571594),null], null), null);
nn.utils.input.input_score_key = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shift","shift",1123311604),null], null), null);
nn.utils.input.valid_keys_up = clojure.set.union.call(null,nn.utils.input.spatial_and_color,nn.utils.input.input_score_key);
/**
* Create a channel of keys up restricted by the valid keys
*/
nn.utils.input.keys_up_chan = (function keys_up_chan(){return nn.utils.input.keys_chan.call(null,goog.events.EventType.KEYUP,nn.utils.input.valid_keys_up);
});
nn.utils.input.valid_keys_down = clojure.set.union.call(null,nn.utils.input.spatial_and_color,nn.utils.input.reset_key);
/**
* Create a channel of keys pressed down restricted by the valid keys
*/
nn.utils.input.keys_down_chan = (function keys_down_chan(){return nn.utils.input.keys_chan.call(null,goog.events.EventType.KEYDOWN,nn.utils.input.valid_keys_down);
});
nn.utils.input.click_down_chan = (function click_down_chan(){return nn.utils.input.event_chan.call(null,goog.events.EventType.CLICK);
});
nn.utils.input.click__GT_clack = (function click__GT_clack(k){if(cljs.core.truth_(k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nback","nback",1118507463),true], null);
} else
{return null;
}
});
/**
* Transform a key pressed down to the command we will send to the game
*/
nn.utils.input.key_down__GT_command = (function key_down__GT_command(k){if(cljs.core.truth_(nn.utils.input.reset_key.call(null,k)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",1122308289)], null);
} else
{if(cljs.core.truth_(nn.utils.input.spatial_and_color.call(null,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"double","double",3982913347),true], null);
} else
{return null;
}
}
});
/**
* Transform a key up to the command we will send to the game
*/
nn.utils.input.key_up__GT_command = (function key_up__GT_command(k){if(cljs.core.truth_(nn.utils.input.input_score_key.call(null,k)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772)], null);
} else
{if(cljs.core.truth_(nn.utils.input.spatial_and_color.call(null,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"double","double",3982913347),false], null);
} else
{return null;
}
}
});
/**
* Initialize event processing. It takes all the key presses and transforms
* them into commands and passes them to the game commands channel
*/
nn.utils.input.init_events_BANG_ = (function init_events_BANG_(game_commands){var keys_pressed = nn.utils.input.keys_down_chan.call(null);var keys_up = nn.utils.input.keys_up_chan.call(null);var click_down = nn.utils.input.click_down_chan.call(null);var commands = cljs.core.async.unique.call(null,cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,nn.utils.input.key_down__GT_command,keys_pressed),cljs.core.async.map_LT_.call(null,nn.utils.input.key_up__GT_command,keys_up)], null)));return cljs.core.async.pipe.call(null,commands,game_commands);
});

//# sourceMappingURL=input.js.map