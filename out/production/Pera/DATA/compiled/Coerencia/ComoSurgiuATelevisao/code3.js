gdjs.ex2Code = {};
gdjs.ex2Code.GDbuttonNextObjects1= [];
gdjs.ex2Code.GDbuttonNextObjects2= [];
gdjs.ex2Code.GDbuttonBackObjects1= [];
gdjs.ex2Code.GDbuttonBackObjects2= [];
gdjs.ex2Code.GDtextObjects1= [];
gdjs.ex2Code.GDtextObjects2= [];
gdjs.ex2Code.GDperaObjects1= [];
gdjs.ex2Code.GDperaObjects2= [];
gdjs.ex2Code.GDperaSaysObjects1= [];
gdjs.ex2Code.GDperaSaysObjects2= [];
gdjs.ex2Code.GDtelaObjects1= [];
gdjs.ex2Code.GDtelaObjects2= [];
gdjs.ex2Code.GDV1Objects1= [];
gdjs.ex2Code.GDV1Objects2= [];
gdjs.ex2Code.GDV2Objects1= [];
gdjs.ex2Code.GDV2Objects2= [];
gdjs.ex2Code.GDVObjects1= [];
gdjs.ex2Code.GDVObjects2= [];
gdjs.ex2Code.GD4eObjects1= [];
gdjs.ex2Code.GD4eObjects2= [];
gdjs.ex2Code.GD3eObjects1= [];
gdjs.ex2Code.GD3eObjects2= [];
gdjs.ex2Code.GD2eObjects1= [];
gdjs.ex2Code.GD2eObjects2= [];
gdjs.ex2Code.GD1eObjects1= [];
gdjs.ex2Code.GD1eObjects2= [];
gdjs.ex2Code.GD1Objects1= [];
gdjs.ex2Code.GD1Objects2= [];
gdjs.ex2Code.GD2Objects1= [];
gdjs.ex2Code.GD2Objects2= [];
gdjs.ex2Code.GD3Objects1= [];
gdjs.ex2Code.GD3Objects2= [];
gdjs.ex2Code.GD4Objects1= [];
gdjs.ex2Code.GD4Objects2= [];

gdjs.ex2Code.conditionTrue_0 = {val:false};
gdjs.ex2Code.condition0IsTrue_0 = {val:false};
gdjs.ex2Code.condition1IsTrue_0 = {val:false};
gdjs.ex2Code.condition2IsTrue_0 = {val:false};
gdjs.ex2Code.conditionTrue_1 = {val:false};
gdjs.ex2Code.condition0IsTrue_1 = {val:false};
gdjs.ex2Code.condition1IsTrue_1 = {val:false};
gdjs.ex2Code.condition2IsTrue_1 = {val:false};


gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects = Hashtable.newFrom({"V": gdjs.ex2Code.GDVObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects = Hashtable.newFrom({"V": gdjs.ex2Code.GDVObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD1eObjects1Objects = Hashtable.newFrom({"1e": gdjs.ex2Code.GD1eObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects = Hashtable.newFrom({"V": gdjs.ex2Code.GDVObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD2eObjects1Objects = Hashtable.newFrom({"2e": gdjs.ex2Code.GD2eObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects = Hashtable.newFrom({"V": gdjs.ex2Code.GDVObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD3eObjects1Objects = Hashtable.newFrom({"3e": gdjs.ex2Code.GD3eObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects = Hashtable.newFrom({"V": gdjs.ex2Code.GDVObjects1});gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD4eObjects1Objects = Hashtable.newFrom({"4e": gdjs.ex2Code.GD4eObjects1});gdjs.ex2Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));

gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("moveBack").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayToReturn");
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("moveBack")) == 1;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "delayToReturn");
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));
{for(var i = 0, len = gdjs.ex2Code.GDVObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDVObjects1[i].setPosition(384,128);
}
}{runtimeScene.getVariables().get("moveBack").setNumber(0);
}}

}


{

gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));

gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects, gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD1eObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));

gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects, gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD2eObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));

gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects, gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD3eObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex2Code.GD3eObjects1 */
gdjs.ex2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blinkPera");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));

gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GDVObjects1Objects, gdjs.ex2Code.mapOfGDgdjs_46ex2Code_46GD4eObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex2Code.GD4eObjects1 */
gdjs.ex2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setAnimation(2);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blinkPera");
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "blinkPera");
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
{gdjs.ex2Code.conditionTrue_1 = gdjs.ex2Code.condition1IsTrue_0;
gdjs.ex2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7892508);
}
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GDVObjects1.createFrom(runtimeScene.getObjects("V"));
gdjs.ex2Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex2Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex2Code.GDVObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDVObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex2Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaSaysObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex2Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDperaObjects1[i].setPosition(384,288);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayToNextScene");
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "delayToNextScene");
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perguntaConsciencia", false);
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection if right")) == 0;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,512);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection if right")) == 0;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,512);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,512);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 4;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 4;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,256);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 4;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 5;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 5;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 5;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 6;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 6;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 6;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 7;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 7;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,256);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 7;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,512);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,512);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,512);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 10;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,640);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 10;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,256);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 10;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 11;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
gdjs.ex2Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex2Code.GD1eObjects1.createFrom(runtimeScene.getObjects("1e"));
gdjs.ex2Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex2Code.GD2eObjects1.createFrom(runtimeScene.getObjects("2e"));
gdjs.ex2Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex2Code.GD3eObjects1.createFrom(runtimeScene.getObjects("3e"));
gdjs.ex2Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.ex2Code.GD4eObjects1.createFrom(runtimeScene.getObjects("4e"));
{for(var i = 0, len = gdjs.ex2Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4Objects1[i].setPosition(160,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD4eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD4eObjects1[i].setPosition(32,256);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1Objects1[i].setPosition(160,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD1eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD1eObjects1[i].setPosition(32,384);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3Objects1[i].setPosition(160,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD3eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD3eObjects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2Objects1[i].setPosition(160,640);
}
}{for(var i = 0, len = gdjs.ex2Code.GD2eObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GD2eObjects1[i].setPosition(32,640);
}
}}

}


{



}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 11;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV2Objects1.createFrom(runtimeScene.getObjects("V2"));
{for(var i = 0, len = gdjs.ex2Code.GDV2Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV2Objects1[i].setPosition(32,256);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
gdjs.ex2Code.condition1IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 11;
}if ( gdjs.ex2Code.condition0IsTrue_0.val ) {
{
gdjs.ex2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.ex2Code.condition1IsTrue_0.val) {
gdjs.ex2Code.GDV1Objects1.createFrom(runtimeScene.getObjects("V1"));
{for(var i = 0, len = gdjs.ex2Code.GDV1Objects1.length ;i < len;++i) {
    gdjs.ex2Code.GDV1Objects1[i].setPosition(32,384);
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(11));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


}; //End of gdjs.ex2Code.eventsList0xb25a8


gdjs.ex2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex2Code.GDbuttonNextObjects1.length = 0;
gdjs.ex2Code.GDbuttonNextObjects2.length = 0;
gdjs.ex2Code.GDbuttonBackObjects1.length = 0;
gdjs.ex2Code.GDbuttonBackObjects2.length = 0;
gdjs.ex2Code.GDtextObjects1.length = 0;
gdjs.ex2Code.GDtextObjects2.length = 0;
gdjs.ex2Code.GDperaObjects1.length = 0;
gdjs.ex2Code.GDperaObjects2.length = 0;
gdjs.ex2Code.GDperaSaysObjects1.length = 0;
gdjs.ex2Code.GDperaSaysObjects2.length = 0;
gdjs.ex2Code.GDtelaObjects1.length = 0;
gdjs.ex2Code.GDtelaObjects2.length = 0;
gdjs.ex2Code.GDV1Objects1.length = 0;
gdjs.ex2Code.GDV1Objects2.length = 0;
gdjs.ex2Code.GDV2Objects1.length = 0;
gdjs.ex2Code.GDV2Objects2.length = 0;
gdjs.ex2Code.GDVObjects1.length = 0;
gdjs.ex2Code.GDVObjects2.length = 0;
gdjs.ex2Code.GD4eObjects1.length = 0;
gdjs.ex2Code.GD4eObjects2.length = 0;
gdjs.ex2Code.GD3eObjects1.length = 0;
gdjs.ex2Code.GD3eObjects2.length = 0;
gdjs.ex2Code.GD2eObjects1.length = 0;
gdjs.ex2Code.GD2eObjects2.length = 0;
gdjs.ex2Code.GD1eObjects1.length = 0;
gdjs.ex2Code.GD1eObjects2.length = 0;
gdjs.ex2Code.GD1Objects1.length = 0;
gdjs.ex2Code.GD1Objects2.length = 0;
gdjs.ex2Code.GD2Objects1.length = 0;
gdjs.ex2Code.GD2Objects2.length = 0;
gdjs.ex2Code.GD3Objects1.length = 0;
gdjs.ex2Code.GD3Objects2.length = 0;
gdjs.ex2Code.GD4Objects1.length = 0;
gdjs.ex2Code.GD4Objects2.length = 0;

gdjs.ex2Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex2Code'] = gdjs.ex2Code;
