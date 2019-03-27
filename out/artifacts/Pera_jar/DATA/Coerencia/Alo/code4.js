gdjs.ex3Code = {};
gdjs.ex3Code.GDperaObjects1= [];
gdjs.ex3Code.GDperaObjects2= [];
gdjs.ex3Code.GDbackButtonObjects1= [];
gdjs.ex3Code.GDbackButtonObjects2= [];
gdjs.ex3Code.GDforwardButtonObjects1= [];
gdjs.ex3Code.GDforwardButtonObjects2= [];
gdjs.ex3Code.GDtextoObjects1= [];
gdjs.ex3Code.GDtextoObjects2= [];
gdjs.ex3Code.GDvoltarAtivObjects1= [];
gdjs.ex3Code.GDvoltarAtivObjects2= [];
gdjs.ex3Code.GDvoltarAoTxtObjects1= [];
gdjs.ex3Code.GDvoltarAoTxtObjects2= [];
gdjs.ex3Code.GDperaSaysObjects1= [];
gdjs.ex3Code.GDperaSaysObjects2= [];
gdjs.ex3Code.GDtelaObjects1= [];
gdjs.ex3Code.GDtelaObjects2= [];
gdjs.ex3Code.GDbtn1Objects1= [];
gdjs.ex3Code.GDbtn1Objects2= [];
gdjs.ex3Code.GDbtn2Objects1= [];
gdjs.ex3Code.GDbtn2Objects2= [];
gdjs.ex3Code.GDbtn3Objects1= [];
gdjs.ex3Code.GDbtn3Objects2= [];
gdjs.ex3Code.GDbtn4Objects1= [];
gdjs.ex3Code.GDbtn4Objects2= [];

gdjs.ex3Code.conditionTrue_0 = {val:false};
gdjs.ex3Code.condition0IsTrue_0 = {val:false};
gdjs.ex3Code.condition1IsTrue_0 = {val:false};
gdjs.ex3Code.condition2IsTrue_0 = {val:false};
gdjs.ex3Code.condition3IsTrue_0 = {val:false};
gdjs.ex3Code.condition4IsTrue_0 = {val:false};
gdjs.ex3Code.conditionTrue_1 = {val:false};
gdjs.ex3Code.condition0IsTrue_1 = {val:false};
gdjs.ex3Code.condition1IsTrue_1 = {val:false};
gdjs.ex3Code.condition2IsTrue_1 = {val:false};
gdjs.ex3Code.condition3IsTrue_1 = {val:false};
gdjs.ex3Code.condition4IsTrue_1 = {val:false};


gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn1Objects1Objects = Hashtable.newFrom({"btn1": gdjs.ex3Code.GDbtn1Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn3Objects1Objects = Hashtable.newFrom({"btn3": gdjs.ex3Code.GDbtn3Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn4Objects1Objects = Hashtable.newFrom({"btn4": gdjs.ex3Code.GDbtn4Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn2Objects1Objects = Hashtable.newFrom({"btn2": gdjs.ex3Code.GDbtn2Objects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.ex3Code.GDvoltarAtivObjects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDvoltarAoTxtObjects1Objects = Hashtable.newFrom({"voltarAoTxt": gdjs.ex3Code.GDvoltarAoTxtObjects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.ex3Code.GDforwardButtonObjects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.ex3Code.GDforwardButtonObjects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.ex3Code.GDbackButtonObjects1});gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.ex3Code.GDbackButtonObjects1});gdjs.ex3Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setScale(1.2);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(23));
}}

}


{

gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
gdjs.ex3Code.condition3IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex3Code.condition2IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition3IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9262564);
}
}}
}
}
if (gdjs.ex3Code.condition3IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex3Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(0,231);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setAnimation(4);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}}

}


{

gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
gdjs.ex3Code.condition3IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex3Code.condition2IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition3IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9489676);
}
}}
}
}
if (gdjs.ex3Code.condition3IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex3Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(0,231);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setAnimation(4);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}}

}


{

gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
gdjs.ex3Code.condition3IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex3Code.condition2IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition3IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7392492);
}
}}
}
}
if (gdjs.ex3Code.condition3IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex3Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(0,231);
}
}{gdjs.deviceVibration.startVibration(100);
}{for(var i = 0, len = gdjs.ex3Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaSaysObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
gdjs.ex3Code.condition3IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbtn2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cantChooseDelay");
}if ( gdjs.ex3Code.condition2IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition3IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8568772);
}
}}
}
}
if (gdjs.ex3Code.condition3IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex3Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(0,231);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayOfPera");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.ex3Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "delayOfPera");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition2IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9516804);
}
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex3Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(-(557),231);
}
}{for(var i = 0, len = gdjs.ex3Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaSaysObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "delayOfPera");
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex4", false);
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{}{}{for(var i = 0, len = gdjs.ex3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDperaObjects1[i].setPosition(-(557),231);
}
}}

}


{

gdjs.ex3Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isText")) == 1;
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.ex3Code.GDvoltarAoTxtObjects1.createFrom(runtimeScene.getObjects("voltarAoTxt"));
/* Reuse gdjs.ex3Code.GDvoltarAtivObjects1 */
{for(var i = 0, len = gdjs.ex3Code.GDvoltarAoTxtObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDvoltarAoTxtObjects1[i].setPosition(-(9),619);
}
}{for(var i = 0, len = gdjs.ex3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDtextoObjects1[i].setPosition(-(1000),-(1000));
}
}{for(var i = 0, len = gdjs.ex3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbackButtonObjects1[i].setPosition(-(1000),608);
}
}{for(var i = 0, len = gdjs.ex3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDforwardButtonObjects1[i].setPosition(-(1000),608);
}
}{for(var i = 0, len = gdjs.ex3Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDvoltarAtivObjects1[i].setPosition(395,785);
}
}{runtimeScene.getVariables().get("isText").setNumber(0);
}}

}


