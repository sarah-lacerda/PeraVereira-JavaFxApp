gdjs.A5Code = {};
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
gdjs.A5Code.GDcomoObjects1= [];
gdjs.A5Code.GDcomoObjects2= [];
gdjs.A5Code.GDafinalObjects1= [];
gdjs.A5Code.GDafinalObjects2= [];

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


gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDcomoObjects1Objects = Hashtable.newFrom({"como": gdjs.A5Code.GDcomoObjects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A5Code.GD1Objects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDafinalObjects1Objects = Hashtable.newFrom({"afinal": gdjs.A5Code.GDafinalObjects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A5Code.GD3Objects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDcomoObjects1Objects = Hashtable.newFrom({"como": gdjs.A5Code.GDcomoObjects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A5Code.GD1Objects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDafinalObjects1Objects = Hashtable.newFrom({"afinal": gdjs.A5Code.GDafinalObjects1});gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A5Code.GD3Objects1});gdjs.A5Code.eventsList0xb25a8 = function(runtimeScene) {

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

gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GDcomoObjects1.createFrom(runtimeScene.getObjects("como"));

gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
gdjs.A5Code.condition2IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDcomoObjects1Objects, gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
gdjs.A5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A5Code.condition1IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition2IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6815340);
}
}}
}
if (gdjs.A5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.A5Code.GD1Objects1 */
gdjs.A5Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.A5Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A5Code.GDperaObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.A5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(3).sub(1);
}}

}


{

gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GDafinalObjects1.createFrom(runtimeScene.getObjects("afinal"));

gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
gdjs.A5Code.condition2IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDafinalObjects1Objects, gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD3Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
gdjs.A5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A5Code.condition1IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition2IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8875108);
}
}}
}
if (gdjs.A5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.A5Code.GD3Objects1 */
gdjs.A5Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.A5Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A5Code.GDperaObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.A5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(3).sub(1);
}}

}


{

gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GDcomoObjects1.createFrom(runtimeScene.getObjects("como"));

gdjs.A5Code.condition0IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDcomoObjects1Objects, gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD1Objects1Objects, false, runtimeScene, false);
}if (gdjs.A5Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GDafinalObjects1.createFrom(runtimeScene.getObjects("afinal"));

gdjs.A5Code.condition0IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A5Code.mapOfGDgdjs_46A5Code_46GDafinalObjects1Objects, gdjs.A5Code.mapOfGDgdjs_46A5Code_46GD3Objects1Objects, false, runtimeScene, false);
}if (gdjs.A5Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
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
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8545988);
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
gdjs.A5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD1Objects1[i].setPosition(448,352);
}
}{for(var i = 0, len = gdjs.A5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD2Objects1[i].setPosition(448,448);
}
}{for(var i = 0, len = gdjs.A5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD3Objects1[i].setPosition(448,544);
}
}{for(var i = 0, len = gdjs.A5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A5Code.GD4Objects1[i].setPosition(448,640);
}
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
gdjs.A5Code.condition1IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if ( gdjs.A5Code.condition0IsTrue_0.val ) {
{
{gdjs.A5Code.conditionTrue_1 = gdjs.A5Code.condition1IsTrue_0;
gdjs.A5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8558940);
}
}}
if (gdjs.A5Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{


gdjs.A5Code.condition0IsTrue_0.val = false;
{
gdjs.A5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A5Code.condition0IsTrue_0.val) {
gdjs.A5Code.GDareaObjects1.createFrom(runtimeScene.getObjects("area"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
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
gdjs.A5Code.GDcomoObjects1.length = 0;
gdjs.A5Code.GDcomoObjects2.length = 0;
gdjs.A5Code.GDafinalObjects1.length = 0;
gdjs.A5Code.GDafinalObjects2.length = 0;

gdjs.A5Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A5Code'] = gdjs.A5Code;
