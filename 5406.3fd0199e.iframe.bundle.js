"use strict";(self.webpackChunk_narmi_design_system=self.webpackChunk_narmi_design_system||[]).push([[5406,7787],{"./node_modules/classcat/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cc(names){if("string"==typeof names||"number"==typeof names)return""+names;let out="";if(Array.isArray(names))for(let tmp,i=0;i<names.length;i++)""!==(tmp=cc(names[i]))&&(out+=(out&&" ")+tmp);else for(let k in names)names[k]&&(out+=(out&&" ")+k);return out}__webpack_require__.d(__webpack_exports__,{A:()=>cc})},"./node_modules/core-js/internals/array-from.js":(module,__unused_webpack_exports,__webpack_require__)=>{var bind=__webpack_require__("./node_modules/core-js/internals/function-bind-context.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),callWithSafeIterationClosing=__webpack_require__("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),isArrayIteratorMethod=__webpack_require__("./node_modules/core-js/internals/is-array-iterator-method.js"),isConstructor=__webpack_require__("./node_modules/core-js/internals/is-constructor.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),createProperty=__webpack_require__("./node_modules/core-js/internals/create-property.js"),getIterator=__webpack_require__("./node_modules/core-js/internals/get-iterator.js"),getIteratorMethod=__webpack_require__("./node_modules/core-js/internals/get-iterator-method.js"),$Array=Array;module.exports=function from(arrayLike){var O=toObject(arrayLike),IS_CONSTRUCTOR=isConstructor(this),argumentsLength=arguments.length,mapfn=argumentsLength>1?arguments[1]:void 0,mapping=void 0!==mapfn;mapping&&(mapfn=bind(mapfn,argumentsLength>2?arguments[2]:void 0));var length,result,step,iterator,next,value,iteratorMethod=getIteratorMethod(O),index=0;if(!iteratorMethod||this===$Array&&isArrayIteratorMethod(iteratorMethod))for(length=lengthOfArrayLike(O),result=IS_CONSTRUCTOR?new this(length):$Array(length);length>index;index++)value=mapping?mapfn(O[index],index):O[index],createProperty(result,index,value);else for(result=IS_CONSTRUCTOR?new this:[],next=(iterator=getIterator(O,iteratorMethod)).next;!(step=call(next,iterator)).done;index++)value=mapping?callWithSafeIterationClosing(iterator,mapfn,[step.value,index],!0):step.value,createProperty(result,index,value);return result.length=index,result}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":(module,__unused_webpack_exports,__webpack_require__)=>{var anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),iteratorClose=__webpack_require__("./node_modules/core-js/internals/iterator-close.js");module.exports=function(iterator,fn,value,ENTRIES){try{return ENTRIES?fn(anObject(value)[0],value[1]):fn(value)}catch(error){iteratorClose(iterator,"throw",error)}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":(module,__unused_webpack_exports,__webpack_require__)=>{var ITERATOR=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};iteratorWithReturn[ITERATOR]=function(){return this},Array.from(iteratorWithReturn,(function(){throw 2}))}catch(error){}module.exports=function(exec,SKIP_CLOSING){try{if(!SKIP_CLOSING&&!SAFE_CLOSING)return!1}catch(error){return!1}var ITERATION_SUPPORT=!1;try{var object={};object[ITERATOR]=function(){return{next:function(){return{done:ITERATION_SUPPORT=!0}}}},exec(object)}catch(error){}return ITERATION_SUPPORT}},"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),regexpExec=__webpack_require__("./node_modules/core-js/internals/regexp-exec.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),SPECIES=wellKnownSymbol("species"),RegExpPrototype=RegExp.prototype;module.exports=function(KEY,exec,FORCED,SHAM){var SYMBOL=wellKnownSymbol(KEY),DELEGATES_TO_SYMBOL=!fails((function(){var O={};return O[SYMBOL]=function(){return 7},7!==""[KEY](O)})),DELEGATES_TO_EXEC=DELEGATES_TO_SYMBOL&&!fails((function(){var execCalled=!1,re=/a/;return"split"===KEY&&((re={}).constructor={},re.constructor[SPECIES]=function(){return re},re.flags="",re[SYMBOL]=/./[SYMBOL]),re.exec=function(){return execCalled=!0,null},re[SYMBOL](""),!execCalled}));if(!DELEGATES_TO_SYMBOL||!DELEGATES_TO_EXEC||FORCED){var nativeRegExpMethod=/./[SYMBOL],methods=exec(SYMBOL,""[KEY],(function(nativeMethod,regexp,str,arg2,forceStringMethod){var $exec=regexp.exec;return $exec===regexpExec||$exec===RegExpPrototype.exec?DELEGATES_TO_SYMBOL&&!forceStringMethod?{done:!0,value:call(nativeRegExpMethod,regexp,str,arg2)}:{done:!0,value:call(nativeMethod,str,regexp,arg2)}:{done:!1}}));defineBuiltIn(String.prototype,KEY,methods[0]),defineBuiltIn(RegExpPrototype,SYMBOL,methods[1])}SHAM&&createNonEnumerableProperty(RegExpPrototype[SYMBOL],"sham",!0)}},"./node_modules/core-js/internals/get-iterator-method.js":(module,__unused_webpack_exports,__webpack_require__)=>{var classof=__webpack_require__("./node_modules/core-js/internals/classof.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js"),isNullOrUndefined=__webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js"),Iterators=__webpack_require__("./node_modules/core-js/internals/iterators.js"),ITERATOR=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("iterator");module.exports=function(it){if(!isNullOrUndefined(it))return getMethod(it,ITERATOR)||getMethod(it,"@@iterator")||Iterators[classof(it)]}},"./node_modules/core-js/internals/get-iterator.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),tryToString=__webpack_require__("./node_modules/core-js/internals/try-to-string.js"),getIteratorMethod=__webpack_require__("./node_modules/core-js/internals/get-iterator-method.js"),$TypeError=TypeError;module.exports=function(argument,usingIterator){var iteratorMethod=arguments.length<2?getIteratorMethod(argument):usingIterator;if(aCallable(iteratorMethod))return anObject(call(iteratorMethod,argument));throw new $TypeError(tryToString(argument)+" is not iterable")}},"./node_modules/core-js/internals/is-array-iterator-method.js":(module,__unused_webpack_exports,__webpack_require__)=>{var wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),Iterators=__webpack_require__("./node_modules/core-js/internals/iterators.js"),ITERATOR=wellKnownSymbol("iterator"),ArrayPrototype=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayPrototype[ITERATOR]===it)}},"./node_modules/core-js/internals/iterator-close.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js");module.exports=function(iterator,kind,value){var innerResult,innerError;anObject(iterator);try{if(!(innerResult=getMethod(iterator,"return"))){if("throw"===kind)throw value;return value}innerResult=call(innerResult,iterator)}catch(error){innerError=!0,innerResult=error}if("throw"===kind)throw value;if(innerError)throw innerResult;return anObject(innerResult),value}},"./node_modules/core-js/internals/regexp-exec-abstract.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),classof=__webpack_require__("./node_modules/core-js/internals/classof-raw.js"),regexpExec=__webpack_require__("./node_modules/core-js/internals/regexp-exec.js"),$TypeError=TypeError;module.exports=function(R,S){var exec=R.exec;if(isCallable(exec)){var result=call(exec,R,S);return null!==result&&anObject(result),result}if("RegExp"===classof(R))return call(regexpExec,R,S);throw new $TypeError("RegExp#exec called on incompatible receiver")}},"./node_modules/core-js/internals/regexp-exec.js":(module,__unused_webpack_exports,__webpack_require__)=>{var re1,re2,call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),regexpFlags=__webpack_require__("./node_modules/core-js/internals/regexp-flags.js"),stickyHelpers=__webpack_require__("./node_modules/core-js/internals/regexp-sticky-helpers.js"),shared=__webpack_require__("./node_modules/core-js/internals/shared.js"),create=__webpack_require__("./node_modules/core-js/internals/object-create.js"),getInternalState=__webpack_require__("./node_modules/core-js/internals/internal-state.js").get,UNSUPPORTED_DOT_ALL=__webpack_require__("./node_modules/core-js/internals/regexp-unsupported-dot-all.js"),UNSUPPORTED_NCG=__webpack_require__("./node_modules/core-js/internals/regexp-unsupported-ncg.js"),nativeReplace=shared("native-string-replace",String.prototype.replace),nativeExec=RegExp.prototype.exec,patchedExec=nativeExec,charAt=uncurryThis("".charAt),indexOf=uncurryThis("".indexOf),replace=uncurryThis("".replace),stringSlice=uncurryThis("".slice),UPDATES_LAST_INDEX_WRONG=(re2=/b*/g,call(nativeExec,re1=/a/,"a"),call(nativeExec,re2,"a"),0!==re1.lastIndex||0!==re2.lastIndex),UNSUPPORTED_Y=stickyHelpers.BROKEN_CARET,NPCG_INCLUDED=void 0!==/()??/.exec("")[1];(UPDATES_LAST_INDEX_WRONG||NPCG_INCLUDED||UNSUPPORTED_Y||UNSUPPORTED_DOT_ALL||UNSUPPORTED_NCG)&&(patchedExec=function exec(string){var result,reCopy,lastIndex,match,i,object,group,re=this,state=getInternalState(re),str=toString(string),raw=state.raw;if(raw)return raw.lastIndex=re.lastIndex,result=call(patchedExec,raw,str),re.lastIndex=raw.lastIndex,result;var groups=state.groups,sticky=UNSUPPORTED_Y&&re.sticky,flags=call(regexpFlags,re),source=re.source,charsAdded=0,strCopy=str;if(sticky&&(flags=replace(flags,"y",""),-1===indexOf(flags,"g")&&(flags+="g"),strCopy=stringSlice(str,re.lastIndex),re.lastIndex>0&&(!re.multiline||re.multiline&&"\n"!==charAt(str,re.lastIndex-1))&&(source="(?: "+source+")",strCopy=" "+strCopy,charsAdded++),reCopy=new RegExp("^(?:"+source+")",flags)),NPCG_INCLUDED&&(reCopy=new RegExp("^"+source+"$(?!\\s)",flags)),UPDATES_LAST_INDEX_WRONG&&(lastIndex=re.lastIndex),match=call(nativeExec,sticky?reCopy:re,strCopy),sticky?match?(match.input=stringSlice(match.input,charsAdded),match[0]=stringSlice(match[0],charsAdded),match.index=re.lastIndex,re.lastIndex+=match[0].length):re.lastIndex=0:UPDATES_LAST_INDEX_WRONG&&match&&(re.lastIndex=re.global?match.index+match[0].length:lastIndex),NPCG_INCLUDED&&match&&match.length>1&&call(nativeReplace,match[0],reCopy,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(match[i]=void 0)})),match&&groups)for(match.groups=object=create(null),i=0;i<groups.length;i++)object[(group=groups[i])[0]]=match[group[1]];return match}),module.exports=patchedExec},"./node_modules/core-js/internals/regexp-flags.js":(module,__unused_webpack_exports,__webpack_require__)=>{var anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js");module.exports=function(){var that=anObject(this),result="";return that.hasIndices&&(result+="d"),that.global&&(result+="g"),that.ignoreCase&&(result+="i"),that.multiline&&(result+="m"),that.dotAll&&(result+="s"),that.unicode&&(result+="u"),that.unicodeSets&&(result+="v"),that.sticky&&(result+="y"),result}},"./node_modules/core-js/internals/regexp-get-flags.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),isPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js"),regExpFlags=__webpack_require__("./node_modules/core-js/internals/regexp-flags.js"),RegExpPrototype=RegExp.prototype;module.exports=function(R){var flags=R.flags;return void 0!==flags||"flags"in RegExpPrototype||hasOwn(R,"flags")||!isPrototypeOf(RegExpPrototype,R)?flags:call(regExpFlags,R)}},"./node_modules/core-js/internals/regexp-sticky-helpers.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),$RegExp=__webpack_require__("./node_modules/core-js/internals/global.js").RegExp,UNSUPPORTED_Y=fails((function(){var re=$RegExp("a","y");return re.lastIndex=2,null!==re.exec("abcd")})),MISSED_STICKY=UNSUPPORTED_Y||fails((function(){return!$RegExp("a","y").sticky})),BROKEN_CARET=UNSUPPORTED_Y||fails((function(){var re=$RegExp("^r","gy");return re.lastIndex=2,null!==re.exec("str")}));module.exports={BROKEN_CARET,MISSED_STICKY,UNSUPPORTED_Y}},"./node_modules/core-js/internals/regexp-unsupported-dot-all.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),$RegExp=__webpack_require__("./node_modules/core-js/internals/global.js").RegExp;module.exports=fails((function(){var re=$RegExp(".","s");return!(re.dotAll&&re.test("\n")&&"s"===re.flags)}))},"./node_modules/core-js/internals/regexp-unsupported-ncg.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),$RegExp=__webpack_require__("./node_modules/core-js/internals/global.js").RegExp;module.exports=fails((function(){var re=$RegExp("(?<a>b)","g");return"b"!==re.exec("b").groups.a||"bc"!=="b".replace(re,"$<a>c")}))},"./node_modules/core-js/internals/same-value.js":module=>{module.exports=Object.is||function is(x,y){return x===y?0!==x||1/x==1/y:x!=x&&y!=y}},"./node_modules/core-js/modules/es.array.from.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),from=__webpack_require__("./node_modules/core-js/internals/array-from.js");$({target:"Array",stat:!0,forced:!__webpack_require__("./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(iterable){Array.from(iterable)}))},{from})},"./node_modules/core-js/modules/es.array.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$includes=__webpack_require__("./node_modules/core-js/internals/array-includes.js").includes,fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),addToUnscopables=__webpack_require__("./node_modules/core-js/internals/add-to-unscopables.js");$({target:"Array",proto:!0,forced:fails((function(){return!Array(1).includes()}))},{includes:function includes(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("includes")},"./node_modules/core-js/modules/es.array.index-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!nativeIndexOf&&1/nativeIndexOf([1],1,-0)<0;$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!arrayMethodIsStrict("indexOf")},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?nativeIndexOf(this,searchElement,fromIndex)||0:$indexOf(this,searchElement,fromIndex)}})},"./node_modules/core-js/modules/es.array.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$map=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").map;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-has-species-support.js")("map")},{map:function map(callbackfn){return $map(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es.array.slice.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),isArray=__webpack_require__("./node_modules/core-js/internals/is-array.js"),isConstructor=__webpack_require__("./node_modules/core-js/internals/is-constructor.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),toAbsoluteIndex=__webpack_require__("./node_modules/core-js/internals/to-absolute-index.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),toIndexedObject=__webpack_require__("./node_modules/core-js/internals/to-indexed-object.js"),createProperty=__webpack_require__("./node_modules/core-js/internals/create-property.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),arrayMethodHasSpeciesSupport=__webpack_require__("./node_modules/core-js/internals/array-method-has-species-support.js"),nativeSlice=__webpack_require__("./node_modules/core-js/internals/array-slice.js"),HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport("slice"),SPECIES=wellKnownSymbol("species"),$Array=Array,max=Math.max;$({target:"Array",proto:!0,forced:!HAS_SPECIES_SUPPORT},{slice:function slice(start,end){var Constructor,result,n,O=toIndexedObject(this),length=lengthOfArrayLike(O),k=toAbsoluteIndex(start,length),fin=toAbsoluteIndex(void 0===end?length:end,length);if(isArray(O)&&(Constructor=O.constructor,(isConstructor(Constructor)&&(Constructor===$Array||isArray(Constructor.prototype))||isObject(Constructor)&&null===(Constructor=Constructor[SPECIES]))&&(Constructor=void 0),Constructor===$Array||void 0===Constructor))return nativeSlice(O,k,fin);for(result=new(void 0===Constructor?$Array:Constructor)(max(fin-k,0)),n=0;k<fin;k++,n++)k in O&&createProperty(result,n,O[k]);return result.length=n,result}})},"./node_modules/core-js/modules/es.regexp.exec.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),exec=__webpack_require__("./node_modules/core-js/internals/regexp-exec.js");$({target:"RegExp",proto:!0,forced:/./.exec!==exec},{exec})},"./node_modules/core-js/modules/es.regexp.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var PROPER_FUNCTION_NAME=__webpack_require__("./node_modules/core-js/internals/function-name.js").PROPER,defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),$toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),getRegExpFlags=__webpack_require__("./node_modules/core-js/internals/regexp-get-flags.js"),RegExpPrototype=RegExp.prototype,nativeToString=RegExpPrototype.toString,NOT_GENERIC=fails((function(){return"/a/b"!==nativeToString.call({source:"a",flags:"b"})})),INCORRECT_NAME=PROPER_FUNCTION_NAME&&"toString"!==nativeToString.name;(NOT_GENERIC||INCORRECT_NAME)&&defineBuiltIn(RegExpPrototype,"toString",(function toString(){var R=anObject(this);return"/"+$toString(R.source)+"/"+$toString(getRegExpFlags(R))}),{unsafe:!0})},"./node_modules/core-js/modules/es.string.search.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fixRegExpWellKnownSymbolLogic=__webpack_require__("./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),isNullOrUndefined=__webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),sameValue=__webpack_require__("./node_modules/core-js/internals/same-value.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js"),regExpExec=__webpack_require__("./node_modules/core-js/internals/regexp-exec-abstract.js");fixRegExpWellKnownSymbolLogic("search",(function(SEARCH,nativeSearch,maybeCallNative){return[function search(regexp){var O=requireObjectCoercible(this),searcher=isNullOrUndefined(regexp)?void 0:getMethod(regexp,SEARCH);return searcher?call(searcher,regexp,O):new RegExp(regexp)[SEARCH](toString(O))},function(string){var rx=anObject(this),S=toString(string),res=maybeCallNative(nativeSearch,rx,S);if(res.done)return res.value;var previousLastIndex=rx.lastIndex;sameValue(previousLastIndex,0)||(rx.lastIndex=0);var result=regExpExec(rx,S);return sameValue(rx.lastIndex,previousLastIndex)||(rx.lastIndex=previousLastIndex),null===result?-1:result.index}]}))}}]);