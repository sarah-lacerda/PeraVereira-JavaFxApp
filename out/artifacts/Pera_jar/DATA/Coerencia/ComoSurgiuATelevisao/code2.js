gdjs.ex1Code = {};
gdjs.ex1Code.GDbuttonNextObjects1= [];
gdjs.ex1Code.GDbuttonNextObjects2= [];
gdjs.ex1Code.GDbuttonBackObjects1= [];
gdjs.ex1Code.GDbuttonBackObjects2= [];
gdjs.ex1Code.GDtextObjects1= [];
gdjs.ex1Code.GDtextObjects2= [];
gdjs.ex1Code.GDperaObjects1= [];
gdjs.ex1Code.GDperaObjects2= [];
gdjs.ex1Code.GDperaSaysObjects1= [];
gdjs.ex1Code.GDperaSaysObjects2= [];
gdjs.ex1Code.GDtelaObjects1= [];
gdjs.ex1Code.GDtelaObjects2= [];
gdjs.ex1Code.GD1Objects1= [];
gdjs.ex1Code.GD1Objects2= [];
gdjs.ex1Code.GD2Objects1= [];
gdjs.ex1Code.GD2Objects2= [];
gdjs.ex1Code.GD3Objects1= [];
gdjs.ex1Code.GD3Objects2= [];
gdjs.ex1Code.GD4Objects1= [];
gdjs.ex1Code.GD4Objects2= [];
gdjs.ex1Code.GDvoltarTextoObjects1= [];
gdjs.ex1Code.GDvoltarTextoObjects2= [];
gdjs.ex1Code.GDvoltarAtivObjects1= [];
gdjs.ex1Code.GDvoltarAtivObjects2= [];

gdjs.ex1Code.conditionTrue_0 = {val:false};
gdjs.ex1Code.condition0IsTrue_0 = {val:false};
gdjs.ex1Code.condition1IsTrue_0 = {val:false};
gdjs.ex1Code.condition2IsTrue_0 = {val:false};
gdjs.ex1Code.condition3IsTrue_0 = {val:false};
gdjs.ex1Code.condition4IsTrue_0 = {val:false};
gdjs.ex1Code.condition5IsTrue_0 = {val:false};
gdjs.ex1Code.conditionTrue_1 = {val:false};
gdjs.ex1Code.condition0IsTrue_1 = {val:false};
gdjs.ex1Code.condition1IsTrue_1 = {val:false};
gdjs.ex1Code.condition2IsTrue_1 = {val:false};
gdjs.ex1Code.condition3IsTrue_1 = {val:false};
gdjs.ex1Code.condition4IsTrue_1 = {val:false};
gdjs.ex1Code.condition5IsTrue_1 = {val:false};


gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.ex1Code.GD1Objects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.ex1Code.GD3Objects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.ex1Code.GD4Objects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.ex1Code.GD2Objects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDvoltarTextoObjects1Objects = Hashtable.newFrom({"voltarTexto": gdjs.ex1Code.GDvoltarTextoObjects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.ex1Code.GDvoltarAtivObjects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonNextObjects1Objects = Hashtable.newFrom({"buttonNext": gdjs.ex1Code.GDbuttonNextObjects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonNextObjects1Objects = Hashtable.newFrom({"buttonNext": gdjs.ex1Code.GDbuttonNextObjects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonBackObjects1Objects = Hashtable.newFrom({"buttonBack": gdjs.ex1Code.GDbuttonBackObjects1});gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonBackObjects1Objects = Hashtable.newFrom({"buttonBack": gdjs.ex1Code.GDbuttonBackObjects1});gdjs.ex1Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.random(23));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
gdjs.ex1Code.condition3IsTrue_0.val = false;
gdjs.ex1Code.condition4IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex1Code.condition2IsTrue_0.val ) {
{
gdjs.ex1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 1;
}if ( gdjs.ex1Code.condition3IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition4IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8477380);
}
}}
}
}
}
if (gdjs.ex1Code.condition4IsTrue_0.val) {
gdjs.ex1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ex1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaObjects1[i].setAnimation(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
gdjs.ex1Code.condition3IsTrue_0.val = false;
gdjs.ex1Code.condition4IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex1Code.condition2IsTrue_0.val ) {
{
gdjs.ex1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 1;
}if ( gdjs.ex1Code.condition3IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition4IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7263140);
}
}}
}
}
}
if (gdjs.ex1Code.condition4IsTrue_0.val) {
gdjs.ex1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ex1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaObjects1[i].setAnimation(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
gdjs.ex1Code.condition3IsTrue_0.val = false;
gdjs.ex1Code.condition4IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex1Code.condition2IsTrue_0.val ) {
{
gdjs.ex1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 1;
}if ( gdjs.ex1Code.condition3IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition4IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8478740);
}
}}
}
}
}
if (gdjs.ex1Code.condition4IsTrue_0.val) {
gdjs.ex1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ex1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaObjects1[i].setAnimation(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
gdjs.ex1Code.condition3IsTrue_0.val = false;
gdjs.ex1Code.condition4IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GD2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex1Code.condition2IsTrue_0.val ) {
{
gdjs.ex1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 1;
}if ( gdjs.ex1Code.condition3IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition4IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8453500);
}
}}
}
}
}
if (gdjs.ex1Code.condition4IsTrue_0.val) {
gdjs.ex1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaSaysObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}{for(var i = 0, len = gdjs.ex1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaObjects1[i].setAnimation(2);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "delayOfPera");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition2IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8471212);
}
}}
}
if (gdjs.ex1Code.condition2IsTrue_0.val) {
gdjs.ex1Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex1Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDperaSaysObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "delayOfPera");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition2IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7396876);
}
}}
}
if (gdjs.ex1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perguntaConsciencia", false);
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 4;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 5;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 6;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 7;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 10;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 11;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 12;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 13;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 14;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 15;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 16;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 17;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 18;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 19;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 20;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 21;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 22;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,576);
}
}}

}


