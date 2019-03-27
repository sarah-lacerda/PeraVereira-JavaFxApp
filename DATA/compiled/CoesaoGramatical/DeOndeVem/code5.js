gdjs.A4Code = {};
gdjs.A4Code.GDforwardButtonObjects1= [];
gdjs.A4Code.GDforwardButtonObjects2= [];
gdjs.A4Code.GDbackButtonObjects1= [];
gdjs.A4Code.GDbackButtonObjects2= [];
gdjs.A4Code.GDperaObjects1= [];
gdjs.A4Code.GDperaObjects2= [];
gdjs.A4Code.GDperaSaysObjects1= [];
gdjs.A4Code.GDperaSaysObjects2= [];
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


gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A4Code.GD2Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A4Code.GD2Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A4Code.GD3Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A4Code.GD4Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A4Code.GD3Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A4Code.GD3Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A4Code.GD2Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A4Code.GD4Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A4Code.GD4Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects = Hashtable.newFrom({"4": gdjs.A4Code.GD4Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects = Hashtable.newFrom({"3": gdjs.A4Code.GD3Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects = Hashtable.newFrom({"1": gdjs.A4Code.GD1Objects1});gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A4Code.GD2Objects1});gdjs.A4Code.eventsList0xb25a8 = function(runtimeScene) {

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
gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(6));
}{for(var i = 0, len = gdjs.A4Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD1Objects1[i].activateBehavior("Draggable", false);
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

gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
gdjs.A4Code.condition3IsTrue_0.val = false;
gdjs.A4Code.condition4IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
gdjs.A4Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A4Code.condition2IsTrue_0.val ) {
{
gdjs.A4Code.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects, true, runtimeScene, false);
}if ( gdjs.A4Code.condition3IsTrue_0.val ) {
{
gdjs.A4Code.condition4IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects, true, runtimeScene, false);
}}
}
}
}
if (gdjs.A4Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A4Code.GD2Objects1 */
gdjs.A4Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A4Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDperaObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].setPosition(32,371);
}
}{for(var i = 0, len = gdjs.A4Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD2Objects1[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
gdjs.A4Code.condition3IsTrue_0.val = false;
gdjs.A4Code.condition4IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
gdjs.A4Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A4Code.condition2IsTrue_0.val ) {
{
gdjs.A4Code.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A4Code.condition3IsTrue_0.val ) {
{
gdjs.A4Code.condition4IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects, true, runtimeScene, false);
}}
}
}
}
if (gdjs.A4Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A4Code.GD3Objects1 */
gdjs.A4Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A4Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDperaObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].setPosition(352,371);
}
}{for(var i = 0, len = gdjs.A4Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD3Objects1[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.A4Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A4Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A4Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A4Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));

gdjs.A4Code.condition0IsTrue_0.val = false;
gdjs.A4Code.condition1IsTrue_0.val = false;
gdjs.A4Code.condition2IsTrue_0.val = false;
gdjs.A4Code.condition3IsTrue_0.val = false;
gdjs.A4Code.condition4IsTrue_0.val = false;
{
gdjs.A4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A4Code.condition0IsTrue_0.val ) {
{
gdjs.A4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A4Code.condition1IsTrue_0.val ) {
{
gdjs.A4Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD4Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A4Code.condition2IsTrue_0.val ) {
{
gdjs.A4Code.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD3Objects1Objects, false, runtimeScene, false);
}if ( gdjs.A4Code.condition3IsTrue_0.val ) {
{
gdjs.A4Code.condition4IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD1Objects1Objects, gdjs.A4Code.mapOfGDgdjs_46A4Code_46GD2Objects1Objects, false, runtimeScene, false);
}}
}
}
}
if (gdjs.A4Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A4Code.GD4Objects1 */
gdjs.A4Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A4Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A4Code.GDperaObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].setPosition(672,371);
}
}{for(var i = 0, len = gdjs.A4Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A4Code.GD4Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

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
