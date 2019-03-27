gdjs.Scene6Code = {};
gdjs.Scene6Code.GDforwardButtonObjects1= [];
gdjs.Scene6Code.GDforwardButtonObjects2= [];
gdjs.Scene6Code.GDbackButtonObjects1= [];
gdjs.Scene6Code.GDbackButtonObjects2= [];
gdjs.Scene6Code.GDperaVereiraObjects1= [];
gdjs.Scene6Code.GDperaVereiraObjects2= [];
gdjs.Scene6Code.GDtextoObjects1= [];
gdjs.Scene6Code.GDtextoObjects2= [];
gdjs.Scene6Code.GDgoBackToAtivObjects1= [];
gdjs.Scene6Code.GDgoBackToAtivObjects2= [];
gdjs.Scene6Code.GDgoBackToTxtObjects1= [];
gdjs.Scene6Code.GDgoBackToTxtObjects2= [];
gdjs.Scene6Code.GDtelaObjects1= [];
gdjs.Scene6Code.GDtelaObjects2= [];

gdjs.Scene6Code.conditionTrue_0 = {val:false};
gdjs.Scene6Code.condition0IsTrue_0 = {val:false};
gdjs.Scene6Code.condition1IsTrue_0 = {val:false};
gdjs.Scene6Code.condition2IsTrue_0 = {val:false};
gdjs.Scene6Code.condition3IsTrue_0 = {val:false};


gdjs.Scene6Code.eventsList0x703598 = function(runtimeScene) {

}; //End of gdjs.Scene6Code.eventsList0x703598
gdjs.Scene6Code.mapOfGDgdjs_46Scene6Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene6Code.GDforwardButtonObjects1});gdjs.Scene6Code.mapOfGDgdjs_46Scene6Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene6Code.GDbackButtonObjects1});gdjs.Scene6Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene6Code.eventsList0x703598(runtimeScene);
}


{

gdjs.Scene6Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene6Code.condition0IsTrue_0.val = false;
gdjs.Scene6Code.condition1IsTrue_0.val = false;
gdjs.Scene6Code.condition2IsTrue_0.val = false;
{
gdjs.Scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene6Code.mapOfGDgdjs_46Scene6Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene6Code.condition0IsTrue_0.val ) {
{
gdjs.Scene6Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene6Code.condition1IsTrue_0.val ) {
{
gdjs.Scene6Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.Scene6Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene6Code.GDforwardButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene7", false);
}{for(var i = 0, len = gdjs.Scene6Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene6Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scene6Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene6Code.condition0IsTrue_0.val = false;
gdjs.Scene6Code.condition1IsTrue_0.val = false;
gdjs.Scene6Code.condition2IsTrue_0.val = false;
{
gdjs.Scene6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene6Code.condition0IsTrue_0.val ) {
{
gdjs.Scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene6Code.mapOfGDgdjs_46Scene6Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene6Code.condition1IsTrue_0.val ) {
{
gdjs.Scene6Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.Scene6Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene6Code.GDbackButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5", false);
}{for(var i = 0, len = gdjs.Scene6Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene6Code.GDbackButtonObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.Scene6Code.eventsList0xb25a8


gdjs.Scene6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene6Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene6Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene6Code.GDbackButtonObjects1.length = 0;
gdjs.Scene6Code.GDbackButtonObjects2.length = 0;
gdjs.Scene6Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene6Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene6Code.GDtextoObjects1.length = 0;
gdjs.Scene6Code.GDtextoObjects2.length = 0;
gdjs.Scene6Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene6Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene6Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene6Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene6Code.GDtelaObjects1.length = 0;
gdjs.Scene6Code.GDtelaObjects2.length = 0;

gdjs.Scene6Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene6Code'] = gdjs.Scene6Code;
