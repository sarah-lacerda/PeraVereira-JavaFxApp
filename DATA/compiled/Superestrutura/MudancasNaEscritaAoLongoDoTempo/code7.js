gdjs.A5Code = {};
gdjs.A5Code.GD1Objects1_1final = [];

gdjs.A5Code.GD2Objects1_1final = [];

gdjs.A5Code.GD3Objects1_1final = [];

gdjs.A5Code.GDforwardButtonObjects1= [];
gdjs.A5Code.GDforwardButtonObjects2= [];
gdjs.A5Code.GDbackButtonObjects1= [];
gdjs.A5Code.GDbackButtonObjects2= [];
gdjs.A5Code.GDperaObjects1= [];
gdjs.A5Code.GDperaObjects2= [];
gdjs.A5Code.GDperaSaysObjects1= [];
gdjs.A5Code.GDperaSaysObjects2= [];
gdjs.A5Code.GDtextoObjects1= [];
gdjs.A5Code.GDtextoObjects2= [];
gdjs.A5Code.GDtelaObjects1= [];
gdjs.A5Code.GDtelaObjects2= [];
gdjs.A5Code.GD1Objects1= [];
gdjs.A5Code.GD1Objects2= [];
gdjs.A5Code.GD2Objects1= [];
gdjs.A5Code.GD2Objects2= [];
gdjs.A5Code.GD3Objects1= [];
gdjs.A5Code.GD3Objects2= [];
gdjs.A5Code.GD4Objects1= [];
gdjs.A5Code.GD4Objects2= [];
gdjs.A5Code.GDareaObjects1= [];
gdjs.A5Code.GDareaObjects2= [];

gdjs.A5Code.conditionTrue_0 = {val:false};
gdjs.A5Code.condition0IsTrue_0 = {val:false};
gdjs.A5Code.condition1IsTrue_0 = {val:false};
gdjs.A5Code.condition2IsTrue_0 = {val:false};
gdjs.A5Code.condition3IsTrue_0 = {val:false};
gdjs.A5Code.conditionTrue_1 = {val:false};
gdjs.A5Code.condition0IsTrue_1 = {val:false};
gdjs.A5Code.condition1IsTrue_1 = {val:false};
gdjs.A5Code.condition2IsTrue_1 = {val:false};
gdjs.A5Code.condition3IsTrue_1 = {val:false};


gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.A5Code.GD2Objects2});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.A5Code.GD3Objects2});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A5Code.GD1Objects2});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A5Code.GD4Objects1});gdjs.A5Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
gdjs.A5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{

gdjs.A5Code.GD1Objects1.length = 0;

gdjs.A5Code.GD2Objects1.length = 0;

gdjs.A5Code.GD3Objects1.length = 0;


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition1IsTrue_0;
gdjs.A5Code.GD1Objects1_1final.length = 0;gdjs.A5Code.GD2Objects1_1final.length = 0;gdjs.A5Code.GD3Objects1_1final.length = 0;gdjs.A5Code.condition0IsTrue_1.val = false;
gdjs.A5Code.condition1IsTrue_1.val = false;
gdjs.A5Code.condition2IsTrue_1.val = false;
{
gdjs.A5Code.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.A5Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.A5Code.condition0IsTrue_1.val ) {
    gdjs.A5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A5Code.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.A5Code.GD2Objects1_1final.indexOf(gdjs.A5Code.GD2Objects2[j]) === -1 )
            gdjs.A5Code.GD2Objects1_1final.push(gdjs.A5Code.GD2Objects2[j]);
    }
}
}
{
gdjs.A5Code.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.A5Code.condition1IsTrue_1.val ) {
    gdjs.A5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A5Code.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.A5Code.GD3Objects1_1final.indexOf(gdjs.A5Code.GD3Objects2[j]) === -1 )
            gdjs.A5Code.GD3Objects1_1final.push(gdjs.A5Code.GD3Objects2[j]);
    }
}
}
{
gdjs.A5Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A5Code.condition2IsTrue_1.val ) {
    gdjs.A5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A5Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A5Code.GD1Objects1_1final.indexOf(gdjs.A5Code.GD1Objects2[j]) === -1 )
            gdjs.A5Code.GD1Objects1_1final.push(gdjs.A5Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A5Code.GD1Objects1.createFrom(gdjs.A5Code.GD1Objects1_1final);
gdjs.A5Code.GD2Objects1.createFrom(gdjs.A5Code.GD2Objects1_1final);
gdjs.A5Code.GD3Objects1.createFrom(gdjs.A5Code.GD3Objects1_1final);
}
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A5", false);
}}

}


{

gdjs.A5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
gdjs.A5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD4Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
gdjs.A5Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.A5Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A5Code.GDperaObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A5Code.condition0IsTrue_0.val) {
gdjs.A5Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A5Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A5Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition1IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8531044);
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD1Objects1[i].setPosition(64,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD2Objects1[i].setPosition(352,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD3Objects1[i].setPosition(64,448);
}
}{for(var i = 0, len = gdjs.A5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD4Objects1[i].setPosition(352,448);
}
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition1IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8532204);
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD4Objects1[i].setPosition(64,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD3Objects1[i].setPosition(352,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD2Objects1[i].setPosition(64,448);
}
}{for(var i = 0, len = gdjs.A5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD1Objects1[i].setPosition(352,448);
}
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition1IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8533340);
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD3Objects1[i].setPosition(64,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD1Objects1[i].setPosition(352,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD4Objects1[i].setPosition(64,448);
}
}{for(var i = 0, len = gdjs.A5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD2Objects1[i].setPosition(352,448);
}
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition1IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8534516);
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD2Objects1[i].setPosition(64,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD4Objects1[i].setPosition(352,128);
}
}{for(var i = 0, len = gdjs.A5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD1Objects1[i].setPosition(64,448);
}
}{for(var i = 0, len = gdjs.A5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD3Objects1[i].setPosition(352,448);
}
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A5Code.condition0IsTrue_0.val) {
gdjs.A5Code.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(3));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.A5Code.GDareaObjects1.length ;i < len;++i) {
    gdjs.A5Code.GDareaObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.A5Code.eventsList0xb25a8


gdjs.A5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A5Code.GDforwardButtonObjects1.length = 0;
gdjs.A5Code.GDforwardButtonObjects2.length = 0;
gdjs.A5Code.GDbackButtonObjects1.length = 0;
gdjs.A5Code.GDbackButtonObjects2.length = 0;
gdjs.A5Code.GDperaObjects1.length = 0;
gdjs.A5Code.GDperaObjects2.length = 0;
gdjs.A5Code.GDperaSaysObjects1.length = 0;
gdjs.A5Code.GDperaSaysObjects2.length = 0;
gdjs.A5Code.GDtextoObjects1.length = 0;
gdjs.A5Code.GDtextoObjects2.length = 0;
gdjs.A5Code.GDtelaObjects1.length = 0;
gdjs.A5Code.GDtelaObjects2.length = 0;
gdjs.A5Code.GD1Objects1.length = 0;
gdjs.A5Code.GD1Objects2.length = 0;
gdjs.A5Code.GD2Objects1.length = 0;
gdjs.A5Code.GD2Objects2.length = 0;
gdjs.A5Code.GD3Objects1.length = 0;
gdjs.A5Code.GD3Objects2.length = 0;
gdjs.A5Code.GD4Objects1.length = 0;
gdjs.A5Code.GD4Objects2.length = 0;
gdjs.A5Code.GDareaObjects1.length = 0;
gdjs.A5Code.GDareaObjects2.length = 0;

gdjs.A5Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A5Code'] = gdjs.A5Code;
