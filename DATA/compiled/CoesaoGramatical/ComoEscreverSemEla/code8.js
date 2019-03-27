gdjs.A3DiscontinuedCode = {};
gdjs.A3DiscontinuedCode.GD1Objects1_1final = [];

gdjs.A3DiscontinuedCode.GD2Objects1_1final = [];

gdjs.A3DiscontinuedCode.GD3Objects1_1final = [];

gdjs.A3DiscontinuedCode.GD4Objects1_1final = [];

gdjs.A3DiscontinuedCode.GDforwardButtonObjects1= [];
gdjs.A3DiscontinuedCode.GDforwardButtonObjects2= [];
gdjs.A3DiscontinuedCode.GDbackButtonObjects1= [];
gdjs.A3DiscontinuedCode.GDbackButtonObjects2= [];
gdjs.A3DiscontinuedCode.GDperaObjects1= [];
gdjs.A3DiscontinuedCode.GDperaObjects2= [];
gdjs.A3DiscontinuedCode.GDperaSaysObjects1= [];
gdjs.A3DiscontinuedCode.GDperaSaysObjects2= [];
gdjs.A3DiscontinuedCode.GDtextoObjects1= [];
gdjs.A3DiscontinuedCode.GDtextoObjects2= [];
gdjs.A3DiscontinuedCode.GDvoltarAtivObjects1= [];
gdjs.A3DiscontinuedCode.GDvoltarAtivObjects2= [];
gdjs.A3DiscontinuedCode.GDvoltarAoTextoObjects1= [];
gdjs.A3DiscontinuedCode.GDvoltarAoTextoObjects2= [];
gdjs.A3DiscontinuedCode.GDtelaObjects1= [];
gdjs.A3DiscontinuedCode.GDtelaObjects2= [];
gdjs.A3DiscontinuedCode.GD1Objects1= [];
gdjs.A3DiscontinuedCode.GD1Objects2= [];
gdjs.A3DiscontinuedCode.GD2Objects1= [];
gdjs.A3DiscontinuedCode.GD2Objects2= [];
gdjs.A3DiscontinuedCode.GD3Objects1= [];
gdjs.A3DiscontinuedCode.GD3Objects2= [];
gdjs.A3DiscontinuedCode.GD4Objects1= [];
gdjs.A3DiscontinuedCode.GD4Objects2= [];
gdjs.A3DiscontinuedCode.GDareaObjects1= [];
gdjs.A3DiscontinuedCode.GDareaObjects2= [];

gdjs.A3DiscontinuedCode.conditionTrue_0 = {val:false};
gdjs.A3DiscontinuedCode.condition0IsTrue_0 = {val:false};
gdjs.A3DiscontinuedCode.condition1IsTrue_0 = {val:false};
gdjs.A3DiscontinuedCode.condition2IsTrue_0 = {val:false};
gdjs.A3DiscontinuedCode.condition3IsTrue_0 = {val:false};
gdjs.A3DiscontinuedCode.condition4IsTrue_0 = {val:false};
gdjs.A3DiscontinuedCode.conditionTrue_1 = {val:false};
gdjs.A3DiscontinuedCode.condition0IsTrue_1 = {val:false};
gdjs.A3DiscontinuedCode.condition1IsTrue_1 = {val:false};
gdjs.A3DiscontinuedCode.condition2IsTrue_1 = {val:false};
gdjs.A3DiscontinuedCode.condition3IsTrue_1 = {val:false};
gdjs.A3DiscontinuedCode.condition4IsTrue_1 = {val:false};


gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A3DiscontinuedCode.GD1Objects2});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.A3DiscontinuedCode.GD2Objects2});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.A3DiscontinuedCode.GD3Objects2});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.A3DiscontinuedCode.GD4Objects2});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GDareaObjects1Objects = Hashtable.newFrom({"area": gdjs.A3DiscontinuedCode.GDareaObjects1});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A3DiscontinuedCode.GD1Objects1});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GDareaObjects1Objects = Hashtable.newFrom({"area": gdjs.A3DiscontinuedCode.GDareaObjects1});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A3DiscontinuedCode.GD1Objects1});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GDareaObjects1Objects = Hashtable.newFrom({"area": gdjs.A3DiscontinuedCode.GDareaObjects1});gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A3DiscontinuedCode.GD1Objects1});gdjs.A3DiscontinuedCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A3DiscontinuedCode.condition0IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(7));
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GDareaObjects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GDareaObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.A3DiscontinuedCode.GD1Objects1.length = 0;

gdjs.A3DiscontinuedCode.GD2Objects1.length = 0;

gdjs.A3DiscontinuedCode.GD3Objects1.length = 0;

