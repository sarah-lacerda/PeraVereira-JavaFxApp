gdjs.A2Code = {};
gdjs.A2Code.GD1Objects1_1final = [];

gdjs.A2Code.GD2Objects1_1final = [];

gdjs.A2Code.GD4Objects1_1final = [];

gdjs.A2Code.GDforwardButtonObjects1= [];
gdjs.A2Code.GDforwardButtonObjects2= [];
gdjs.A2Code.GDbackButtonObjects1= [];
gdjs.A2Code.GDbackButtonObjects2= [];
gdjs.A2Code.GDperaObjects1= [];
gdjs.A2Code.GDperaObjects2= [];
gdjs.A2Code.GDperaSaysObjects1= [];
gdjs.A2Code.GDperaSaysObjects2= [];
gdjs.A2Code.GDtextoObjects1= [];
gdjs.A2Code.GDtextoObjects2= [];
gdjs.A2Code.GDvoltarTextoObjects1= [];
gdjs.A2Code.GDvoltarTextoObjects2= [];
gdjs.A2Code.GDvoltarAtivObjects1= [];
gdjs.A2Code.GDvoltarAtivObjects2= [];
gdjs.A2Code.GDtelaObjects1= [];
gdjs.A2Code.GDtelaObjects2= [];
gdjs.A2Code.GD1Objects1= [];
gdjs.A2Code.GD1Objects2= [];
gdjs.A2Code.GD2Objects1= [];
gdjs.A2Code.GD2Objects2= [];
gdjs.A2Code.GD3Objects1= [];
gdjs.A2Code.GD3Objects2= [];
gdjs.A2Code.GD4Objects1= [];
gdjs.A2Code.GD4Objects2= [];
gdjs.A2Code.GDareaObjects1= [];
gdjs.A2Code.GDareaObjects2= [];

gdjs.A2Code.conditionTrue_0 = {val:false};
gdjs.A2Code.condition0IsTrue_0 = {val:false};
gdjs.A2Code.condition1IsTrue_0 = {val:false};
gdjs.A2Code.condition2IsTrue_0 = {val:false};
gdjs.A2Code.condition3IsTrue_0 = {val:false};
gdjs.A2Code.condition4IsTrue_0 = {val:false};
gdjs.A2Code.condition5IsTrue_0 = {val:false};
gdjs.A2Code.conditionTrue_1 = {val:false};
gdjs.A2Code.condition0IsTrue_1 = {val:false};
gdjs.A2Code.condition1IsTrue_1 = {val:false};
gdjs.A2Code.condition2IsTrue_1 = {val:false};
gdjs.A2Code.condition3IsTrue_1 = {val:false};
gdjs.A2Code.condition4IsTrue_1 = {val:false};
gdjs.A2Code.condition5IsTrue_1 = {val:false};


gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A2Code.GD1Objects2});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.A2Code.GD2Objects2});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.A2Code.GD4Objects2});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A2Code.GD3Objects1});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.A2Code.GDvoltarAtivObjects1});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDvoltarTextoObjects1Objects = Hashtable.newFrom({"voltarTexto": gdjs.A2Code.GDvoltarTextoObjects1});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A2Code.GDforwardButtonObjects1});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A2Code.GDforwardButtonObjects1});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A2Code.GDbackButtonObjects1});gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A2Code.GDbackButtonObjects1});gdjs.A2Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{


gdjs.A2Code.condition0IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A2Code.condition0IsTrue_0.val) {
gdjs.A2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A2Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A2Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.A2Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
gdjs.A2Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(3));
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setPosition(99999,99999);
}
}{for(var i = 0, len = gdjs.A2Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarTextoObjects1[i].setPosition(96,384);
}
}{for(var i = 0, len = gdjs.A2Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarAtivObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A2Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDbackButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDforwardButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.A2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD1Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD2Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD3Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD4Objects1[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.A2Code.GD1Objects1.length = 0;

gdjs.A2Code.GD2Objects1.length = 0;

gdjs.A2Code.GD4Objects1.length = 0;


gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
gdjs.A2Code.condition2IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition1IsTrue_0;
gdjs.A2Code.GD1Objects1_1final.length = 0;gdjs.A2Code.GD2Objects1_1final.length = 0;gdjs.A2Code.GD4Objects1_1final.length = 0;gdjs.A2Code.condition0IsTrue_1.val = false;
gdjs.A2Code.condition1IsTrue_1.val = false;
gdjs.A2Code.condition2IsTrue_1.val = false;
{
gdjs.A2Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A2Code.condition0IsTrue_1.val ) {
    gdjs.A2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A2Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A2Code.GD1Objects1_1final.indexOf(gdjs.A2Code.GD1Objects2[j]) === -1 )
            gdjs.A2Code.GD1Objects1_1final.push(gdjs.A2Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A2Code.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.A2Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.A2Code.condition1IsTrue_1.val ) {
    gdjs.A2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A2Code.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.A2Code.GD2Objects1_1final.indexOf(gdjs.A2Code.GD2Objects2[j]) === -1 )
            gdjs.A2Code.GD2Objects1_1final.push(gdjs.A2Code.GD2Objects2[j]);
    }
}
}
{
gdjs.A2Code.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.A2Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.A2Code.condition2IsTrue_1.val ) {
    gdjs.A2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A2Code.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.A2Code.GD4Objects1_1final.indexOf(gdjs.A2Code.GD4Objects2[j]) === -1 )
            gdjs.A2Code.GD4Objects1_1final.push(gdjs.A2Code.GD4Objects2[j]);
    }
}
}
{
gdjs.A2Code.GD1Objects1.createFrom(gdjs.A2Code.GD1Objects1_1final);
gdjs.A2Code.GD2Objects1.createFrom(gdjs.A2Code.GD2Objects1_1final);
gdjs.A2Code.GD4Objects1.createFrom(gdjs.A2Code.GD4Objects1_1final);
}
}
}if ( gdjs.A2Code.condition1IsTrue_0.val ) {
{
gdjs.A2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
}
if (gdjs.A2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition1IsTrue_0;
gdjs.A2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6787044);
}
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
gdjs.A2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD4Objects1[i].setPosition(64,512);
}
}{for(var i = 0, len = gdjs.A2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD2Objects1[i].setPosition(608,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD3Objects1[i].setPosition(608,512);
}
}{for(var i = 0, len = gdjs.A2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD1Objects1[i].setPosition(64,640);
}
}}

}


{


gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition1IsTrue_0;
gdjs.A2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6852716);
}
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
gdjs.A2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD1Objects1[i].setPosition(608,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD3Objects1[i].setPosition(64,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD2Objects1[i].setPosition(64,512);
}
}{for(var i = 0, len = gdjs.A2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD4Objects1[i].setPosition(608,512);
}
}}

}


{


gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition1IsTrue_0;
gdjs.A2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6853964);
}
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
gdjs.A2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD2Objects1[i].setPosition(608,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD4Objects1[i].setPosition(64,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD1Objects1[i].setPosition(64,512);
}
}{for(var i = 0, len = gdjs.A2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD3Objects1[i].setPosition(608,512);
}
}}

}


{


gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition1IsTrue_0;
gdjs.A2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6855100);
}
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
gdjs.A2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD3Objects1[i].setPosition(608,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD1Objects1[i].setPosition(64,640);
}
}{for(var i = 0, len = gdjs.A2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD4Objects1[i].setPosition(64,512);
}
}{for(var i = 0, len = gdjs.A2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A2Code.GD2Objects1[i].setPosition(608,512);
}
}}

}


{


gdjs.A2Code.condition0IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A2Code.condition0IsTrue_0.val) {
gdjs.A2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.A2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
gdjs.A2Code.condition2IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GD3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A2Code.condition1IsTrue_0.val ) {
{
gdjs.A2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
}
if (gdjs.A2Code.condition2IsTrue_0.val) {
gdjs.A2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.A2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDperaObjects1[i].setAnimation(3);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{

gdjs.A2Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
gdjs.A2Code.condition2IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A2Code.condition1IsTrue_0.val ) {
{
gdjs.A2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
}
if (gdjs.A2Code.condition2IsTrue_0.val) {
gdjs.A2Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A2Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.A2Code.GDvoltarAtivObjects1 */
gdjs.A2Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));
{for(var i = 0, len = gdjs.A2Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarAtivObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDperaObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.A2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDforwardButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A2Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDbackButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A2Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarAtivObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A2Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarTextoObjects1[i].setPosition(96,384);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setPosition(99999,99999);
}
}}

}


