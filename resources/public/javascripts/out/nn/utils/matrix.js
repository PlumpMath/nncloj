// Compiled by ClojureScript 0.0-2173
goog.provide('nn.utils.matrix');
goog.require('cljs.core');
nn.utils.matrix.transform_matrix = (function transform_matrix(rx,ry,rz){var cx = Math.cos.call(null,rx);var cy = Math.cos.call(null,ry);var cz = Math.cos.call(null,rz);var sx = Math.sin.call(null,rx);var sy = Math.sin.call(null,ry);var sz = Math.sin.call(null,rz);return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cy * cz),(((sx * sy) * cz) - (cx * sz)),((sx * sz) + ((cx * sy) * cz)),0,(cy * sz),(((sx * sy) * sz) + (cx * cz)),(((cx * sy) * sz) - (sx * cz)),0,(- sy),(sx * cy),(cx * cy),0,0,0,0,1], null);
});
nn.utils.matrix.identity_matrix = (function identity_matrix(){return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], null);
});
nn.utils.matrix.square_vertex = cljs.core.PersistentVector.fromArray([1.0,1.0,1.0,-1.0,1.0,1.0,-1.0,-1.0,1.0,1.0,-1.0,1.0,1.0,1.0,-1.0,-1.0,1.0,-1.0,-1.0,-1.0,-1.0,1.0,-1.0,-1.0,-1.0,1.0,1.0,-1.0,1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,1.0,1.0,1.0,1.0,1.0,-1.0,1.0,1.0,-1.0,-1.0,1.0,1.0,-1.0,1.0,1.0,1.0,1.0,1.0,-1.0,-1.0,1.0,-1.0,-1.0,1.0,1.0,1.0,-1.0,1.0,1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,1.0], true);
nn.utils.matrix.cube_index = cljs.core.PersistentVector.fromArray([0,1,2,0,2,3,4,6,5,4,7,6,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,22,21,20,23,22], true);

//# sourceMappingURL=matrix.js.map