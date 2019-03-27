gdjs.Scene3Code = {};
gdjs.Scene3Code.GDforwardButtonObjects1= [];
gdjs.Scene3Code.GDforwardButtonObjects2= [];
gdjs.Scene3Code.GDbackButtonObjects1= [];
gdjs.Scene3Code.GDbackButtonObjects2= [];
gdjs.Scene3Code.GDperaVereiraObjects1= [];
gdjs.Scene3Code.GDperaVereiraObjects2= [];
gdjs.Scene3Code.GDtextoObjects1= [];
gdjs.Scene3Code.GDtextoObjects2= [];
gdjs.Scene3Code.GDgoBackToAtivObjects1= [];
gdjs.Scene3Code.GDgoBackToAtivObjects2= [];
gdjs.Scene3Code.GDgoBackToTxtObjects1= [];
gdjs.Scene3Code.GDgoBackToTxtObjects2= [];
gdjs.Scene3Code.GDtelaObjects1= [];
gdjs.Scene3Code.GDtelaObjects2= [];

gdjs.Scene3Code.conditionTrue_0 = {val:false};
gdjs.Scene3Code.condition0IsTrue_0 = {val:false};
gdjs.Scene3Code.condition1IsTrue_0 = {val:false};
gdjs.Scene3Code.condition2IsTrue_0 = {val:false};
gdjs.Scene3Code.condition3IsTrue_0 = {val:false};


gdjs.Scene3Code.eventsList0x703598 = function(runtimeScene) {

}; //End of gdjs.Scene3Code.eventsList0x703598
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene3Code.GDbackButtonObjects1});gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene3Code.GDforwardButtonObjects1});gdjs.Scene3Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene3Code.eventsList0x703598(runtimeScene);
}


{

gdjs.Scene3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
gdjs.Scene3Code.condition2IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene3Code.condition1IsTrue_0.val ) {
{
gdjs.Scene3Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.Scene3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDbackButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}{for(var i = 0, len = gdjs.Scene3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDbackButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scene3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
gdjs.Scene3Code.condition2IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
gdjs.Scene3Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene3Code.condition1IsTrue_0.val ) {
{
gdjs.Scene3Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.Scene3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDforwardButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", false);
}{for(var i = 0, len = gdjs.Scene3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.Scene3Code.eventsList0xb25a8


gdjs.Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene3Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene3Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene3Code.GDbackButtonObjects1.length = 0;
gdjs.Scene3Code.GDbackButtonObjects2.length = 0;
gdjs.Scene3Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene3Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene3Code.GDtextoObjects1.length = 0;
gdjs.Scene3Code.GDtextoObjects2.length = 0;
gdjs.Scene3Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene3Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene3Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene3Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene3Code.GDtelaObjects1.length = 0;
gdjs.Scene3Code.GDtelaObjects2.length = 0;

gdjs.Scene3Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene3Code'] = gdjs.Scene3Code;
