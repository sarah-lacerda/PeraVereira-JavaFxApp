gdjs.Scene7Code = {};
gdjs.Scene7Code.GDforwardButtonObjects1= [];
gdjs.Scene7Code.GDforwardButtonObjects2= [];
gdjs.Scene7Code.GDbackButtonObjects1= [];
gdjs.Scene7Code.GDbackButtonObjects2= [];
gdjs.Scene7Code.GDperaVereiraObjects1= [];
gdjs.Scene7Code.GDperaVereiraObjects2= [];
gdjs.Scene7Code.GDtextoObjects1= [];
gdjs.Scene7Code.GDtextoObjects2= [];
gdjs.Scene7Code.GDgoBackToAtivObjects1= [];
gdjs.Scene7Code.GDgoBackToAtivObjects2= [];
gdjs.Scene7Code.GDgoBackToTxtObjects1= [];
gdjs.Scene7Code.GDgoBackToTxtObjects2= [];
gdjs.Scene7Code.GDtelaObjects1= [];
gdjs.Scene7Code.GDtelaObjects2= [];

gdjs.Scene7Code.conditionTrue_0 = {val:false};
gdjs.Scene7Code.condition0IsTrue_0 = {val:false};
gdjs.Scene7Code.condition1IsTrue_0 = {val:false};
gdjs.Scene7Code.condition2IsTrue_0 = {val:false};
gdjs.Scene7Code.condition3IsTrue_0 = {val:false};


gdjs.Scene7Code.eventsList0x703598 = function(runtimeScene) {

}; //End of gdjs.Scene7Code.eventsList0x703598
gdjs.Scene7Code.mapOfGDgdjs_46Scene7Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene7Code.GDforwardButtonObjects1});gdjs.Scene7Code.mapOfGDgdjs_46Scene7Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene7Code.GDbackButtonObjects1});gdjs.Scene7Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene7Code.eventsList0x703598(runtimeScene);
}


{

gdjs.Scene7Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene7Code.condition0IsTrue_0.val = false;
gdjs.Scene7Code.condition1IsTrue_0.val = false;
gdjs.Scene7Code.condition2IsTrue_0.val = false;
{
gdjs.Scene7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene7Code.mapOfGDgdjs_46Scene7Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene7Code.condition0IsTrue_0.val ) {
{
gdjs.Scene7Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene7Code.condition1IsTrue_0.val ) {
{
gdjs.Scene7Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.Scene7Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene7Code.GDforwardButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene8", false);
}{for(var i = 0, len = gdjs.Scene7Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene7Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scene7Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene7Code.condition0IsTrue_0.val = false;
gdjs.Scene7Code.condition1IsTrue_0.val = false;
gdjs.Scene7Code.condition2IsTrue_0.val = false;
{
gdjs.Scene7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene7Code.mapOfGDgdjs_46Scene7Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene7Code.condition0IsTrue_0.val ) {
{
gdjs.Scene7Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timeSinceScene");
}if ( gdjs.Scene7Code.condition1IsTrue_0.val ) {
{
gdjs.Scene7Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.Scene7Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene7Code.GDbackButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene6", false);
}{for(var i = 0, len = gdjs.Scene7Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene7Code.GDbackButtonObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.Scene7Code.eventsList0xb25a8


gdjs.Scene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene7Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene7Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene7Code.GDbackButtonObjects1.length = 0;
gdjs.Scene7Code.GDbackButtonObjects2.length = 0;
gdjs.Scene7Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene7Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene7Code.GDtextoObjects1.length = 0;
gdjs.Scene7Code.GDtextoObjects2.length = 0;
gdjs.Scene7Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene7Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene7Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene7Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene7Code.GDtelaObjects1.length = 0;
gdjs.Scene7Code.GDtelaObjects2.length = 0;

gdjs.Scene7Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene7Code'] = gdjs.Scene7Code;
