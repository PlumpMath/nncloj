// Compiled by ClojureScript 0.0-2173
goog.provide('nn.game_logic');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
nn.game_logic.initial_world = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"tri","tri",1014019357)], null);
/**
* Applies the game constraints (eating, dying, ...) to the world
* and returns the new version.
*/
nn.game_logic.update_world = (function update_world(p__9161){var map__9164 = p__9161;var map__9164__$1 = ((cljs.core.seq_QMARK_.call(null,map__9164))?cljs.core.apply.call(null,cljs.core.hash_map,map__9164):map__9164);var world = map__9164__$1;var mode = cljs.core.get.call(null,map__9164__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));var name = cljs.core.get.call(null,map__9164__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__9165 = name;var what = cljs.core.nth.call(null,vec__9165,0,null);var ever = cljs.core.nth.call(null,vec__9165,1,null);var plussed = (what + 1);return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plussed,cljs.core.mod.call(null,plussed,10)], null));
});
nn.game_logic.game_speed = 100;
/**
* Tick the game after the elapsed speed time
*/
nn.game_logic.plan_tick_BANG_ = (function() {
var plan_tick_BANG_ = null;
var plan_tick_BANG___2 = (function (speed,cmds){return plan_tick_BANG_.call(null,speed,cmds,cljs.core.async.chan.call(null));
});
var plan_tick_BANG___3 = (function (speed,cmds,shortcircuit){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9194){var state_val_9195 = (state_9194[1]);if((state_val_9195 === 2))
{var inst_9189 = (state_9194[2]);var inst_9190 = [new cljs.core.Keyword(null,"tick","tick",1017464079)];var inst_9191 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9190,null));var inst_9192 = cljs.core.async.put_BANG_.call(null,cmds,inst_9191);var state_9194__$1 = (function (){var statearr_9196 = state_9194;(statearr_9196[7] = inst_9189);
return statearr_9196;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9194__$1,inst_9192);
} else
{if((state_val_9195 === 1))
{var inst_9185 = cljs.core.async.timeout.call(null,nn.game_logic.game_speed);var inst_9186 = [inst_9185,shortcircuit];var inst_9187 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9186,null));var state_9194__$1 = state_9194;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9194__$1,2,inst_9187);
} else
{return null;
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9200 = [null,null,null,null,null,null,null,null];(statearr_9200[0] = state_machine__6178__auto__);
(statearr_9200[1] = 1);
return statearr_9200;
});
var state_machine__6178__auto____1 = (function (state_9194){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9194);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9201){if((e9201 instanceof Object))
{var ex__6181__auto__ = e9201;var statearr_9202_9204 = state_9194;(statearr_9202_9204[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9205 = state_9194;
state_9194 = G__9205;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9194){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9203 = f__6193__auto__.call(null);(statearr_9203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
plan_tick_BANG_ = function(speed,cmds,shortcircuit){
switch(arguments.length){
case 2:
return plan_tick_BANG___2.call(this,speed,cmds);
case 3:
return plan_tick_BANG___3.call(this,speed,cmds,shortcircuit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plan_tick_BANG_.cljs$core$IFn$_invoke$arity$2 = plan_tick_BANG___2;
plan_tick_BANG_.cljs$core$IFn$_invoke$arity$3 = plan_tick_BANG___3;
return plan_tick_BANG_;
})()
;
/**
* Game internal loop that processes commands and updates state
* applying functions
*/
nn.game_logic.game_BANG_ = (function game_BANG_(initial_world,cmds,notify){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9366){var state_val_9367 = (state_9366[1]);if((state_val_9367 === 1))
{var inst_9308 = initial_world;var state_9366__$1 = (function (){var statearr_9368 = state_9366;(statearr_9368[7] = inst_9308);
return statearr_9368;
})();var statearr_9369_9410 = state_9366__$1;(statearr_9369_9410[2] = null);
(statearr_9369_9410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 2))
{var state_9366__$1 = state_9366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9366__$1,4,cmds);
} else
{if((state_val_9367 === 3))
{var inst_9364 = (state_9366[2]);var state_9366__$1 = state_9366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9366__$1,inst_9364);
} else
{if((state_val_9367 === 4))
{var inst_9313 = (state_9366[8]);var inst_9312 = (state_9366[2]);var inst_9313__$1 = cljs.core.nth.call(null,inst_9312,0,null);var inst_9314 = cljs.core.nth.call(null,inst_9312,1,null);var state_9366__$1 = (function (){var statearr_9371 = state_9366;(statearr_9371[9] = inst_9314);
(statearr_9371[8] = inst_9313__$1);
return statearr_9371;
})();var G__9372_9411 = inst_9313__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"double","double",3982913347),G__9372_9411))
{var statearr_9373_9412 = state_9366__$1;(statearr_9373_9412[1] = 16);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tick","tick",1017464079),G__9372_9411))
{var statearr_9374_9413 = state_9366__$1;(statearr_9374_9413[1] = 10);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-start","game-start",552852025),G__9372_9411))
{var statearr_9375_9414 = state_9366__$1;(statearr_9375_9414[1] = 8);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reset","reset",1122308289),G__9372_9411))
{var statearr_9376_9415 = state_9366__$1;(statearr_9376_9415[1] = 7);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",1017141378),G__9372_9411))
{var statearr_9377_9416 = state_9366__$1;(statearr_9377_9416[1] = 6);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_9378_9417 = state_9366__$1;(statearr_9378_9417[1] = 20);
} else
{}
}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 5))
{var inst_9362 = (state_9366[2]);var state_9366__$1 = state_9366;var statearr_9379_9418 = state_9366__$1;(statearr_9379_9418[2] = inst_9362);
(statearr_9379_9418[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 6))
{var inst_9308 = (state_9366[7]);var inst_9315 = nn.game_logic.plan_tick_BANG_.call(null,0,cmds);var tmp9370 = inst_9308;var inst_9308__$1 = tmp9370;var state_9366__$1 = (function (){var statearr_9380 = state_9366;(statearr_9380[10] = inst_9315);
(statearr_9380[7] = inst_9308__$1);
return statearr_9380;
})();var statearr_9381_9419 = state_9366__$1;(statearr_9381_9419[2] = null);
(statearr_9381_9419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 7))
{var inst_9318 = [new cljs.core.Keyword(null,"init","init",1017141378)];var inst_9319 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9318,null));var inst_9320 = cljs.core.async.put_BANG_.call(null,cmds,inst_9319);var inst_9308 = initial_world;var state_9366__$1 = (function (){var statearr_9382 = state_9366;(statearr_9382[7] = inst_9308);
(statearr_9382[11] = inst_9320);
return statearr_9382;
})();var statearr_9383_9420 = state_9366__$1;(statearr_9383_9420[2] = null);
(statearr_9383_9420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 8))
{var inst_9323 = [new cljs.core.Keyword(null,"game-start","game-start",552852025)];var inst_9324 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9323,null));var state_9366__$1 = state_9366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9366__$1,9,notify,inst_9324);
} else
{if((state_val_9367 === 9))
{var inst_9326 = (state_9366[2]);var inst_9308 = initial_world;var state_9366__$1 = (function (){var statearr_9384 = state_9366;(statearr_9384[7] = inst_9308);
(statearr_9384[12] = inst_9326);
return statearr_9384;
})();var statearr_9385_9421 = state_9366__$1;(statearr_9385_9421[2] = null);
(statearr_9385_9421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 10))
{var inst_9308 = (state_9366[7]);var inst_9329 = (state_9366[13]);var inst_9329__$1 = nn.game_logic.update_world.call(null,inst_9308);var inst_9330 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_9329__$1);var inst_9331 = cljs.core._EQ_.call(null,inst_9330,new cljs.core.Keyword(null,"game-over","game-over",1968745793));var state_9366__$1 = (function (){var statearr_9386 = state_9366;(statearr_9386[13] = inst_9329__$1);
return statearr_9386;
})();if(inst_9331)
{var statearr_9387_9422 = state_9366__$1;(statearr_9387_9422[1] = 11);
} else
{var statearr_9388_9423 = state_9366__$1;(statearr_9388_9423[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 11))
{var inst_9333 = [new cljs.core.Keyword(null,"game-over","game-over",1968745793)];var inst_9334 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9333,null));var state_9366__$1 = state_9366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9366__$1,14,notify,inst_9334);
} else
{if((state_val_9367 === 12))
{var inst_9329 = (state_9366[13]);var inst_9339 = nn.game_logic.plan_tick_BANG_.call(null,nn.game_logic.game_speed,cmds);var inst_9340 = [new cljs.core.Keyword(null,"world","world",1127223044),inst_9329];var inst_9341 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9340,null));var state_9366__$1 = (function (){var statearr_9389 = state_9366;(statearr_9389[14] = inst_9339);
return statearr_9389;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9366__$1,15,notify,inst_9341);
} else
{if((state_val_9367 === 13))
{var inst_9346 = (state_9366[2]);var state_9366__$1 = state_9366;var statearr_9390_9424 = state_9366__$1;(statearr_9390_9424[2] = inst_9346);
(statearr_9390_9424[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 14))
{var inst_9329 = (state_9366[13]);var inst_9336 = (state_9366[2]);var inst_9308 = inst_9329;var state_9366__$1 = (function (){var statearr_9391 = state_9366;(statearr_9391[7] = inst_9308);
(statearr_9391[15] = inst_9336);
return statearr_9391;
})();var statearr_9392_9425 = state_9366__$1;(statearr_9392_9425[2] = null);
(statearr_9392_9425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 15))
{var inst_9329 = (state_9366[13]);var inst_9343 = (state_9366[2]);var inst_9308 = inst_9329;var state_9366__$1 = (function (){var statearr_9393 = state_9366;(statearr_9393[16] = inst_9343);
(statearr_9393[7] = inst_9308);
return statearr_9393;
})();var statearr_9394_9426 = state_9366__$1;(statearr_9394_9426[2] = null);
(statearr_9394_9426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 16))
{var inst_9314 = (state_9366[9]);var state_9366__$1 = state_9366;if(cljs.core.truth_(inst_9314))
{var statearr_9395_9427 = state_9366__$1;(statearr_9395_9427[1] = 17);
} else
{var statearr_9396_9428 = state_9366__$1;(statearr_9396_9428[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 17))
{var inst_9308 = (state_9366[7]);var inst_9349 = cljs.core.assoc.call(null,inst_9308,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"crap","crap",1016966224));var inst_9308__$1 = inst_9349;var state_9366__$1 = (function (){var statearr_9397 = state_9366;(statearr_9397[7] = inst_9308__$1);
return statearr_9397;
})();var statearr_9398_9429 = state_9366__$1;(statearr_9398_9429[2] = null);
(statearr_9398_9429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 18))
{var inst_9308 = (state_9366[7]);var inst_9352 = cljs.core.assoc.call(null,inst_9308,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"tri","tri",1014019357));var inst_9308__$1 = inst_9352;var state_9366__$1 = (function (){var statearr_9399 = state_9366;(statearr_9399[7] = inst_9308__$1);
return statearr_9399;
})();var statearr_9400_9430 = state_9366__$1;(statearr_9400_9430[2] = null);
(statearr_9400_9430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 19))
{var inst_9355 = (state_9366[2]);var state_9366__$1 = state_9366;var statearr_9401_9431 = state_9366__$1;(statearr_9401_9431[2] = inst_9355);
(statearr_9401_9431[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9367 === 20))
{var inst_9313 = (state_9366[8]);var inst_9357 = [cljs.core.str("Unrecognized game command: "),cljs.core.str(inst_9313)].join('');var inst_9358 = (new Error(inst_9357));var inst_9359 = (function(){throw inst_9358})();var state_9366__$1 = state_9366;var statearr_9402_9432 = state_9366__$1;(statearr_9402_9432[2] = inst_9359);
(statearr_9402_9432[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9406[0] = state_machine__6178__auto__);
(statearr_9406[1] = 1);
return statearr_9406;
});
var state_machine__6178__auto____1 = (function (state_9366){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9407){if((e9407 instanceof Object))
{var ex__6181__auto__ = e9407;var statearr_9408_9433 = state_9366;(statearr_9408_9433[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9434 = state_9366;
state_9366 = G__9434;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9366){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9409 = f__6193__auto__.call(null);(statearr_9409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
nn.game_logic.init = (function init(commands){var notifos = cljs.core.async.chan.call(null);nn.game_logic.game_BANG_.call(null,nn.game_logic.initial_world,commands,notifos);
return notifos;
});

//# sourceMappingURL=game_logic.js.map