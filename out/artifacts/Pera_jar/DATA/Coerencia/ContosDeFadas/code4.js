gdjs.Scene5Code = {};
gdjs.Scene5Code.GDforwardButtonObjects1= [];
gdjs.Scene5Code.GDforwardButtonObjects2= [];
gdjs.Scene5Code.GDbackButtonObjects1= [];
gdjs.Scene5Code.GDbackButtonObjects2= [];
gdjs.Scene5Code.GDperaVereiraObjects1= [];
gdjs.Scene5Code.GDperaVereiraObjects2= [];
gdjs.Scene5Code.GDtextoObjects1= [];
gdjs.Scene5Code.GDtextoObjects2= [];
gdjs.Scene5Code.GDgoBackToAtivObjects1= [];
gdjs.Scene5Code.GDgoBackToAtivObjects2= [];
gdjs.Scene5Code.GDgoBackToTxtObjects1= [];
gdjs.Scene5Code.GDgoBackToTxtObjects2= [];
gdjs.Scene5Code.GDtelaObjects1= [];
gdjs.Scene5Code.GDtelaObjects2= [];

gdjs.Scene5Code.conditionTrue_0 = {val:false};
gdjs.Scene5Code.condition0IsTrue_0 = {val:false};
gdjs.Scene5Code.condition1IsTrue_0 = {val:false};
gdjs.Scene5Code.condition2IsTrue_0 = {val:false};
gdjs.Scene5Code.condition3IsTrue_0 = {val:false};


gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene5Code.GDforwardButtonObjects1});gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene5Code.GDforwardButtonObjects1});gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene5Code.GDbackButtonObjects1});gdjs.Scene5Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.Scene5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
gdjs.Scene5Code.condition1IsTrue_0.val = false;
gdjs.Scene5Code.condition2IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene5Code.condition0IsTrue_0.val ) {
{
gdjs.Scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene5Code.condition1IsTrue_0.val ) {
{
gdjs.Scene5Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}}
}
if (gdjs.Scene5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene6", false);
}}

}


{

gdjs.Scene5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDforwardButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
gdjs.Scene5Code.condition1IsTrue_0.val = false;
gdjs.Scene5Code.condition2IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene5Code.condition0IsTrue_0.val ) {
{
gdjs.Scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene5Code.condition1IsTrue_0.val ) {
{
gdjs.Scene5Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.Scene5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDbackButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", false);
}{for(var i = 0, len = gdjs.Scene5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDbackButtonObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.Scene5Code.eventsList0xb25a8


gdjs.Scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene5Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene5Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene5Code.GDbackButtonObjects1.length = 0;
gdjs.Scene5Code.GDbackButtonObjects2.length = 0;
gdjs.Scene5Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene5Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene5Code.GDtextoObjects1.length = 0;
gdjs.Scene5Code.GDtextoObjects2.length = 0;
gdjs.Scene5Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene5Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene5Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene5Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene5Code.GDtelaObjects1.length = 0;
gdjs.Scene5Code.GDtelaObjects2.length = 0;

gdjs.Scene5Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene5Code'] = gdjs.Scene5Code;