{

gdjs.ex3Code.GDvoltarAoTxtObjects1.createFrom(runtimeScene.getObjects("voltarAoTxt"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDvoltarAoTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
gdjs.ex3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isText")) == 0;
}}
}
if (gdjs.ex3Code.condition2IsTrue_0.val) {
gdjs.ex3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.ex3Code.GDvoltarAoTxtObjects1 */
gdjs.ex3Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
{for(var i = 0, len = gdjs.ex3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbackButtonObjects1[i].setPosition(33,608);
}
}{for(var i = 0, len = gdjs.ex3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.ex3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDtextoObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.ex3Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDvoltarAtivObjects1[i].setPosition(384,640);
}
}{for(var i = 0, len = gdjs.ex3Code.GDvoltarAoTxtObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDvoltarAoTxtObjects1[i].setPosition(-(1000),672);
}
}{runtimeScene.getVariables().get("isText").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cantChooseDelay");
}}

}


{

gdjs.ex3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
gdjs.ex3Code.condition3IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ex3Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.ex3Code.GDtextoObjects1[i].getAnimation() != 4 ) {
        gdjs.ex3Code.condition2IsTrue_0.val = true;
        gdjs.ex3Code.GDtextoObjects1[k] = gdjs.ex3Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.ex3Code.GDtextoObjects1.length = k;}if ( gdjs.ex3Code.condition2IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition3IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7763364);
}
}}
}
}
if (gdjs.ex3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.ex3Code.GDforwardButtonObjects1 */
/* Reuse gdjs.ex3Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.ex3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDtextoObjects1[i].setAnimation(gdjs.ex3Code.GDtextoObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.ex3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.ex3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex3Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.ex3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.ex3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
gdjs.ex3Code.condition2IsTrue_0.val = false;
gdjs.ex3Code.condition3IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ex3Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.ex3Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.ex3Code.condition2IsTrue_0.val = true;
        gdjs.ex3Code.GDtextoObjects1[k] = gdjs.ex3Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.ex3Code.GDtextoObjects1.length = k;}if ( gdjs.ex3Code.condition2IsTrue_0.val ) {
{
{gdjs.ex3Code.conditionTrue_1 = gdjs.ex3Code.condition3IsTrue_0;
gdjs.ex3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6682396);
}
}}
}
}
if (gdjs.ex3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.ex3Code.GDbackButtonObjects1 */
/* Reuse gdjs.ex3Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.ex3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDtextoObjects1[i].setAnimation(gdjs.ex3Code.GDtextoObjects1[i].getAnimation() - (1));
}
}}

}


{

gdjs.ex3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.ex3Code.condition0IsTrue_0.val = false;
gdjs.ex3Code.condition1IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ex3Code.condition0IsTrue_0.val ) {
{
gdjs.ex3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex3Code.mapOfGDgdjs_46ex3Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex3Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.ex3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 4;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 5;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 6;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 7;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 10;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 11;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 12;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 13;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 14;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 15;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 16;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 17;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 18;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 19;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 20;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 21;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 22;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,600);
}
}}

}


{


gdjs.ex3Code.condition0IsTrue_0.val = false;
{
gdjs.ex3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 23;
}if (gdjs.ex3Code.condition0IsTrue_0.val) {
gdjs.ex3Code.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.ex3Code.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.ex3Code.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.ex3Code.GDbtn4Objects1.createFrom(runtimeScene.getObjects("btn4"));
{for(var i = 0, len = gdjs.ex3Code.GDbtn4Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn4Objects1[i].setPosition(178,134);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn1Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn1Objects1[i].setPosition(178,289);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn2Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn2Objects1[i].setPosition(178,444);
}
}{for(var i = 0, len = gdjs.ex3Code.GDbtn3Objects1.length ;i < len;++i) {
    gdjs.ex3Code.GDbtn3Objects1[i].setPosition(178,600);
}
}}

}


}; //End of gdjs.ex3Code.eventsList0xb25a8


gdjs.ex3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex3Code.GDperaObjects1.length = 0;
gdjs.ex3Code.GDperaObjects2.length = 0;
gdjs.ex3Code.GDbackButtonObjects1.length = 0;
gdjs.ex3Code.GDbackButtonObjects2.length = 0;
gdjs.ex3Code.GDforwardButtonObjects1.length = 0;
gdjs.ex3Code.GDforwardButtonObjects2.length = 0;
gdjs.ex3Code.GDtextoObjects1.length = 0;
gdjs.ex3Code.GDtextoObjects2.length = 0;
gdjs.ex3Code.GDvoltarAtivObjects1.length = 0;
gdjs.ex3Code.GDvoltarAtivObjects2.length = 0;
gdjs.ex3Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.ex3Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.ex3Code.GDperaSaysObjects1.length = 0;
gdjs.ex3Code.GDperaSaysObjects2.length = 0;
gdjs.ex3Code.GDtelaObjects1.length = 0;
gdjs.ex3Code.GDtelaObjects2.length = 0;
gdjs.ex3Code.GDbtn1Objects1.length = 0;
gdjs.ex3Code.GDbtn1Objects2.length = 0;
gdjs.ex3Code.GDbtn2Objects1.length = 0;
gdjs.ex3Code.GDbtn2Objects2.length = 0;
gdjs.ex3Code.GDbtn3Objects1.length = 0;
gdjs.ex3Code.GDbtn3Objects2.length = 0;
gdjs.ex3Code.GDbtn4Objects1.length = 0;
gdjs.ex3Code.GDbtn4Objects2.length = 0;

gdjs.ex3Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex3Code'] = gdjs.ex3Code;
