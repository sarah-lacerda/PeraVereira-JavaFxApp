gdjs.A4Code = {};
gdjs.A4Code.GD1Objects1_1final = [];

gdjs.A4Code.GD2Objects1_1final = [];

gdjs.A4Code.GD3Objects1_1final = [];

gdjs.A4Code.GDforwardButtonObjects1= [];
gdjs.A4Code.GDforwardButtonObjects2= [];
gdjs.A4Code.GDbackButtonObjects1= [];
gdjs.A4Code.GDbackButtonObjects2= [];
gdjs.A4Code.GDperaObjects1= [];
gdjs.A4Code.GDperaObjects2= [];
gdjs.A4Code.GDperaSaysObjects1= [];
gdjs.A4Code.GDperaSaysObjects2= [];
gdjs.A4Code.GDtextoObjects1= [];
gdjs.A4Code.GDtextoObjects2= [];
gdjs.A4Code.GDvoltarAtivObjects1= [];
gdjs.A4Code.GDvoltarAtivObjects2= [];
gdjs.A4Code.GDvoltarAoTextoObjects1= [];
gdjs.A4Code.GDvoltarAoTextoObjects2= [];
gdjs.A4Code.GDtelaObjects1= [];
gdjs.A4Code.GDtelaObjects2= [];
gdjs.A4Code.GD1Objects1= [];
gdjs.A4Code.GD1Objects2= [];
gdjs.A4Code.GD2Objects1= [];
gdjs.A4Code.GD2Objects2= [];
gdjs.A4Code.GD3Objects1= [];
gdjs.A4Code.GD3Objects2= [];
gdjs.A4Code.GD4Objects1= [];
gdjs.A4Code.GD4Objects2= [];
gdjs.A4Code.GDareaObjects1= [];
gdjs.A4Code.GDareaObjects2= [];

gdjs.A4Code.conditionTrue_0 = {val:false};
gdjs.A4Code.condition0IsTrue_0 = {val:false};
gdjs.A4Code.condition1IsTrue_0 = {val:false};
gdjs.A4Code.condition2IsTrue_0 = {val:false};
gdjs.A4Code.condition3IsTrue_0 = {val:false};
gdjs.A4Code.condition4IsTrue_0 = {val:false};
gdjs.A4Code.condition5IsTrue_0 = {val:false};
gdjs.A4Code.conditionTrue_1 = {val:false};
gdjs.A4Code.condition0IsTrue_1 = {val:false};
gdjs.A4Code.condition1IsTrue_1 = {val:false};
gdjs.A4Code.condition2IsTrue_1 = {val:false};
gdjs.A4Code.condition3IsTrue_1 = {val:false};
gdjs.A4Code.condition4IsTrue_1 = {val:false};
gdjs.A4Code.condition5IsTrue_1 = {val:false};


gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects2});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.A4Code.GD2Objects2});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.A4Code.GD3Objects2});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A4Code.GD4Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDvoltarAoTextoObjects1Objects = Hashtable.newFrom({"voltarAoTexto": gdjs.A4Code.GDvoltarAoTextoObjects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A4Code.GDforwardButtonObjects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A4Code.GDforwardButtonObjects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A4Code.GDbackButtonObjects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.A4Code.GDvoltarAtivObjects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A4Code.GDbackButtonObjects1});gdjs.A4Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(6));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.A4Code.GD1Objects1.length = 0;

gdjs.A4Code.GD2Objects1.length = 0;

