gdjs.Scene4Code = {};
gdjs.Scene4Code.GDforwardButtonObjects1= [];
gdjs.Scene4Code.GDforwardButtonObjects2= [];
gdjs.Scene4Code.GDbackButtonObjects1= [];
gdjs.Scene4Code.GDbackButtonObjects2= [];
gdjs.Scene4Code.GDperaVereiraObjects1= [];
gdjs.Scene4Code.GDperaVereiraObjects2= [];
gdjs.Scene4Code.GDtextoObjects1= [];
gdjs.Scene4Code.GDtextoObjects2= [];
gdjs.Scene4Code.GDgoBackToAtivObjects1= [];
gdjs.Scene4Code.GDgoBackToAtivObjects2= [];
gdjs.Scene4Code.GDgoBackToTxtObjects1= [];
gdjs.Scene4Code.GDgoBackToTxtObjects2= [];
gdjs.Scene4Code.GDtelaObjects1= [];
gdjs.Scene4Code.GDtelaObjects2= [];

gdjs.Scene4Code.conditionTrue_0 = {val:false};
gdjs.Scene4Code.condition0IsTrue_0 = {val:false};
gdjs.Scene4Code.condition1IsTrue_0 = {val:false};
gdjs.Scene4Code.condition2IsTrue_0 = {val:false};
gdjs.Scene4Code.condition3IsTrue_0 = {val:false};


gdjs.Scene4Code.eventsList0x703598 = function(runtimeScene) {

}; //End of gdjs.Scene4Code.eventsList0x703598
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene4Code.GDbackButtonObjects1});gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene4Code.GDforwardButtonObjects1});gdjs.Scene4Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene4Code.eventsList0x703598(runtimeScene);
}


{

gdjs.Scene4Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
gdjs.Scene4Code.condition2IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene4Code.condition1IsTrue_0.val ) {
{
gdjs.Scene4Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.Scene4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDbackButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}{for(var i = 0, len = gdjs.Scene4Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDbackButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scene4Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
gdjs.Scene4Code.condition2IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
gdjs.Scene4Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene4Code.condition1IsTrue_0.val ) {
{
gdjs.Scene4Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.Scene4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDforwardButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5", false);
}{for(var i = 0, len = gdjs.Scene4Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.Scene4Code.eventsList0xb25a8


gdjs.Scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene4Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene4Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene4Code.GDbackButtonObjects1.length = 0;
gdjs.Scene4Code.GDbackButtonObjects2.length = 0;
gdjs.Scene4Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene4Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene4Code.GDtextoObjects1.length = 0;
gdjs.Scene4Code.GDtextoObjects2.length = 0;
gdjs.Scene4Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene4Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene4Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene4Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene4Code.GDtelaObjects1.length = 0;
gdjs.Scene4Code.GDtelaObjects2.length = 0;

gdjs.Scene4Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene4Code'] = gdjs.Scene4Code;
