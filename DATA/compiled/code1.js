gdjs.PARTICIPANTESCode = {};
gdjs.PARTICIPANTESCode.GDforwardObjects1= [];
gdjs.PARTICIPANTESCode.GDforwardObjects2= [];
gdjs.PARTICIPANTESCode.GDbackObjects1= [];
gdjs.PARTICIPANTESCode.GDbackObjects2= [];
gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1= [];
gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects2= [];

gdjs.PARTICIPANTESCode.conditionTrue_0 = {val:false};
gdjs.PARTICIPANTESCode.condition0IsTrue_0 = {val:false};
gdjs.PARTICIPANTESCode.condition1IsTrue_0 = {val:false};
gdjs.PARTICIPANTESCode.condition2IsTrue_0 = {val:false};
gdjs.PARTICIPANTESCode.condition3IsTrue_0 = {val:false};
gdjs.PARTICIPANTESCode.conditionTrue_1 = {val:false};
gdjs.PARTICIPANTESCode.condition0IsTrue_1 = {val:false};
gdjs.PARTICIPANTESCode.condition1IsTrue_1 = {val:false};
gdjs.PARTICIPANTESCode.condition2IsTrue_1 = {val:false};
gdjs.PARTICIPANTESCode.condition3IsTrue_1 = {val:false};


gdjs.PARTICIPANTESCode.mapOfGDgdjs_46PARTICIPANTESCode_46GDforwardObjects1Objects = Hashtable.newFrom({"forward": gdjs.PARTICIPANTESCode.GDforwardObjects1});gdjs.PARTICIPANTESCode.mapOfGDgdjs_46PARTICIPANTESCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.PARTICIPANTESCode.GDbackObjects1});gdjs.PARTICIPANTESCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = false;
{
gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PARTICIPANTESCode.condition0IsTrue_0.val) {
gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1.createFrom(runtimeScene.getObjects("PARTICIPANTES"));
gdjs.PARTICIPANTESCode.GDbackObjects1.createFrom(runtimeScene.getObjects("back"));
gdjs.PARTICIPANTESCode.GDforwardObjects1.createFrom(runtimeScene.getObjects("forward"));
{for(var i = 0, len = gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1.length ;i < len;++i) {
    gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.PARTICIPANTESCode.GDforwardObjects1.length ;i < len;++i) {
    gdjs.PARTICIPANTESCode.GDforwardObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.PARTICIPANTESCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.PARTICIPANTESCode.GDbackObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "t");
}}

}


{

gdjs.PARTICIPANTESCode.GDforwardObjects1.createFrom(runtimeScene.getObjects("forward"));

gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = false;
gdjs.PARTICIPANTESCode.condition1IsTrue_0.val = false;
gdjs.PARTICIPANTESCode.condition2IsTrue_0.val = false;
{
gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PARTICIPANTESCode.condition0IsTrue_0.val ) {
{
gdjs.PARTICIPANTESCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PARTICIPANTESCode.mapOfGDgdjs_46PARTICIPANTESCode_46GDforwardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PARTICIPANTESCode.condition1IsTrue_0.val ) {
{
{gdjs.PARTICIPANTESCode.conditionTrue_1 = gdjs.PARTICIPANTESCode.condition2IsTrue_0;
gdjs.PARTICIPANTESCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6898292);
}
}}
}
if (gdjs.PARTICIPANTESCode.condition2IsTrue_0.val) {
{}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}}

}


{

gdjs.PARTICIPANTESCode.GDbackObjects1.createFrom(runtimeScene.getObjects("back"));

gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = false;
gdjs.PARTICIPANTESCode.condition1IsTrue_0.val = false;
gdjs.PARTICIPANTESCode.condition2IsTrue_0.val = false;
{
gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PARTICIPANTESCode.condition0IsTrue_0.val ) {
{
gdjs.PARTICIPANTESCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PARTICIPANTESCode.mapOfGDgdjs_46PARTICIPANTESCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PARTICIPANTESCode.condition1IsTrue_0.val ) {
{
{gdjs.PARTICIPANTESCode.conditionTrue_1 = gdjs.PARTICIPANTESCode.condition2IsTrue_0;
gdjs.PARTICIPANTESCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6801460);
}
}}
}
if (gdjs.PARTICIPANTESCode.condition2IsTrue_0.val) {
{}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CAPA", false);
}}

}


{


gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = false;
{
gdjs.PARTICIPANTESCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "t");
}if (gdjs.PARTICIPANTESCode.condition0IsTrue_0.val) {
gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1.createFrom(runtimeScene.getObjects("PARTICIPANTES"));
gdjs.PARTICIPANTESCode.GDbackObjects1.createFrom(runtimeScene.getObjects("back"));
gdjs.PARTICIPANTESCode.GDforwardObjects1.createFrom(runtimeScene.getObjects("forward"));
{for(var i = 0, len = gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1.length ;i < len;++i) {
    gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1[i].setOpacity(gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.PARTICIPANTESCode.GDforwardObjects1.length ;i < len;++i) {
    gdjs.PARTICIPANTESCode.GDforwardObjects1[i].setOpacity(gdjs.PARTICIPANTESCode.GDforwardObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.PARTICIPANTESCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.PARTICIPANTESCode.GDbackObjects1[i].setOpacity(gdjs.PARTICIPANTESCode.GDbackObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.PARTICIPANTESCode.eventsList0xb25a8


gdjs.PARTICIPANTESCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.PARTICIPANTESCode.GDforwardObjects1.length = 0;
gdjs.PARTICIPANTESCode.GDforwardObjects2.length = 0;
gdjs.PARTICIPANTESCode.GDbackObjects1.length = 0;
gdjs.PARTICIPANTESCode.GDbackObjects2.length = 0;
gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects1.length = 0;
gdjs.PARTICIPANTESCode.GDPARTICIPANTESObjects2.length = 0;

gdjs.PARTICIPANTESCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['PARTICIPANTESCode'] = gdjs.PARTICIPANTESCode;
