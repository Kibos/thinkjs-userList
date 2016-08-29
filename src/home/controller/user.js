'use strict';
/**
 *
 */
 export default class extends think.controller.rest {
   init(http){
     super.init(http);
     this._method='method';
   }
   __before(){

   }

 }