{

gdjs.A2Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
gdjs.A2Code.condition2IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDvoltarTextoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A2Code.condition1IsTrue_0.val ) {
{
gdjs.A2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
}
if (gdjs.A2Code.condition2IsTrue_0.val) {
gdjs.A2Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A2Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.A2Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
/* Reuse gdjs.A2Code.GDvoltarTextoObjects1 */
{for(var i = 0, len = gdjs.A2Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarTextoObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.A2Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarAtivObjects1[i].setPosition(352,608);
}
}{for(var i = 0, len = gdjs.A2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.A2Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDbackButtonObjects1[i].setPosition(32,608);
}
}{for(var i = 0, len = gdjs.A2Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDvoltarTextoObjects1[i].setPosition(-(10000),-(10000));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setPosition(0,0);
}
}}

}


{

gdjs.A2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A2Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
gdjs.A2Code.condition2IsTrue_0.val = false;
gdjs.A2Code.condition3IsTrue_0.val = false;
gdjs.A2Code.condition4IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A2Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A2Code.GDtextoObjects1[i].getAnimation() != 5 ) {
        gdjs.A2Code.condition2IsTrue_0.val = true;
        gdjs.A2Code.GDtextoObjects1[k] = gdjs.A2Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A2Code.GDtextoObjects1.length = k;}if ( gdjs.A2Code.condition2IsTrue_0.val ) {
{
gdjs.A2Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A2Code.condition3IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition4IsTrue_0;
gdjs.A2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6782796);
}
}}
}
}
}
if (gdjs.A2Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A2Code.GDforwardButtonObjects1 */
/* Reuse gdjs.A2Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setAnimation(gdjs.A2Code.GDtextoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.A2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A2Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.A2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A2Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A2Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.A2Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A2Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A2Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A2Code.condition0IsTrue_0.val = false;
gdjs.A2Code.condition1IsTrue_0.val = false;
gdjs.A2Code.condition2IsTrue_0.val = false;
gdjs.A2Code.condition3IsTrue_0.val = false;
gdjs.A2Code.condition4IsTrue_0.val = false;
{
gdjs.A2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A2Code.condition0IsTrue_0.val ) {
{
gdjs.A2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A2Code.mapOfGDgdjs_46A2Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A2Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A2Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.A2Code.condition2IsTrue_0.val = true;
        gdjs.A2Code.GDtextoObjects1[k] = gdjs.A2Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A2Code.GDtextoObjects1.length = k;}if ( gdjs.A2Code.condition2IsTrue_0.val ) {
{
gdjs.A2Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A2Code.condition3IsTrue_0.val ) {
{
{gdjs.A2Code.conditionTrue_1 = gdjs.A2Code.condition4IsTrue_0;
gdjs.A2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6892436);
}
}}
}
}
}
if (gdjs.A2Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A2Code.GDbackButtonObjects1 */
/* Reuse gdjs.A2Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A2Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A2Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A2Code.GDtextoObjects1[i].setAnimation(gdjs.A2Code.GDtextoObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


}; //End of gdjs.A2Code.eventsList0xb25a8


gdjs.A2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A2Code.GDforwardButtonObjects1.length = 0;
gdjs.A2Code.GDforwardButtonObjects2.length = 0;
gdjs.A2Code.GDbackButtonObjects1.length = 0;
gdjs.A2Code.GDbackButtonObjects2.length = 0;
gdjs.A2Code.GDperaObjects1.length = 0;
gdjs.A2Code.GDperaObjects2.length = 0;
gdjs.A2Code.GDperaSaysObjects1.length = 0;
gdjs.A2Code.GDperaSaysObjects2.length = 0;
gdjs.A2Code.GDtextoObjects1.length = 0;
gdjs.A2Code.GDtextoObjects2.length = 0;
gdjs.A2Code.GDvoltarTextoObjects1.length = 0;
gdjs.A2Code.GDvoltarTextoObjects2.length = 0;
gdjs.A2Code.GDvoltarAtivObjects1.length = 0;
gdjs.A2Code.GDvoltarAtivObjects2.length = 0;
gdjs.A2Code.GDtelaObjects1.length = 0;
gdjs.A2Code.GDtelaObjects2.length = 0;
gdjs.A2Code.GD1Objects1.length = 0;
gdjs.A2Code.GD1Objects2.length = 0;
gdjs.A2Code.GD2Objects1.length = 0;
gdjs.A2Code.GD2Objects2.length = 0;
gdjs.A2Code.GD3Objects1.length = 0;
gdjs.A2Code.GD3Objects2.length = 0;
gdjs.A2Code.GD4Objects1.length = 0;
gdjs.A2Code.GD4Objects2.length = 0;
gdjs.A2Code.GDareaObjects1.length = 0;
gdjs.A2Code.GDareaObjects2.length = 0;

gdjs.A2Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A2Code'] = gdjs.A2Code;
