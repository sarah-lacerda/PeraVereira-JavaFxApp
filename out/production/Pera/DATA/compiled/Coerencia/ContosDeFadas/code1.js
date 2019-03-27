gdjs.Scene2Code = {};
gdjs.Scene2Code.GDforwardButtonObjects1= [];
gdjs.Scene2Code.GDforwardButtonObjects2= [];
gdjs.Scene2Code.GDbackButtonObjects1= [];
gdjs.Scene2Code.GDbackButtonObjects2= [];
gdjs.Scene2Code.GDperaVereiraObjects1= [];
gdjs.Scene2Code.GDperaVereiraObjects2= [];
gdjs.Scene2Code.GDtextoObjects1= [];
gdjs.Scene2Code.GDtextoObjects2= [];
gdjs.Scene2Code.GDgoBackToAtivObjects1= [];
gdjs.Scene2Code.GDgoBackToAtivObjects2= [];
gdjs.Scene2Code.GDgoBackToTxtObjects1= [];
gdjs.Scene2Code.GDgoBackToTxtObjects2= [];
gdjs.Scene2Code.GDtelaObjects1= [];
gdjs.Scene2Code.GDtelaObjects2= [];

gdjs.Scene2Code.conditionTrue_0 = {val:false};
gdjs.Scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Scene2Code.condition1IsTrue_0 = {val:false};
gdjs.Scene2Code.condition2IsTrue_0 = {val:false};
gdjs.Scene2Code.condition3IsTrue_0 = {val:false};


gdjs.Scene2Code.eventsList0x703598 = function(runtimeScene) {

}; //End of gdjs.Scene2Code.eventsList0x703598
gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene2Code.GDbackButtonObjects1});gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene2Code.GDforwardButtonObjects1});gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene2Code.GDforwardButtonObjects1});gdjs.Scene2Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene2Code.eventsList0x703598(runtimeScene);
}


{

gdjs.Scene2Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
gdjs.Scene2Code.condition2IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2Code.condition1IsTrue_0.val ) {
{
gdjs.Scene2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}}
}
if (gdjs.Scene2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDbackButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}{for(var i = 0, len = gdjs.Scene2Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDbackButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scene2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDforwardButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene2Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
gdjs.Scene2Code.condition2IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene2Code.condition1IsTrue_0.val ) {
{
gdjs.Scene2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}}
}
if (gdjs.Scene2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}}

}


}; //End of gdjs.Scene2Code.eventsList0xb25a8


gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene2Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene2Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene2Code.GDbackButtonObjects1.length = 0;
gdjs.Scene2Code.GDbackButtonObjects2.length = 0;
gdjs.Scene2Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene2Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene2Code.GDtextoObjects1.length = 0;
gdjs.Scene2Code.GDtextoObjects2.length = 0;
gdjs.Scene2Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene2Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene2Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene2Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene2Code.GDtelaObjects1.length = 0;
gdjs.Scene2Code.GDtelaObjects2.length = 0;

gdjs.Scene2Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene2Code'] = gdjs.Scene2Code;