gdjs.A3DiscontinuedCode.GD4Objects1.length = 0;


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition2IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3DiscontinuedCode.condition1IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition2IsTrue_0;
gdjs.A3DiscontinuedCode.GD1Objects1_1final.length = 0;gdjs.A3DiscontinuedCode.GD2Objects1_1final.length = 0;gdjs.A3DiscontinuedCode.GD3Objects1_1final.length = 0;gdjs.A3DiscontinuedCode.GD4Objects1_1final.length = 0;gdjs.A3DiscontinuedCode.condition0IsTrue_1.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_1.val = false;
gdjs.A3DiscontinuedCode.condition2IsTrue_1.val = false;
gdjs.A3DiscontinuedCode.condition3IsTrue_1.val = false;
{
gdjs.A3DiscontinuedCode.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A3DiscontinuedCode.condition0IsTrue_1.val ) {
    gdjs.A3DiscontinuedCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3DiscontinuedCode.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A3DiscontinuedCode.GD1Objects1_1final.indexOf(gdjs.A3DiscontinuedCode.GD1Objects2[j]) === -1 )
            gdjs.A3DiscontinuedCode.GD1Objects1_1final.push(gdjs.A3DiscontinuedCode.GD1Objects2[j]);
    }
}
}
{
gdjs.A3DiscontinuedCode.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.A3DiscontinuedCode.condition1IsTrue_1.val ) {
    gdjs.A3DiscontinuedCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3DiscontinuedCode.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.A3DiscontinuedCode.GD2Objects1_1final.indexOf(gdjs.A3DiscontinuedCode.GD2Objects2[j]) === -1 )
            gdjs.A3DiscontinuedCode.GD2Objects1_1final.push(gdjs.A3DiscontinuedCode.GD2Objects2[j]);
    }
}
}
{
gdjs.A3DiscontinuedCode.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.A3DiscontinuedCode.condition2IsTrue_1.val ) {
    gdjs.A3DiscontinuedCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3DiscontinuedCode.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.A3DiscontinuedCode.GD3Objects1_1final.indexOf(gdjs.A3DiscontinuedCode.GD3Objects2[j]) === -1 )
            gdjs.A3DiscontinuedCode.GD3Objects1_1final.push(gdjs.A3DiscontinuedCode.GD3Objects2[j]);
    }
}
}
{
gdjs.A3DiscontinuedCode.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.A3DiscontinuedCode.condition3IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.A3DiscontinuedCode.condition3IsTrue_1.val ) {
    gdjs.A3DiscontinuedCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3DiscontinuedCode.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.A3DiscontinuedCode.GD4Objects1_1final.indexOf(gdjs.A3DiscontinuedCode.GD4Objects2[j]) === -1 )
            gdjs.A3DiscontinuedCode.GD4Objects1_1final.push(gdjs.A3DiscontinuedCode.GD4Objects2[j]);
    }
}
}
{
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(gdjs.A3DiscontinuedCode.GD1Objects1_1final);
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(gdjs.A3DiscontinuedCode.GD2Objects1_1final);
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(gdjs.A3DiscontinuedCode.GD3Objects1_1final);
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(gdjs.A3DiscontinuedCode.GD4Objects1_1final);
}
}
}}
}
if (gdjs.A3DiscontinuedCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8100356);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8101508);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8102756);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8103892);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 4;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8105068);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 5;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8106244);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 6;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8107556);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(320,448);
}
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 7;
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
{gdjs.A3DiscontinuedCode.conditionTrue_1 = gdjs.A3DiscontinuedCode.condition1IsTrue_0;
gdjs.A3DiscontinuedCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8108732);
}
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3DiscontinuedCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD2Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD2Objects1[i].setPosition(32,448);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].setPosition(320,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(32,544);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD3Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD3Objects1[i].setPosition(320,448);
}
}}

}


{

gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));

gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GDareaObjects1Objects, gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects1Objects, false, runtimeScene, false);
}if (gdjs.A3DiscontinuedCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));

gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GDareaObjects1Objects, gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects1Objects, true, runtimeScene, false);
}if (gdjs.A3DiscontinuedCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.A3DiscontinuedCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3DiscontinuedCode.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));

gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3DiscontinuedCode.condition0IsTrue_0.val ) {
{
gdjs.A3DiscontinuedCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GDareaObjects1Objects, gdjs.A3DiscontinuedCode.mapOfGDgdjs_46A3DiscontinuedCode_46GD1Objects1Objects, false, runtimeScene, false);
}}
if (gdjs.A3DiscontinuedCode.condition1IsTrue_0.val) {
/* Reuse gdjs.A3DiscontinuedCode.GD1Objects1 */
gdjs.A3DiscontinuedCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A3DiscontinuedCode.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD1Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD1Objects1[i].setPosition(288,288);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GD4Objects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GD4Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A3DiscontinuedCode.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GDperaObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = false;
{
gdjs.A3DiscontinuedCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A3DiscontinuedCode.condition0IsTrue_0.val) {
gdjs.A3DiscontinuedCode.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A3DiscontinuedCode.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3DiscontinuedCode.GDperaObjects1[i].setAnimation(4);
}
}}

}


}; //End of gdjs.A3DiscontinuedCode.eventsList0xb25a8


gdjs.A3DiscontinuedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A3DiscontinuedCode.GDforwardButtonObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDforwardButtonObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDbackButtonObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDbackButtonObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDperaObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDperaObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDperaSaysObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDperaSaysObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDtextoObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDtextoObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDvoltarAtivObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDvoltarAtivObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDvoltarAoTextoObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDvoltarAoTextoObjects2.length = 0;
gdjs.A3DiscontinuedCode.GDtelaObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDtelaObjects2.length = 0;
gdjs.A3DiscontinuedCode.GD1Objects1.length = 0;
gdjs.A3DiscontinuedCode.GD1Objects2.length = 0;
gdjs.A3DiscontinuedCode.GD2Objects1.length = 0;
gdjs.A3DiscontinuedCode.GD2Objects2.length = 0;
gdjs.A3DiscontinuedCode.GD3Objects1.length = 0;
gdjs.A3DiscontinuedCode.GD3Objects2.length = 0;
gdjs.A3DiscontinuedCode.GD4Objects1.length = 0;
gdjs.A3DiscontinuedCode.GD4Objects2.length = 0;
gdjs.A3DiscontinuedCode.GDareaObjects1.length = 0;
gdjs.A3DiscontinuedCode.GDareaObjects2.length = 0;

gdjs.A3DiscontinuedCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A3DiscontinuedCode'] = gdjs.A3DiscontinuedCode;