{


gdjs.ex1Code.condition0IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 23;
}if (gdjs.ex1Code.condition0IsTrue_0.val) {
gdjs.ex1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD4Objects1[i].setPosition(192,192);
}
}{for(var i = 0, len = gdjs.ex1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD1Objects1[i].setPosition(192,448);
}
}{for(var i = 0, len = gdjs.ex1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD2Objects1[i].setPosition(192,320);
}
}{for(var i = 0, len = gdjs.ex1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex1Code.GD3Objects1[i].setPosition(192,576);
}
}}

}


{

gdjs.ex1Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDvoltarTextoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "switchDelay");
}}
}
if (gdjs.ex1Code.condition2IsTrue_0.val) {
gdjs.ex1Code.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));
gdjs.ex1Code.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));
gdjs.ex1Code.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));
gdjs.ex1Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
/* Reuse gdjs.ex1Code.GDvoltarTextoObjects1 */
{for(var i = 0, len = gdjs.ex1Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDtextObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.ex1Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDvoltarTextoObjects1[i].setPosition(-(999),-(999));
}
}{for(var i = 0, len = gdjs.ex1Code.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonBackObjects1[i].setPosition(32,608);
}
}{for(var i = 0, len = gdjs.ex1Code.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonNextObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.ex1Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDvoltarAtivObjects1[i].setPosition(377,666);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "switchDelay");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.ex1Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "switchDelay");
}}
}
if (gdjs.ex1Code.condition2IsTrue_0.val) {
gdjs.ex1Code.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));
gdjs.ex1Code.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));
gdjs.ex1Code.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));
/* Reuse gdjs.ex1Code.GDvoltarAtivObjects1 */
gdjs.ex1Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));
{for(var i = 0, len = gdjs.ex1Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDtextObjects1[i].setPosition(-(999),-(999));
}
}{for(var i = 0, len = gdjs.ex1Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDvoltarTextoObjects1[i].setPosition(377,666);
}
}{for(var i = 0, len = gdjs.ex1Code.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonBackObjects1[i].setPosition(-(999),-(999));
}
}{for(var i = 0, len = gdjs.ex1Code.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonNextObjects1[i].setPosition(-(999),-(999));
}
}{for(var i = 0, len = gdjs.ex1Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDvoltarAtivObjects1[i].setPosition(-(999),-(999));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "switchDelay");
}}

}