gdjs.A4Code.GD3Objects1.length = 0;


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.GD1Objects1_1final.length = 0;gdjs.A4Code.GD2Objects1_1final.length = 0;gdjs.A4Code.GD3Objects1_1final.length = 0;gdjs.A4Code.condition0IsTrue_1.val = false;
gdjs.A4Code.condition1IsTrue_1.val = false;
gdjs.A4Code.condition2IsTrue_1.val = false;
{
gdjs.A4Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A4Code.condition0IsTrue_1.val ) {
    gdjs.A4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A4Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A4Code.GD1Objects1_1final.indexOf(gdjs.A4Code.GD1Objects2[j]) === -1 )
            gdjs.A4Code.GD1Objects1_1final.push(gdjs.A4Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A4Code.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.A4Code.condition1IsTrue_1.val ) {
    gdjs.A4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A4Code.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.A4Code.GD2Objects1_1final.indexOf(gdjs.A4Code.GD2Objects2[j]) === -1 )
            gdjs.A4Code.GD2Objects1_1final.push(gdjs.A4Code.GD2Objects2[j]);
    }
}
}
{
gdjs.A4Code.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.A4Code.condition2IsTrue_1.val ) {
    gdjs.A4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A4Code.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.A4Code.GD3Objects1_1final.indexOf(gdjs.A4Code.GD3Objects2[j]) === -1 )
            gdjs.A4Code.GD3Objects1_1final.push(gdjs.A4Code.GD3Objects2[j]);
    }
}
}
{
gdjs.A4Code.GD1Objects1.createFrom(gdjs.A4Code.GD1Objects1_1final);
gdjs.A4Code.GD2Objects1.createFrom(gdjs.A4Code.GD2Objects1_1final);
gdjs.A4Code.GD3Objects1.createFrom(gdjs.A4Code.GD3Objects1_1final);
}
}
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
gdjs.A4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
}
if (gdjs.A4Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A4", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9601660);
}
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7463260);
}
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8631028);
}
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8534196);
}
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 4;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8613028);
}
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 5;
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition1IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8440492);
}
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A4Code.condition0IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A4Code.condition0IsTrue_0.val) {
gdjs.A4Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A4Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
gdjs.A4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
}
if (gdjs.A4Code.condition2IsTrue_0.val) {
gdjs.A4Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.A4Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDperaObjects1[i].setAnimation(3);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{

gdjs.A4Code.GDvoltarAoTextoObjects1.createFrom(runtimeScene.getObjects("voltarAoTexto"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDvoltarAoTextoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A4Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A4Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.A4Code.GDvoltarAoTextoObjects1 */
gdjs.A4Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
{for(var i = 0, len = gdjs.A4Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDtextoObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.A4Code.GDvoltarAoTextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDvoltarAoTextoObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A4Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.A4Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDvoltarAtivObjects1[i].setPosition(352,608);
}
}{for(var i = 0, len = gdjs.A4Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDbackButtonObjects1[i].setPosition(32,608);
}
}{for(var i = 0, len = gdjs.A4Code.GDvoltarAoTextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDvoltarAoTextoObjects1[i].setPosition(-(10000),-(10000));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.A4Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A4Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
gdjs.A4Code.condition3IsTrue_0.val = false;
gdjs.A4Code.condition4IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A4Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A4Code.GDtextoObjects1[i].getAnimation() != 3 ) {
        gdjs.A4Code.condition2IsTrue_0.val = true;
        gdjs.A4Code.GDtextoObjects1[k] = gdjs.A4Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A4Code.GDtextoObjects1.length = k;}if ( gdjs.A4Code.condition2IsTrue_0.val ) {
{
gdjs.A4Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A4Code.condition3IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition4IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7453996);
}
}}
}
}
}
if (gdjs.A4Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A4Code.GDforwardButtonObjects1 */
/* Reuse gdjs.A4Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A4Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A4Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDtextoObjects1[i].setAnimation(gdjs.A4Code.GDtextoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.A4Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A4Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.A4Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A4Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A4Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
gdjs.A4Code.condition3IsTrue_0.val = false;
gdjs.A4Code.condition4IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A4Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A4Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.A4Code.condition2IsTrue_0.val = true;
        gdjs.A4Code.GDtextoObjects1[k] = gdjs.A4Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A4Code.GDtextoObjects1.length = k;}if ( gdjs.A4Code.condition2IsTrue_0.val ) {
{
gdjs.A4Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A4Code.condition3IsTrue_0.val ) {
{
{gdjs.A4Code.conditionTrue_1 = gdjs.A4Code.condition4IsTrue_0;
gdjs.A4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9846852);
}
}}
}
}
}
if (gdjs.A4Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A4Code.GDbackButtonObjects1 */
/* Reuse gdjs.A4Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A4Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A4Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDtextoObjects1[i].setAnimation(gdjs.A4Code.GDtextoObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.A4Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
gdjs.A4Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A4Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A4Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A4Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.A4Code.GDvoltarAoTextoObjects1.createFrom(runtimeScene.getObjects("voltarAoTexto"));
/* Reuse gdjs.A4Code.GDvoltarAtivObjects1 */
{for(var i = 0, len = gdjs.A4Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDvoltarAtivObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A4Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDperaObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.A4Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDbackButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A4Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDforwardButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A4Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDvoltarAtivObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A4Code.GDvoltarAoTextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDvoltarAoTextoObjects1[i].setPosition(704,680);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.A4Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDtextoObjects1[i].setPosition(9999999,99999);
}
}}

}


{

gdjs.A4Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A4Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.A4Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


}; //End of gdjs.A4Code.eventsList0xb25a8


gdjs.A4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A4Code.GDforwardButtonObjects1.length = 0;
gdjs.A4Code.GDforwardButtonObjects2.length = 0;
gdjs.A4Code.GDbackButtonObjects1.length = 0;
gdjs.A4Code.GDbackButtonObjects2.length = 0;
gdjs.A4Code.GDperaObjects1.length = 0;
gdjs.A4Code.GDperaObjects2.length = 0;
gdjs.A4Code.GDperaSaysObjects1.length = 0;
gdjs.A4Code.GDperaSaysObjects2.length = 0;
gdjs.A4Code.GDtextoObjects1.length = 0;
gdjs.A4Code.GDtextoObjects2.length = 0;
gdjs.A4Code.GDvoltarAtivObjects1.length = 0;
gdjs.A4Code.GDvoltarAtivObjects2.length = 0;
gdjs.A4Code.GDvoltarAoTextoObjects1.length = 0;
gdjs.A4Code.GDvoltarAoTextoObjects2.length = 0;
gdjs.A4Code.GDtelaObjects1.length = 0;
gdjs.A4Code.GDtelaObjects2.length = 0;
gdjs.A4Code.GD1Objects1.length = 0;
gdjs.A4Code.GD1Objects2.length = 0;
gdjs.A4Code.GD2Objects1.length = 0;
gdjs.A4Code.GD2Objects2.length = 0;
gdjs.A4Code.GD3Objects1.length = 0;
gdjs.A4Code.GD3Objects2.length = 0;
gdjs.A4Code.GD4Objects1.length = 0;
gdjs.A4Code.GD4Objects2.length = 0;
gdjs.A4Code.GDareaObjects1.length = 0;
gdjs.A4Code.GDareaObjects2.length = 0;

gdjs.A4Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A4Code'] = gdjs.A4Code;
