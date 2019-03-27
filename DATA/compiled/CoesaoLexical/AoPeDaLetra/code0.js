gdjs.CapaCode = {};
gdjs.CapaCode.GDforwardButtonObjects1= [];
gdjs.CapaCode.GDforwardButtonObjects2= [];
gdjs.CapaCode.GDbackButtonObjects1= [];
gdjs.CapaCode.GDbackButtonObjects2= [];
gdjs.CapaCode.GDperaObjects1= [];
gdjs.CapaCode.GDperaObjects2= [];
gdjs.CapaCode.GDperaSaysObjects1= [];
gdjs.CapaCode.GDperaSaysObjects2= [];
gdjs.CapaCode.GDtextoObjects1= [];
gdjs.CapaCode.GDtextoObjects2= [];
gdjs.CapaCode.GDvoltarTextoObjects1= [];
gdjs.CapaCode.GDvoltarTextoObjects2= [];
gdjs.CapaCode.GDvoltarAtivObjects1= [];
gdjs.CapaCode.GDvoltarAtivObjects2= [];
gdjs.CapaCode.GDcapaObjects1= [];
gdjs.CapaCode.GDcapaObjects2= [];
gdjs.CapaCode.GDarrowObjects1= [];
gdjs.CapaCode.GDarrowObjects2= [];

gdjs.CapaCode.conditionTrue_0 = {val:false};
gdjs.CapaCode.condition0IsTrue_0 = {val:false};
gdjs.CapaCode.condition1IsTrue_0 = {val:false};
gdjs.CapaCode.condition2IsTrue_0 = {val:false};
gdjs.CapaCode.condition3IsTrue_0 = {val:false};
gdjs.CapaCode.conditionTrue_1 = {val:false};
gdjs.CapaCode.condition0IsTrue_1 = {val:false};
gdjs.CapaCode.condition1IsTrue_1 = {val:false};
gdjs.CapaCode.condition2IsTrue_1 = {val:false};
gdjs.CapaCode.condition3IsTrue_1 = {val:false};


gdjs.CapaCode.mapOfGDgdjs_46CapaCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.CapaCode.GDforwardButtonObjects1});gdjs.CapaCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.CapaCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.CapaCode.condition0IsTrue_0.val = false;
gdjs.CapaCode.condition1IsTrue_0.val = false;
gdjs.CapaCode.condition2IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CapaCode.condition0IsTrue_0.val ) {
{
gdjs.CapaCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CapaCode.mapOfGDgdjs_46CapaCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CapaCode.condition1IsTrue_0.val ) {
{
{gdjs.CapaCode.conditionTrue_1 = gdjs.CapaCode.condition2IsTrue_0;
gdjs.CapaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6777620);
}
}}
}
if (gdjs.CapaCode.condition2IsTrue_0.val) {
/* Reuse gdjs.CapaCode.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.CapaCode.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDforwardButtonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Texto", false);
}}

}


{


gdjs.CapaCode.condition0IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "animateArrow");
}if (gdjs.CapaCode.condition0IsTrue_0.val) {
gdjs.CapaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(gdjs.CapaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CapaCode.condition0IsTrue_0.val = false;
gdjs.CapaCode.condition1IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "animateArrow");
}if ( gdjs.CapaCode.condition0IsTrue_0.val ) {
{
{gdjs.CapaCode.conditionTrue_1 = gdjs.CapaCode.condition1IsTrue_0;
gdjs.CapaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6778972);
}
}}
if (gdjs.CapaCode.condition1IsTrue_0.val) {
gdjs.CapaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(gdjs.CapaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CapaCode.condition0IsTrue_0.val = false;
gdjs.CapaCode.condition1IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 8, "animateArrow");
}if ( gdjs.CapaCode.condition0IsTrue_0.val ) {
{
{gdjs.CapaCode.conditionTrue_1 = gdjs.CapaCode.condition1IsTrue_0;
gdjs.CapaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6779796);
}
}}
if (gdjs.CapaCode.condition1IsTrue_0.val) {
gdjs.CapaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(gdjs.CapaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CapaCode.condition0IsTrue_0.val = false;
gdjs.CapaCode.condition1IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "animateArrow");
}if ( gdjs.CapaCode.condition0IsTrue_0.val ) {
{
{gdjs.CapaCode.conditionTrue_1 = gdjs.CapaCode.condition1IsTrue_0;
gdjs.CapaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6780604);
}
}}
if (gdjs.CapaCode.condition1IsTrue_0.val) {
gdjs.CapaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(gdjs.CapaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CapaCode.condition0IsTrue_0.val = false;
gdjs.CapaCode.condition1IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 14, "animateArrow");
}if ( gdjs.CapaCode.condition0IsTrue_0.val ) {
{
{gdjs.CapaCode.conditionTrue_1 = gdjs.CapaCode.condition1IsTrue_0;
gdjs.CapaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6781484);
}
}}
if (gdjs.CapaCode.condition1IsTrue_0.val) {
gdjs.CapaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(80);
}
}}

}


{


gdjs.CapaCode.condition0IsTrue_0.val = false;
{
gdjs.CapaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CapaCode.condition0IsTrue_0.val) {
gdjs.CapaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CapaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CapaCode.GDarrowObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.CapaCode.eventsList0xb25a8


gdjs.CapaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CapaCode.GDforwardButtonObjects1.length = 0;
gdjs.CapaCode.GDforwardButtonObjects2.length = 0;
gdjs.CapaCode.GDbackButtonObjects1.length = 0;
gdjs.CapaCode.GDbackButtonObjects2.length = 0;
gdjs.CapaCode.GDperaObjects1.length = 0;
gdjs.CapaCode.GDperaObjects2.length = 0;
gdjs.CapaCode.GDperaSaysObjects1.length = 0;
gdjs.CapaCode.GDperaSaysObjects2.length = 0;
gdjs.CapaCode.GDtextoObjects1.length = 0;
gdjs.CapaCode.GDtextoObjects2.length = 0;
gdjs.CapaCode.GDvoltarTextoObjects1.length = 0;
gdjs.CapaCode.GDvoltarTextoObjects2.length = 0;
gdjs.CapaCode.GDvoltarAtivObjects1.length = 0;
gdjs.CapaCode.GDvoltarAtivObjects2.length = 0;
gdjs.CapaCode.GDcapaObjects1.length = 0;
gdjs.CapaCode.GDcapaObjects2.length = 0;
gdjs.CapaCode.GDarrowObjects1.length = 0;
gdjs.CapaCode.GDarrowObjects2.length = 0;

gdjs.CapaCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['CapaCode'] = gdjs.CapaCode;