{

gdjs.ex1Code.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));
gdjs.ex1Code.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
gdjs.ex1Code.condition3IsTrue_0.val = false;
gdjs.ex1Code.condition4IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ex1Code.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.ex1Code.GDtextObjects1[i].getAnimation() != 4 ) {
        gdjs.ex1Code.condition2IsTrue_0.val = true;
        gdjs.ex1Code.GDtextObjects1[k] = gdjs.ex1Code.GDtextObjects1[i];
        ++k;
    }
}
gdjs.ex1Code.GDtextObjects1.length = k;}if ( gdjs.ex1Code.condition2IsTrue_0.val ) {
{
gdjs.ex1Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "delayTxt");
}if ( gdjs.ex1Code.condition3IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition4IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9013044);
}
}}
}
}
}
if (gdjs.ex1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.ex1Code.GDbuttonNextObjects1 */
/* Reuse gdjs.ex1Code.GDtextObjects1 */
{for(var i = 0, len = gdjs.ex1Code.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonNextObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex1Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDtextObjects1[i].setAnimation(gdjs.ex1Code.GDtextObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayTxt");
}}

}


{

gdjs.ex1Code.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonNextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex1Code.GDbuttonNextObjects1 */
{for(var i = 0, len = gdjs.ex1Code.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonNextObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.ex1Code.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));
gdjs.ex1Code.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
gdjs.ex1Code.condition2IsTrue_0.val = false;
gdjs.ex1Code.condition3IsTrue_0.val = false;
gdjs.ex1Code.condition4IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ex1Code.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.ex1Code.GDtextObjects1[i].getAnimation() != 0 ) {
        gdjs.ex1Code.condition1IsTrue_0.val = true;
        gdjs.ex1Code.GDtextObjects1[k] = gdjs.ex1Code.GDtextObjects1[i];
        ++k;
    }
}
gdjs.ex1Code.GDtextObjects1.length = k;}if ( gdjs.ex1Code.condition1IsTrue_0.val ) {
{
gdjs.ex1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "delayTxt");
}if ( gdjs.ex1Code.condition2IsTrue_0.val ) {
{
gdjs.ex1Code.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex1Code.condition3IsTrue_0.val ) {
{
{gdjs.ex1Code.conditionTrue_1 = gdjs.ex1Code.condition4IsTrue_0;
gdjs.ex1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6866132);
}
}}
}
}
}
if (gdjs.ex1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.ex1Code.GDbuttonBackObjects1 */
/* Reuse gdjs.ex1Code.GDtextObjects1 */
{for(var i = 0, len = gdjs.ex1Code.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonBackObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex1Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDtextObjects1[i].setAnimation(gdjs.ex1Code.GDtextObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayTxt");
}}

}


{

gdjs.ex1Code.GDbuttonBackObjects1.createFrom(runtimeScene.getObjects("buttonBack"));

gdjs.ex1Code.condition0IsTrue_0.val = false;
gdjs.ex1Code.condition1IsTrue_0.val = false;
{
gdjs.ex1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ex1Code.condition0IsTrue_0.val ) {
{
gdjs.ex1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex1Code.mapOfGDgdjs_46ex1Code_46GDbuttonBackObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex1Code.GDbuttonBackObjects1 */
{for(var i = 0, len = gdjs.ex1Code.GDbuttonBackObjects1.length ;i < len;++i) {
    gdjs.ex1Code.GDbuttonBackObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.ex1Code.eventsList0xb25a8


gdjs.ex1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex1Code.GDbuttonNextObjects1.length = 0;
gdjs.ex1Code.GDbuttonNextObjects2.length = 0;
gdjs.ex1Code.GDbuttonBackObjects1.length = 0;
gdjs.ex1Code.GDbuttonBackObjects2.length = 0;
gdjs.ex1Code.GDtextObjects1.length = 0;
gdjs.ex1Code.GDtextObjects2.length = 0;
gdjs.ex1Code.GDperaObjects1.length = 0;
gdjs.ex1Code.GDperaObjects2.length = 0;
gdjs.ex1Code.GDperaSaysObjects1.length = 0;
gdjs.ex1Code.GDperaSaysObjects2.length = 0;
gdjs.ex1Code.GDtelaObjects1.length = 0;
gdjs.ex1Code.GDtelaObjects2.length = 0;
gdjs.ex1Code.GD1Objects1.length = 0;
gdjs.ex1Code.GD1Objects2.length = 0;
gdjs.ex1Code.GD2Objects1.length = 0;
gdjs.ex1Code.GD2Objects2.length = 0;
gdjs.ex1Code.GD3Objects1.length = 0;
gdjs.ex1Code.GD3Objects2.length = 0;
gdjs.ex1Code.GD4Objects1.length = 0;
gdjs.ex1Code.GD4Objects2.length = 0;
gdjs.ex1Code.GDvoltarTextoObjects1.length = 0;
gdjs.ex1Code.GDvoltarTextoObjects2.length = 0;
gdjs.ex1Code.GDvoltarAtivObjects1.length = 0;
gdjs.ex1Code.GDvoltarAtivObjects2.length = 0;

gdjs.ex1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex1Code'] = gdjs.ex1Code;
